import React from "react";
import Header from "../../components/Header";
import { Box, Typography, useTheme } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme/theme";

const Faq = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const dataFAQ = [
    {
      id: 1,
      title: "An important Question",
      subTitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et ante imperdiet, vehicula elit ut, finibus felis. Aliquam nec sapien non purus tincidunt pretium.",
    },
    {
      id: 2,
      title: "Another Importtant Question",
      subTitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et ante imperdiet, vehicula elit ut, finibus felis. Aliquam nec sapien non purus tincidunt pretium. Phasellus non ullamcorper velit. Maecenas justo lectus, imperdiet malesuada gravida placerat.",
    },
    {
      id: 3,
      title: "Your Favorite Question",
      subTitle:
        "In pretium, elit et elementum pharetra, orci urna vehicula libero, sed vehicula eros magna sed nibh. Integer sit amet nunc sed ante tincidunt varius. Integer semper erat pretium rutrum feugiat. Morbi faucibus, magna non aliquam imperdiet, elit orci commodo dui, ut molestie orci nulla non augue. Duis non nulla faucibus, porta quam ac, viverra leo. Nullam luctus nunc finibus neque molestie venenatis.",
    },
    {
      id: 4,
      title: "Some Random Question",
      subTitle:
        "Vestibulum non tincidunt leo. Nulla facilisi. In viverra lorem enim, ac semper dui consequat sit amet. Curabitur orci libero, tempus in pretium sit amet, congue sit amet neque. Quisque venenatis eros non ex fringilla, vel tempus velit congue. Nullam mollis, ex a auctor porta, leo tortor imperdiet nunc, ut ullamcorper magna turpis non nisl. Ut sodales eros tortor.",
    },
    {
      id: 5,
      title: "The Final Question",
      subTitle:
        "Vestibulum non tincidunt leo. Nulla facilisi. In viverra lorem enim, ac semper dui consequat sit amet. Curabitur orci libero, tempus in pretium",
    },
  ];

  return (
    <Box m="20px ">
      <Header title="FAQ" subTitle="Frequently Asked Questions Page" />
      <Box
        mt="15px"
        sx={{
          "& .MuiPaper-root": {
            padding: "8px 0 !impotant",
            backgroundColor: `${colors.primary[400]} !important`,
            marginBottom: "15px",
          },
        }}
      >
        {dataFAQ.map((item) => (
          <Accordion key={item.id} mb="15px">
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography color={colors.greenAccent[500]}>
                {item.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.subTitle}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default Faq;
