import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import AppBarLabel from "./components/AppBarLabel";

import CssBaseline from "@mui/material/CssBaseline";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const lightTheme = createTheme({
    typography: {
      fontFamily: "Gabarito Variable",
    },
    palette: {
      mode: "light",
      primary: {
        main: "#4fc3f7",
        contrastText: "#01579b",
      },
      background: {
        default: "#e1f5fe",
        paper: "#e1f5fe",
      },
    },
  });

  const darkTheme = createTheme({
    typography: {
      fontFamily: "Gabarito Variable",
    },
    palette: {
      mode: "dark",
      primary: {
        main: "#424242",
        contrastText: "#fff",
      },
      background: {
        default: "#616161",
        paper: "#616161",
      },
    },
  });

  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <CssBaseline />
        <AppBar position="static">
          <AppBarLabel setIsDarkTheme={setIsDarkTheme} />
        </AppBar>
      </ThemeProvider>
    </Stack>
  );
}

export default App;
