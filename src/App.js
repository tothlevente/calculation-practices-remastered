import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import Header from "./components/Header";

import CssBaseline from "@mui/material/CssBaseline";
import CalculationNumbers from "./components/CalculationNumbers";
import CalculationNotice from "./components/CalculationNotice";
import CorrectAnswerNotice from "./components/CorrectAnswerNotice";
import WrongAnswerNotice from "./components/WrongAnswerNotice";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [userNumber, setUserNumber] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [isWrongNumber, setIsWrongNumber] = useState(false);

  const operation = "+";
  const minNumber = 1;
  const maxNumber = 9;

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

  function createRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function handleCalculation() {
    setFirstNumber(createRandomNumber(minNumber, maxNumber));
    setSecondNumber(createRandomNumber(minNumber, maxNumber));
    setUserNumber("");
    setIsWrongNumber(false);
    setIsCorrect(false);
  }

  useEffect(function () {
    handleCalculation();
  }, []);

  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <CssBaseline />
        <AppBar position="static">
          <Header setIsDarkTheme={setIsDarkTheme} />
        </AppBar>
        <CalculationNumbers
          firstNumber={firstNumber}
          secondNumber={secondNumber}
          operation={operation}
          userNumber={userNumber}
        />
        <CalculationNotice />
        <CorrectAnswerNotice />
        <WrongAnswerNotice />
      </ThemeProvider>
    </Stack>
  );
}

export default App;
