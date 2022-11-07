import React from "react";
import Header from "../../components/Header";
import PieCahrt from "../../components/PieCahrt";
import { Box } from "@mui/material";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subTitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieCahrt />
      </Box>
    </Box>
  );
};

export default Pie;
