import React from "react";
import AdminNavbar from "@features/admin/components/AdminNavbar";
import FormEditAnggota from "../components/FormEditAnggota";

const EditAnggotaView: React.FC = () => {
  return (
    <>
      <AdminNavbar layout="Anggota" page="Edit Anggota" />
      <div className="mt-12 mb-8 flex flex-col gap-12 flex-1">
        <FormEditAnggota />
      </div>
    </>
  );
};

export default EditAnggotaView;
