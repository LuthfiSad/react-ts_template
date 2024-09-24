import { CONFIG_APP } from "@core/configs/app";
import { MenuAdminConfig } from "@features/_global/types/MenuTypes";
import { Button, IconButton, Typography } from "@material-tailwind/react";
import React from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import ItemSidenav from "./item";
import { IoMdLogOut } from "react-icons/io";

const Sidenav: React.FC<{
  Menus: MenuAdminConfig;
  openSidenav: boolean;
  setOpenSidenav: () => void;
}> = ({ Menus, openSidenav, setOpenSidenav }) => {
  return (
    <aside
      className={`bg-gradient-to-br from-gray-800 to-gray-900 ${
        openSidenav ? "translate-x-0" : "-translate-x-80"
      } fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 border border-blue-gray-100`}
    >
      <div className={`relative`}>
        <Link to="/" className="py-6 px-8 text-center">
          <Typography variant="h6" color={"white"}>
            {CONFIG_APP.APP_NAME}
          </Typography>
        </Link>
        <IconButton
          variant="text"
          color="white"
          size="sm"
          ripple={false}
          className="absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
          onClick={setOpenSidenav}
        >
          <IoMdClose className="h-5 w-5 text-white" />
        </IconButton>
      </div>
      <div className="m-4">
        <ul className="mb-4 flex flex-col gap-1">
          {Menus.map(({ icon, name, to }, index) => (
            <ItemSidenav key={index} name={name} to={to} icon={icon} />
          ))}
          <li>
            <Button
              variant={"text"}
              color={"white"}
              className="flex items-center gap-4 px-4 capitalize"
              fullWidth
              onClick={() => {
                if (!window.confirm("Are you sure you want to logout?")) return;
                localStorage.removeItem("token");
                window.location.reload();
              }}
            >
              <IoMdLogOut />
              <Typography color="inherit" className="font-medium capitalize">
                Logout
              </Typography>
            </Button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidenav;
