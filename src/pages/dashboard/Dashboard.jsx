import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import { tokens } from "../../theme/theme";
import Header from "../../components/Header";
import CardItem from "../../components/CardItem";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import ProgressCircle from "../../components/ProgressCircle";
import GeographyChart from "../../components/GeographyChart";

import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";

import { mockTransactions } from "../../data/mockData";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const cardsData = [
    {
      id: 1,
      number: "12,361",
      subTitle: "Emails sent",
      progress: "0.75",
      icon: (
        <EmailIcon
          sx={{
            color: colors.greenAccent[500],
            fontSize: "26px",
          }}
        />
      ),
      info: "+14%",
    },
    {
      id: 2,
      number: "431,225",
      subTitle: "Sales Obtained",
      progress: "0.50",
      icon: (
        <PointOfSaleIcon
          sx={{
            color: colors.greenAccent[500],
            fontSize: "26px",
          }}
        />
      ),
      info: "+21%",
    },
    {
      id: 3,
      number: "32,441",
      subTitle: "New Clients",
      progress: "0.30",
      icon: (
        <PersonAddIcon
          sx={{
            color: colors.greenAccent[500],
            fontSize: "26px",
          }}
        />
      ),
      info: "+5%",
    },
    {
      id: 4,
      number: "1,325,134",
      subTitle: "Traffic Received",
      progress: "0.90",
      icon: (
        <TrafficIcon
          sx={{
            color: colors.greenAccent[500],
            fontSize: "26px",
          }}
        />
      ),
      info: "+43%",
    },
  ];

  return (
    <Box m="0 20px">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Header title="DASHBOARD" subTitle="Welcome to your dashboard" />
        <Button
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            padding: "10px",
            "&:hover": {
              backgroundColor: colors.blueAccent[500],
            },
          }}
        >
          <DownloadIcon />
          <Typography>DOWNLOAD REPORTS</Typography>
        </Button>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(12,1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* row 1 */}
        {cardsData.map((item) => (
          <CardItem data={item} />
        ))}

        {/* row 2 */}
        <Box
          p="15px"
          backgroundColor={colors.primary[400]}
          gridColumn="span 8"
          gridRow="span 2"
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography color={colors.grey[100]}>
                Revenue Generated
              </Typography>
              <Typography
                color={colors.greenAccent[500]}
                fontSize="21px"
                fontWeight="600"
              >
                $59,342,95
              </Typography>
            </Box>
            <DownloadIcon
              sx={{
                color: colors.greenAccent[500],
              }}
            />
          </Box>
          <Box height="245px" ml="-25px">
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        <Box
          backgroundColor={colors.primary[400]}
          gridColumn="span 4"
          gridRow="span 2"
          overflow="auto"
        >
          <Typography
            color={colors.grey[100]}
            fontSize="18px"
            padding="10px 15px"
            borderBottom={`5px solid ${colors.primary[500]}`}
          >
            Recent Transactions
          </Typography>
          {mockTransactions.map((item) => (
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              padding="10px 15px"
              borderBottom={`5px solid ${colors.primary[500]}`}
            >
              <Box>
                <Typography color={colors.greenAccent[600]}>
                  {item.txId}
                </Typography>
                <Typography color={colors.grey[100]}>{item.user}</Typography>
              </Box>
              <Typography color={colors.grey[100]}>{item.date}</Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  color: colors.grey[100],
                }}
              >
                {item.cost}
              </Button>
            </Box>
          ))}
        </Box>

        {/* row 3 */}
        <Box
          p="15px"
          backgroundColor={colors.primary[400]}
          gridColumn="span 4"
          gridRow="span 2"
        >
          <Typography color={colors.grey[100]} fontSize="15px" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            height="260px"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <ProgressCircle progress="0.75" size="150" />
            <Typography
              color={colors.greenAccent[600]}
              fontSize="16px"
              mt="10px"
            >
              $48,352 revenue generated
            </Typography>
            <Typography color={colors.grey[100]}>
              includes extra misc expendtares and costs
            </Typography>
          </Box>
        </Box>

        <Box
          p="15px"
          backgroundColor={colors.primary[400]}
          gridColumn="span 4"
          gridRow="span 2"
        >
          <Typography color={colors.grey[100]} fontSize="15px" fontWeight="600">
            Sales Quamtity
          </Typography>
          <Box height="260px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>

        <Box
          p="15px"
          backgroundColor={colors.primary[400]}
          gridColumn="span 4"
          gridRow="span 2"
        >
          <Typography color={colors.grey[100]} fontSize="15px" fontWeight="600">
            Geography Based Traffic
          </Typography>
          <Box height="250px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
