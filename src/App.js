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
        main: "#ffd600",
      },
      secondary: {
        main: "#000",
      },
      background: {
        default: "#fff",
        paper: "#fff",
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
        main: "#212121",
      },
      secondary: {
        main: "#ffd600",
      },
      background: {
        default: "#212121",
        paper: "#212121",
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
