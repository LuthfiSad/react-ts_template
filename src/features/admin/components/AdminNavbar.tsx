import { openSidenavAtom } from "@features/admin/store/sidenav";
import {
  Breadcrumbs,
  IconButton,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import { useAtom } from "jotai";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const AdminNavbar: React.FC<{
  page: string;
  layout: string;
}> = ({
  page,
  layout,
}) => {
  const [openSidenav, setOpenSidenav] = useAtom(openSidenavAtom);

  return (
    <Navbar
      color="transparent"
      className={`rounded-xl transition-all px-0 py-1`}
      fullWidth
    >
      <div className="flex justify-between gap-6 flex-row items-center">
        <div className="capitalize w-full px-5">
          <div className="flex flex-col gap-3">
            <Breadcrumbs className={`bg-transparent p-0 transition-all`}>
              <Link to={`/admin/${layout}`}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal opacity-50 transition-all hover:text-blue-500 hover:opacity-100"
                >
                  {layout}
                </Typography>
              </Link>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {page}
              </Typography>
            </Breadcrumbs>
            <Typography variant="h6" color="blue-gray">
              {page}
            </Typography>
          </div>
        </div>
        <div className="flex items-center">
          <IconButton
            variant="text"
            color="blue-gray"
            className="grid xl:hidden"
            onClick={() => setOpenSidenav(!openSidenav)}
          >
            <RxHamburgerMenu className="h-6 w-6 text-blue-gray-500" />
          </IconButton>
        </div>
      </div>
    </Navbar>
  );
};

export default AdminNavbar;
