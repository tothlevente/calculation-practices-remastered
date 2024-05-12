import { createTheme } from "@mui/material/styles";

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
    btnPrimary: {
      main: "#ffd600",
      contrastText: "#212121",
    },
    btnSecondary: {
      main: "#9e9e9e",
      contrastText: "#212121",
    },
    background: {
      default: "#212121",
      paper: "#212121",
    },
  },
});

export default darkTheme;
