import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, Typography, IconButton, useTheme } from "@mui/material";
import { tokens } from "../../theme/theme";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import BarChartIcon from "@mui/icons-material/BarChart";
import PieChartOutlineIcon from "@mui/icons-material/PieChartOutline";
import TimelineIcon from "@mui/icons-material/Timeline";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

import admin_img from "../../images/admin_img.jpg";

const Item = ({ title, iconItem }) => {
  return (
    <MenuItem
      icon={iconItem}
      // active={select === title}
    >
      <Typography variant="h6">{title}</Typography>
    </MenuItem>
  );
};

const SidebarCom = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [collapse, setCollapse] = useState(false);

  return (
    <Box
      height="100vh"
      sx={{
        "& .sidebar": {
          borderRight: "0",
          height: "100%",
        },
        "& .sidebar-inner": {
          background: colors.primary[400],
        },
        "& .menu-anchor": {
          background: "transparent !important",
        },
        "& .menu-anchor:hover": {
          background: "transparent !important",
        },
        "& .menu-item:hover": {
          color: `#6870fa !important`,
        },
      }}
    >
      <Sidebar defaultCollapsed={collapse}>
        <Menu iconshap="square">
          <MenuItem
            icon={collapse ? <MenuIcon /> : undefined}
            onClick={() => setCollapse(!collapse)}
          >
            {!collapse && (
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h4">ADMINIS</Typography>
                <IconButton>
                  <MenuIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {/* user admin */}
          {!collapse && (
            <Box
              m="15px 0"
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
            >
              <img
                src={admin_img}
                height="100px"
                width="100px"
                style={{ borderRadius: "50%" }}
                alt="admin-img"
              />
              <Typography variant="h3" mt="10px">
                Ed Roh
              </Typography>
              <Typography sx={{ color: colors.greenAccent[500] }}>
                vip fancy Admin
              </Typography>
            </Box>
          )}

          {/* items */}

          <Box ml={!collapse ? "10%" : undefined}>
            <NavLink
              to="/dashboard"
              style={({ isActive }) => ({
                color: isActive ? colors.blueAccent[500] : colors.grey[100],
              })}
            >
              <Item
                title="dashboard"
                iconItem={<DashboardIcon />}
                collapse={collapse}
              />
            </NavLink>

            <Typography
              mt="10px"
              ml={!collapse ? "10%" : "20px"}
              sx={{ color: colors.grey[400] }}
              variant="h5"
            >
              Date
            </Typography>
            <NavLink
              to="team"
              style={({ isActive }) => ({
                color: isActive ? colors.blueAccent[500] : colors.grey[100],
              })}
            >
              <Item
                title="Manage Team"
                iconItem={<GroupIcon />}
                collapse={collapse}
              />
            </NavLink>
            <NavLink
              to="contacts"
              style={({ isActive }) => ({
                color: isActive ? colors.blueAccent[500] : colors.grey[100],
              })}
            >
              <Item
                title="Contacts Information"
                iconItem={<ContactsOutlinedIcon />}
                collapse={collapse}
              />
            </NavLink>
            <NavLink
              to="/invoices"
              style={({ isActive }) => ({
                color: isActive ? colors.blueAccent[500] : colors.grey[100],
              })}
            >
              <Item
                title="Invoices Balances"
                iconItem={<ReceiptOutlinedIcon />}
                collapse={collapse}
              />
            </NavLink>

            <Typography
              mt="10px"
              ml={!collapse ? "10%" : "20px"}
              sx={{ color: colors.grey[400] }}
              variant="h5"
            >
              Pages
            </Typography>
            <NavLink
              to="/form"
              style={({ isActive }) => ({
                color: isActive ? colors.blueAccent[500] : colors.grey[100],
              })}
            >
              <Item
                title="Profile form"
                iconItem={<PersonOutlineOutlinedIcon />}
                collapse={collapse}
              />
            </NavLink>
            <NavLink
              to="/calendar"
              style={({ isActive }) => ({
                color: isActive ? colors.blueAccent[500] : colors.grey[100],
              })}
            >
              <Item
                title="Calender"
                iconItem={<DateRangeOutlinedIcon />}
                collapse={collapse}
              />
            </NavLink>
            <NavLink
              to="/faq"
              style={({ isActive }) => ({
                color: isActive ? colors.blueAccent[500] : colors.grey[100],
              })}
            >
              <Item
                title="FAQpage"
                iconItem={<HelpOutlineIcon />}
                collapse={collapse}
              />
            </NavLink>

            <Typography
              mt="10px"
              ml={!collapse ? "10%" : "20px"}
              sx={{ color: colors.grey[400] }}
              variant="h5"
            >
              charts
            </Typography>
            <NavLink
              to="/barchart"
              style={({ isActive }) => ({
                color: isActive ? colors.blueAccent[500] : colors.grey[100],
              })}
            >
              <Item
                title="Bar Chart"
                iconItem={<BarChartIcon />}
                collapse={collapse}
              />
            </NavLink>
            <NavLink
              to="/piechart"
              style={({ isActive }) => ({
                color: isActive ? colors.blueAccent[500] : colors.grey[100],
              })}
            >
              <Item
                title="Pie Chart"
                iconItem={<PieChartOutlineIcon />}
                collapse={collapse}
              />
            </NavLink>
            <NavLink
              to="/linechart"
              style={({ isActive }) => ({
                color: isActive ? colors.blueAccent[500] : colors.grey[100],
              })}
            >
              <Item
                title="Line Chart"
                iconItem={<TimelineIcon />}
                collapse={collapse}
              />
            </NavLink>
            <NavLink
              to="/geographychart"
              style={({ isActive }) => ({
                color: isActive ? colors.blueAccent[500] : colors.grey[100],
              })}
            >
              <Item
                title="Geography Chart"
                iconItem={<MapOutlinedIcon />}
                collapse={collapse}
              />
            </NavLink>
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SidebarCom;
