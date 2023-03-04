import React from 'react';
import { createTheme, ThemeProvider } from "@mui/material";
import Main from "./components/Main";

export const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

function App() {
   const [mode, setMode] = React.useState('light');
   const colorMode = React.useMemo(
      () => ({
         toggleColorMode: () => {
            setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
         },
      }),
      [],
   );

   const theme = React.useMemo(
      () =>
         createTheme({
            mode,
            palette: {
               
            },
         }),
      [mode],
   );


   return (
      <ColorModeContext.Provider value={colorMode}>
         <ThemeProvider theme={theme}>
            <Main />
         </ThemeProvider>
      </ColorModeContext.Provider>
   );
}

export default App;
