import React from "react";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import { Box } from "@mui/material";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subTitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
