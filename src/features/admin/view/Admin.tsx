import { CONFIG_MENU_ADMIN } from "@features/_global/config";
import Footer from "@features/admin/components/Footer";
import { useAuth } from "@features/auth/hooks/useAuth";
import { useAtom } from "jotai";
import React, { useEffect } from "react";
import { Navigate, Outlet, ScrollRestoration } from "react-router-dom";
import Sidenav from "../components/Sidenav";
import { openSidenavAtom } from "../store/sidenav";

const AdminView: React.FC = () => {
  const [openSidenav, setOpenSidenav] = useAtom(openSidenavAtom);
  const auth = useAuth();

  if (!auth?.token) {
    return <Navigate to={"/admin/login"} replace />;
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1140) {
        setOpenSidenav(false);
      }
    };
    window.addEventListener("resize", handleResize);
  }, [window.innerWidth]);

  const handleOpenSidenav = () => setOpenSidenav(!openSidenav);

  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      <Sidenav
        openSidenav={openSidenav}
        setOpenSidenav={handleOpenSidenav}
        Menus={CONFIG_MENU_ADMIN}
      />
      <div className="p-4 min-h-screen flex flex-col xl:ml-80 justify-between">
        <Outlet />
        <ScrollRestoration />
        <div className="text-blue-gray-600">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AdminView;
