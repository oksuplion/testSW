import { Box, Button, styled, Typography, useTheme } from "@mui/material";
import { Container } from "@mui/system";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Heroes from "./Heroes";
import { colorDefinitions } from "../theme";

import mainImg from "../media/main.png";

const CustomBox = styled(Box)(({ theme }) => ({
   display: "flex",
   justifyContent: "center",
   marginTop: "20px",
   [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      textAlign: "center",
   },
}));

const Title = styled(Typography)(({ theme }) => ({
   fontSize: "64px",
   fontWeight: "bold",
   margin: "20px 0 20px 0",
   [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
   },
}));

const Main = () => {
   const theme = useTheme();
   const colors = colorDefinitions(theme.palette.mode)

   return (
      <WrapperContainer>
         <Navbar />

         <CustomBox>
            <Box flex="1">
               <Typography color={colors.black.DEFAULT}
                  fontSize="18px"
                  fontWeight="500"
               > Welcome to the Star Wars Fun Page
               </Typography>
               <Title variant="h1" color={colors.black.DEFAULT}>
                  Find more about your favorite Heros
               </Title>
               <Button variant="outlined" color="primary">More about us</Button>
            </Box>
            <Box flex="1.25">
               <img src={mainImg} alt="mainImg" style={{ maxWidth: "100%" }}
               />
            </Box>
         </CustomBox>
         <Heroes />

         <Footer />
      </WrapperContainer>
   );
};

export default Main;

const WrapperContainer = styled(Container)(({ theme }) => ({
   backgroundColor: theme.palette.neutral[theme.palette.mode]
}));
