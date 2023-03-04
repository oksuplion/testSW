import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

import facebook from "../media/ic-facebook.png";
import twitter from "../media/ic-twitter.png";
import linkedin from "../media/ic-linkdin.png";

const Footer = () => {
   const CustomContainer = styled(Container)(({ theme }) => ({
      [theme.breakpoints.down("md")]: {
         textAlign: "center",
      },
   }));

   const IconBox = styled(Box)(({ theme }) => ({
      display: "flex",
      gap: "1rem",
      [theme.breakpoints.down("md")]: {
         justifyContent: "center",
      },
   }));

   return (
      <CustomContainer>
         <Box>
            <Typography fontSize="20px" color="text" fontWeight="700" marginBottom="10px">
               Follow us
            </Typography>

            <Typography fontSize="16px" color="text.secondary" fontWeight="500" marginBottom="10px">
               You’ll find all fresh news here.
            </Typography>

            <IconBox>
               <img src={facebook} alt="facebook" style={{ cursor: "pointer" }} />
               <img src={twitter} alt="twitterIcon" style={{ cursor: "pointer" }} />
               <img src={linkedin} alt="linkedinIcon" style={{ cursor: "pointer" }} />
            </IconBox>
         </Box>
      </CustomContainer>
   );
};

export default Footer;
