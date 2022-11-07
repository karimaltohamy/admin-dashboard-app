import React from "react";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme/theme";

const Geogtaphy = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Geography Chart" subTitle="Simple Geography Chart" />

      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geogtaphy;
