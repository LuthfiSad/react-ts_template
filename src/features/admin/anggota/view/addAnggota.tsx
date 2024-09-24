import React from "react";
import AdminNavbar from "@features/admin/components/AdminNavbar";
import FormAddAnggota from "../components/FormAddAnggota";

const AddAnggotaView: React.FC = () => {
  return (
    <>
      <AdminNavbar layout="Anggota" page="Add Anggota" />
      <div className="mt-12 mb-8 flex flex-col gap-12 flex-1">
        <FormAddAnggota />
      </div>
    </>
  );
};

export default AddAnggotaView;
