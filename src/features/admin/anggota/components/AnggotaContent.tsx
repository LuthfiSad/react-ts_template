import { PageLayout } from "@features/_global/components/PageLayout";
import { SimpleLoadingTable } from "@features/_global/components/SimpleLoadingTable";
import {
  Table,
  TableBody,
  TableHead,
} from "@features/_global/components/Table";
import { convertQueryParamsToObject } from "@features/_global/helper";
import React from "react";
import { useSearchParams } from "react-router-dom";
import { useAnggota, useAnggotaCreation } from "../hooks/useAnggota";
import { TableItem } from "./Table/TableItem";

export const AnggotaContent: React.FC = () => {
  const { data: anggotas, isLoading } = useAnggota();

  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams = convertQueryParamsToObject(searchParams.toString());
  const onPageChange = (page: number) =>
    setSearchParams({ ...queryParams, page: page.toString() });

  const mutation = useAnggotaCreation();

  const handleDelete = async (id: string) => {
    await mutation.mutateAsync({
      type: "delete",
      id,
    });
  };

  const pagination = {
    currentPage: anggotas?.meta?.page || 1,
    totalPages: anggotas?.meta?.totalPages || 1,
    onPageChange,
  };
  return (
    <PageLayout
      title="Anggota"
      action={{
        show: true,
        buttonTitle: "Create Anggota",
        link: { to: "/admin/anggota/create" },
      }}
      showPagination={
        !!(
          anggotas?.data?.length &&
          !isLoading &&
          (anggotas.meta?.totalData as number) >
            (anggotas?.meta?.perPage as number)
        )
      }
      pagination={pagination}
      searchField
      searchPlaceholder="Search Anggota"
    >
      <Table>
        <TableHead field={["Name", "NIM", "Angkatan", "Status", "Action"]} />

        <TableBody>
          {isLoading ? (
            <SimpleLoadingTable ColSpan={6} />
          ) : (
            <>
              {anggotas?.data?.map(
                (item, key) => (
                  <TableItem
                    key={key}
                    {...item}
                    show={key !== (anggotas?.data?.length as number) - 1}
                    handleDelete={handleDelete}
                  />
                )
              )}
            </>
          )}
        </TableBody>
      </Table>
    </PageLayout>
  );
};
