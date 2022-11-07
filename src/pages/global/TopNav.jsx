import React from "react";
import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import { tokens, ThemeColorContext } from "../../theme/theme";
import { useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";

const TopNav = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const themeColor = useContext(ThemeColorContext);

  return (
    <Box
      p="10px 20px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p="5px"
        sx={{ backgroundColor: colors.primary[400] }}
      >
        <InputBase type="text" backgound="transparent" placeholder="Search" />
        <SearchIcon />
      </Box>

      <Box display="flex" alignItems="center" gap="8px">
        <IconButton onClick={themeColor.toggleTheme}>
          {theme.palette.mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
        <IconButton>
          <NotificationsNoneIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <PersonIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TopNav;
