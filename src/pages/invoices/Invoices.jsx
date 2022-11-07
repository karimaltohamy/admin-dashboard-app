import React from "react";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme/theme";
import Header from "../../components/Header";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataInvoices } from "../../data/mockData";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column-cell",
    },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      cellClassName: "name-column-cell",
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];
  return (
    <Box m="20px">
      <Header title="INVOICES" subTitle="List of Inoice Balances" />

      <Box
        height="80vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "0",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: `${colors.blueAccent[500]} !important`,
          },
          "& .MuiDataGrid-virtualScrollerContent": {
            backgroundColor: `${colors.primary[400]} !important`,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: `${colors.blueAccent[500]} !important`,
          },
          "& .name-column-cell": {
            color: `${colors.greenAccent[500]} !important`,
          },
          "& .MuiButtonBase-root": {
            color: `${colors.grey[100]} !important `,
          },
          "& .MuiDataGrid-cell--textRight": {
            justifyContent: "flex-start !important",
          },
        }}
      >
        <DataGrid
          rows={mockDataInvoices}
          columns={columns}
          checkboxSelection={true}
        />
      </Box>
    </Box>
  );
};

export default Invoices;
