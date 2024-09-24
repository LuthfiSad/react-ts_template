import { AuthLoginBodyModel } from "@core/model/auth";
import { authService } from "@core/services/auth";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function useAuthLogin() {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (body: AuthLoginBodyModel) => authService.login(body),
    onSuccess: (res) => {
      toast.success(res.message, {
        position: "top-right",
        autoClose: 3000,
        pauseOnHover: true,
        theme: "dark",
      });
      localStorage.setItem("token", res?.data?.access_token as string);
      navigate("/admin/acara");
    },
    onError: (err) => {
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

export function useAuth() {
  const token = localStorage.getItem("token") || "";

  if (token) {
    return { token };
  }
  return null;
}
