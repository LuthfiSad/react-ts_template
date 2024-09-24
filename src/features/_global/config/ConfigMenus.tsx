import { FaCalendar, FaUser } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";
import { ItemMenuAdmin } from "../types/MenuTypes";

export const CONFIG_MENU_ADMIN: ItemMenuAdmin[] = [
  {
    icon: <FaUser />,
    name: "User",
    to: "/admin/user",
  },
  {
    icon: <FaCalendar />,
    name: "Acara",
    to: "/admin/acara",
  },
  {
    icon: <FaUserGroup />,
    name: "Angkatan",
    to: "/admin/angkatan",
  },
  {
    icon: <FaUserGroup />,
    name: "Anggota",
    to: "/admin/anggota",
  },
  {
    icon: <FaUserGroup />,
    name: "Struktural",
    to: "/admin/struktural",
  },
  {
    icon: <GiTeacher />,
    name: "Dosen",
    to: "/admin/dosen",
  },
];
