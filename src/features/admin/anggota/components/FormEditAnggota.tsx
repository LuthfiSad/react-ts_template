import { Button } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { PageLayout } from "@features/_global/components/PageLayout";
import { useNavigate, useParams } from "react-router-dom";
import InputGroup from "@features/_global/components/Input/InputGroup";
import {
  useAnggota,
  useAnggotaById,
  useAnggotaCreation,
} from "../hooks/useAnggota";
import { AnggotaDTO } from "@core/model/anggota";
import { SimpleLoadingTable } from "@features/_global/components/SimpleLoadingTable";

const InitialValue: AnggotaDTO = {
  nim: "",
  name: "",
  angkatanId: "",
  email: "",
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",
  isActive: "",
};

const FormEditAnggota: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: angkatan, isLoading: isLoadingAngkatan } = useAnggota();
  const { data: anggotaById, isLoading } = useAnggotaById();
  // const { data: angkatan, isLoading } = useAngkatan();
  const mutation = useAnggotaCreation();

  const [anggotaBody, setAnggotaBody] = useState<AnggotaDTO>({
    ...InitialValue,
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof AnggotaDTO, string>>
  >({});

  useEffect(() => {
    if (anggotaById && anggotaById.data) {
      const {
        nim,
        name,
        angkatan,
        email,
        facebook,
        instagram,
        linkedin,
        twitter,
        isActive,
      } = anggotaById.data;
      // const categoryId = category ? category.id : "";
      setAnggotaBody({
        nim,
        name,
        angkatanId: angkatan?.id,
        email,
        facebook,
        instagram,
        linkedin,
        twitter,
        isActive,
      });
    }
  }, [anggotaById]);

  const navigate = useNavigate();

  const validate = () => {
    const newErrors: Partial<Record<keyof AnggotaDTO, string>> = {};
    let isValid = true;

    if (!anggotaBody.nim) {
      newErrors.nim = "NIM is required";
      isValid = false;
    }

    if (!anggotaBody.name) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!anggotaBody.angkatanId) {
      newErrors.angkatanId = "Angkatan is required";
      isValid = false;
    }

    // if (!anggotaBody.email) {
    //   newErrors.email = "Email is required";
    //   isValid = false;
    // }

    if (!anggotaBody.isActive && typeof anggotaBody.isActive !== "boolean") {
      newErrors.isActive = "Status is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    anggotaBody.isActive = JSON.parse(anggotaBody.isActive as string);
    
    await mutation.mutateAsync({
      type: "update",
      data: anggotaBody,
      id,
    });
  };

  const handleReset = () => {
    setAnggotaBody(InitialValue);
    setErrors({});
  };

  return (
    <PageLayout
      title="Edit Anggota"
      headBackground="amber"
      action={{
        show: true,
        buttonTitle: "Cancel",
        buttonProps: { onClick: () => navigate(-1) },
        colorButton: "red",
      }}
    >
      {(isLoading || isLoadingAngkatan) && (
        <table className="w-full justify-center items-center">
          <tbody>
            <SimpleLoadingTable />
          </tbody>
        </table>
      )}
      {!isLoading && angkatan?.data && anggotaById?.data && (
        <form onSubmit={handleSubmit}>
          <div className="mb-4 my-2">
            <InputGroup
              disabled={mutation.isPending}
              type="text"
              label="NIM"
              variant="outlined"
              error={errors.nim}
              value={anggotaBody.nim as string}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setAnggotaBody({ ...anggotaBody, nim: e.target.value })
              }
            />
          </div>
          <div className="mb-4 my-2">
            <InputGroup
              disabled={mutation.isPending}
              type="text"
              label="Name"
              variant="outlined"
              error={errors.name}
              value={anggotaBody.name as string}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setAnggotaBody({ ...anggotaBody, name: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <InputGroup
              disabled={mutation.isPending}
              type="select"
              label="Angkatan"
              value={anggotaBody.angkatanId as string}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                setAnggotaBody({
                  ...anggotaBody,
                  angkatanId: e,
                });
              }}
              error={errors.angkatanId}
              options={[
                { value: "", label: "Pilih Angkatan" },
                ...angkatan?.data.map((angkatan) => ({
                  value: angkatan.id,
                  label: angkatan.name,
                })),
              ]}
            />
          </div>
          <div className="mb-4 my-2">
            <InputGroup
              disabled={mutation.isPending}
              type="email"
              label="Email"
              variant="outlined"
              error={errors.email}
              value={anggotaBody.email as string}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setAnggotaBody({ ...anggotaBody, email: e.target.value })
              }
            />
          </div>
          <div className="mb-4 my-2">
            <InputGroup
              disabled={mutation.isPending}
              type="text"
              label="Facebook"
              variant="outlined"
              error={errors.facebook}
              value={anggotaBody.facebook as string}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setAnggotaBody({ ...anggotaBody, facebook: e.target.value })
              }
            />
          </div>
          <div className="mb-4 my-2">
            <InputGroup
              disabled={mutation.isPending}
              type="text"
              label="Instagram"
              variant="outlined"
              error={errors.instagram}
              value={anggotaBody.instagram as string}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setAnggotaBody({ ...anggotaBody, instagram: e.target.value })
              }
            />
          </div>
          <div className="mb-4 my-2">
            <InputGroup
              disabled={mutation.isPending}
              type="text"
              label="Linkedin"
              variant="outlined"
              error={errors.linkedin}
              value={anggotaBody.linkedin as string}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setAnggotaBody({ ...anggotaBody, linkedin: e.target.value })
              }
            />
          </div>
          <div className="mb-4 my-2">
            <InputGroup
              disabled={mutation.isPending}
              type="text"
              label="Twitter"
              variant="outlined"
              error={errors.twitter}
              value={anggotaBody.twitter as string}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setAnggotaBody({ ...anggotaBody, twitter: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <InputGroup
              disabled={mutation.isPending}
              type="select"
              label="Status"
              value={String(anggotaBody.isActive)}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                setAnggotaBody({
                  ...anggotaBody,
                  isActive: e,
                });
              }}
              error={errors.isActive}
              options={[
                { value: "", label: "Pilih Status" },
                { value: "true", label: "Active" },
                { value: "false", label: "Non Active" },
              ]}
            />
          </div>
          <div className="flex justify-center items-center gap-5">
            <Button
              disabled={mutation.isPending}
              onClick={handleReset}
              variant="outlined"
              fullWidth
            >
              Reset
            </Button>
            <Button
              className="text-white"
              type="submit"
              variant="gradient"
              color="amber"
              fullWidth
              disabled={mutation.isPending}
            >
              {mutation.isPending ? "Loading..." : "Edit"}
            </Button>
          </div>
        </form>
      )}
    </PageLayout>
  );
};

export default FormEditAnggota;
