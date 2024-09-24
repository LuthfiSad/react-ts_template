import { ApiErrorResponse, ApiResponse } from "@core/libs/api/types";
import { AnggotaDTO } from "@core/model/anggota";
import { anggotaService } from "@core/services/anggota";
import useDebounce from "@features/_global/hooks/useDebounce";
import { useAuth } from "@features/auth/hooks/useAuth";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

interface Options {
  page?: number;
  perPage?: number;
  search?: string;
}

type PayloadType = "create" | "update" | "delete";

interface AnggotaCreation {
  type: PayloadType;
  data?: AnggotaDTO;
  id?: string;
}

export const useAnggota = (options?: Options) => {
  const [searchParams] = useSearchParams();
  const page = options?.page || searchParams.get("page") || 1;
  const perPage = options?.perPage || searchParams.get("perPage") || 10;
  const searchQuery = options?.search || searchParams.get("search") || undefined;

  const search = useDebounce(searchQuery as string, 500);
  const query = useQuery({
    queryKey: ["anggotas", { page, perPage, search }],
    queryFn: () =>
      anggotaService.get({
        queryParams: {
          perPage: perPage ? Number(perPage) : undefined,
          page: page ? Number(page) : undefined,
          search,
        },
      }),
  });
  return query;
};

export function useAnggotaCreation() {
  const auth = useAuth();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: async ({ data, type, id }: AnggotaCreation) => {
      switch (type) {
        case "create":
          return anggotaService.post(data, { bearerToken: auth?.token });
        case "update":
          return anggotaService.put(data, {
            path: id,
            bearerToken: auth?.token,
          });
        case "delete":
          return anggotaService.delete({ path: id, bearerToken: auth?.token });
        default:
          return anggotaService.post(data, { bearerToken: auth?.token });
      }
    },
    onSuccess: (res) => {
      toast.success(res.message, {
        position: "top-right",
        autoClose: 3000,
        pauseOnHover: true,
        theme: "dark",
      });
      navigate("/admin/anggota");

      queryClient.removeQueries({ queryKey: ["anggotas"] });
      queryClient.removeQueries({ queryKey: ["anggotasById"] });
      return;
    },
    onError: (err: ApiErrorResponse<ApiResponse>) => {
      toast.error(err.message, {
        position: "top-right",
        autoClose: 3000,
        pauseOnHover: true,
        theme: "dark",
      });
    },
  });
  return mutation;
}

export function useAnggotaById() {
  const { id } = useParams();
  return useQuery({
    queryKey: ["anggotasById", id],
    queryFn: () => anggotaService.getById({ path: id }),
    enabled: !!id,
  });
}
