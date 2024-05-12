import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";

import { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";

import Header from "./components/Header";
import CssBaseline from "@mui/material/CssBaseline";
import CalculationNotice from "./components/CalculationNotice";
import WrongAnswerNotice from "./components/WrongAnswerNotice";
import CalculationFields from "./components/CalculationFields";
import CheckAnswerButton from "./components/CheckAnswerButton";
import CalculationNumbers from "./components/CalculationNumbers";
import CorrectAnswerNotice from "./components/CorrectAnswerNotice";
import GenerateCalculationButton from "./components/GenerateCalculationButton";

import darkTheme from "./controllers/darkTheme";
import lightTheme from "./controllers/lightTheme";
import Footer from "./components/Footer";

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

  function handleCheck() {
    if (firstNumber + secondNumber === parseInt(userNumber)) {
      setIsWrongNumber(false);
      setIsCorrect(true);
    } else {
      setIsWrongNumber(true);
      setIsCorrect(false);
    }
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
        <div style={{ display: "grid", justifyContent: "center", gap: "16px" }}>
          <CalculationNumbers
            firstNumber={firstNumber}
            secondNumber={secondNumber}
            operation={operation}
            userNumber={userNumber}
          />
          <CalculationNotice isCorrect={isCorrect} />
          <CorrectAnswerNotice isCorrect={isCorrect} />
          <WrongAnswerNotice isWrongNumber={isWrongNumber} />
          <CalculationFields
            isCorrect={isCorrect}
            userNumber={userNumber}
            setUserNumber={setUserNumber}
          />
          <GenerateCalculationButton handleCalculation={handleCalculation} />
          <CheckAnswerButton isCorrect={isCorrect} handleCheck={handleCheck} />
        </div>
        <Footer />
      </ThemeProvider>
    </Stack>
  );
}

export default App;
