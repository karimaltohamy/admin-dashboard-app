import React from "react";
import { tokens } from "../theme/theme";
import { Box, Typography, useTheme } from "@mui/material";
import ProgessCircle from "../components/ProgressCircle";

const CardItem = ({ data }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      p="15px"
      backgroundColor={colors.primary[400]}
      display="flex"
      justifyContent="center"
      flexDirection="column"
      gridColumn="span 3"
    >
      <Box display="flex" justifyContent="space-between">
        <Box>
          {data.icon}
          <Typography
            color={colors.grey[100]}
            fontSize={"19px"}
            fontWeight="600"
          >
            {data.number}
          </Typography>
        </Box>
        <ProgessCircle progress={data.progress} size="40" />
      </Box>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography color={colors.greenAccent[600]}>{data.subTitle}</Typography>
        <Typography color={colors.greenAccent[700]}>{data.info}</Typography>
      </Box>
    </Box>
  );
};

export default CardItem;
