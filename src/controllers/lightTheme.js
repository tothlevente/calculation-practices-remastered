import { createTheme } from "@mui/material/styles";

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
    btnPrimary: {
      main: "#ffd600",
    },
    btnSecondary: {
      main: "#212121",
      contrastText: "#fff",
    },
    background: {
      default: "#fff",
      paper: "#fff",
    },
  },
});

export default lightTheme;
