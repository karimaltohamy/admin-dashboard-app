import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme/theme";
import Header from "../../components/Header";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataTeam } from "../../data/mockData";

import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const Team = () => {
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
    { field: "age", headerName: "Age", type: "number", headerAlign: "left" },
    { field: "phone", headerName: "Phone", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
      renderCell: (params) => {
        return (
          <Box
            width="60%"
            borderRadius="5px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap="8px"
            p="8px"
            backgroundColor={
              params.row.access === "admin"
                ? colors.greenAccent[600]
                : colors.greenAccent[700]
            }
          >
            {params.row.access === "admin" ? (
              <AdminPanelSettingsOutlinedIcon />
            ) : undefined}
            {params.row.access === "user" ? (
              <SecurityOutlinedIcon />
            ) : undefined}
            {params.row.access === "manager" ? <LockOutlinedIcon /> : undefined}
            <Typography color={colors.grey[100]}>
              {params.row.access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="TEAM" subTitle="Managing the Team Members" />

      <Box
        height="75vh"
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
          rows={mockDataTeam}
          columns={columns}
          checkboxSelection={true}
        />
      </Box>
    </Box>
  );
};

export default Team;
