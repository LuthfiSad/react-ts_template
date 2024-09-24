import AddSubAcaraView from "@features/admin/acara/components/SubAcara/view/addSubAcara";
import DetailAbsensiView from "@features/admin/acara/components/SubAcara/view/detailAbsensi";
import DetailSubAcaraView from "@features/admin/acara/components/SubAcara/view/detailSubAcara";
import EditSubAcaraView from "@features/admin/acara/components/SubAcara/view/editSubAcara";
import AcaraView from "@features/admin/acara/view/acara";
import AddAcaraView from "@features/admin/acara/view/addAcara";
import DetailAcaraView from "@features/admin/acara/view/detailAcara";
import EditAcaraView from "@features/admin/acara/view/editAcara";
import AddAnggotaView from "@features/admin/anggota/view/addAnggota";
import { AnggotaView } from "@features/admin/anggota/view/Anggotas";
import EditAnggotaView from "@features/admin/anggota/view/editAnggota";
import { AngkatanView } from "@features/admin/angkatan/view/Angkatan";
import AddDosenView from "@features/admin/dosen/view/addDosen";
import { DosenView } from "@features/admin/dosen/view/Dosen";
import EditDosenView from "@features/admin/dosen/view/editDosen";
import AddStrukturalView from "@features/admin/struktural/view/addStruktural";
import EditStrukturalView from "@features/admin/struktural/view/editStruktural";
import StrukturalView from "@features/admin/struktural/view/struktural";
import AddUserView from "@features/admin/users/view/addUser";
import EditUserView from "@features/admin/users/view/editUser";
import { UserView } from "@features/admin/users/view/users";
import AdminView from "@features/admin/view/Admin";
import LoginView from "@features/auth/view/LoginView";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/admin/login",
    element: <LoginView />,
  },
  {
    path: "/",
    element: <AdminView />,
    children: [
      {
        path: "/admin/acara",
        element: <AcaraView />,
      },
      {
        path: "/admin/acara/create",
        element: <AddAcaraView />,
      },
      {
        path: "/admin/acara/:id",
        element: <DetailAcaraView />,
      },
      {
        path: "/admin/acara/edit/:id",
        element: <EditAcaraView />,
      },
      {
        path: "/admin/sub-acara/create",
        element: <AddSubAcaraView />,
      },
      {
        path: "/admin/sub-acara/:id",
        element: <DetailSubAcaraView />,
      },
      {
        path: "/admin/sub-acara/edit/:id",
        element: <EditSubAcaraView />,
      },
      {
        path: "/admin/absensi/:id",
        element: <DetailAbsensiView />,
      },
      {
        path: "/admin/user",
        element: <UserView />,
      },
      {
        path: "/admin/user/create",
        element: <AddUserView />,
      },
      {
        path: "/admin/user/edit/:id",
        element: <EditUserView />,
      },
      {
        path: "/admin/anggota",
        element: <AnggotaView />,
      },
      {
        path: "/admin/anggota/create",
        element: <AddAnggotaView />,
      },
      {
        path: "/admin/anggota/edit/:id",
        element: <EditAnggotaView />,
      },
      {
        path: "/admin/dosen",
        element: <DosenView />,
      },
      {
        path: "/admin/dosen/create",
        element: <AddDosenView />,
      },
      {
        path: "/admin/dosen/edit/:id",
        element: <EditDosenView />,
      },
      {
        path: "/admin/struktural",
        element: <StrukturalView />,
      },
      {
        path: "/admin/struktural/create",
        element: <AddStrukturalView />,
      },
      {
        path: "/admin/struktural/edit/:id",
        element: <EditStrukturalView />,
      },
      {
        path: "/admin/angkatan",
        element: <AngkatanView />,
      },
    ],
  },
]);
