import React from "react";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme/theme";
import Header from "../../components/Header";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataContacts } from "../../data/mockData";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID" },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column-cell",
    },
    { field: "age", headerName: "Age", type: "number", headerAlign: "left" },
    { field: "phone", headerName: "Phone", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "address", headerName: "Address", flex: 1 },
    { field: "city", headerName: "City" },
    { field: "zipCode", headerName: "Zip Code" },
  ];
  return (
    <Box m="20px">
      <Header
        title="CONTACTS"
        subTitle="List of Contacts for future Reference"
      />

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
          rows={mockDataContacts}
          columns={columns}
          checkboxSelection={true}
          components={{
            Toolbar: GridToolbar,
          }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
