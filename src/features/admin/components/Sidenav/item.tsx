import { ItemMenuAdmin } from "@features/_global/types/MenuTypes";
import { Button, Typography } from "@material-tailwind/react";
import React from "react";
import { NavLink } from "react-router-dom";

const ItemSidenav: React.FC<ItemMenuAdmin> = ({ name, to, icon }) => {
  return (
    <li key={name}>
      <NavLink to={to}>
        {({ isActive }) => (
          <Button
            variant={isActive ? "gradient" : "text"}
            color={isActive ? "black" : "white"}
            className="flex items-center gap-4 px-4 capitalize"
            fullWidth
          >
            {icon}
            <Typography color="inherit" className="font-medium capitalize">
              {name}
            </Typography>
          </Button>
        )}
      </NavLink>
    </li>
  );
};

export default ItemSidenav;
