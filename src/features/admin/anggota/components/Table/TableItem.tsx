import {
  Chip,
  Popover,
  PopoverContent,
  PopoverHandler,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

interface IAnggotaItemProps {
  id: string;
  name: string;
  nim: string;
  angkatan?: {
    id: string;
    year: string;
  };
  email?: string | null;
  facebook?: string | null;
  instagram?: string | null;
  linkedin?: string | null;
  twitter?: string | null;
  isActive?: boolean;
  show?: boolean;
  handleDelete: (id: string) => void;
}

export const TableItem: React.FC<IAnggotaItemProps> = ({
  angkatan,
  email,
  facebook,
  instagram,
  linkedin,
  twitter,
  show,
  isActive,
  name,
  nim,
  id,
  handleDelete,
}) => {
  return (
    <tr key={id} className={`${show ? "border-b border-blue-gray-50" : ""}`}>
      <td className="py-3 px-5">
        <Typography className="text-xs font-semibold text-blue-gray-600">
          {name}
        </Typography>
      </td>
      <td className="py-3 px-5">
        <Typography className="text-xs font-semibold text-blue-gray-600">
          {nim}
        </Typography>
      </td>
      <td className="py-3 px-5">
        <Typography className="text-xs font-semibold ext text-blue-gray-600">
          {angkatan?.year}
        </Typography>
      </td>
      {/* <td className="py-3 px-5">
        <Typography className="text-xs font-semibold text-blue-gray-600">
          {email || "-"}
        </Typography>
      </td> */}
      <td className="py-3 px-5">
        <Chip
          variant="gradient"
          color={isActive ? "green" : "red"}
          value={isActive ? "Active" : "Non-Active"}
          className="py-0.5 px-2 text-[11px] font-medium w-fit"
        />
      </td>

      <td className="py-3 px-5">
        <div className="flex items-center gap-2">
          <Popover placement="left">
            <PopoverHandler>
              <Typography
                as="button"
                className="text-xs font-semibold text-blue-600"
              >
                Sosmed
              </Typography>
            </PopoverHandler>
            <PopoverContent className="flex flex-col gap-3">
              <Typography className="text-xs font-semibold text-blue-gray-600">
                Email: {email?(<a href={`mailto:${email}`}>{email}</a>) : "-"}
              </Typography>
              <Typography className="text-xs font-semibold text-blue-gray-600">
                Facebook: {facebook?(<a href={facebook}>{facebook}</a>) : "-"}
              </Typography>
              <Typography className="text-xs font-semibold text-blue-gray-600">
                Instagram: {instagram?(<a href={instagram}>{instagram}</a>) : "-"}
              </Typography>
              <Typography className="text-xs font-semibold text-blue-gray-600">
                Linkedin: {linkedin?(<a href={linkedin}>{linkedin}</a>) : "-"}
              </Typography>
              <Typography className="text-xs font-semibold text-blue-gray-600">
                Twitter: {twitter?(<a href={twitter}>{twitter}</a>) : "-"}
              </Typography>
            </PopoverContent>
          </Popover>
          <Link to={`/admin/anggota/edit/${id}`}>
            <Typography
              as="button"
              className="text-xs font-semibold text-yellow-900"
            >
              Edit
            </Typography>
          </Link>
          <Typography
            as="button"
            className="text-xs font-semibold text-red-600"
            onClick={() => {
              const confirm = window.confirm(
                "Are you sure you want to delete this anggota?"
              );
              if (!confirm) return;
              handleDelete(id);
            }}
          >
            Delete
          </Typography>
        </div>
      </td>
    </tr>
  );
};
