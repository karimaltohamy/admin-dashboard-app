import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme/theme";

const Header = ({ title, subTitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box mb=" 15px">
      <Typography
        mb="10px"
        color={colors.grey[100]}
        fontWeight="600"
        variant="h2"
      >
        {title}
      </Typography>
      <Typography color={colors.greenAccent[500]}>{subTitle}</Typography>
    </Box>
  );
};

export default Header;
