import { TextField } from "@mui/material";

function CalculationFields({ isCorrect, userNumber, setUserNumber }) {
  return (
    <TextField
      required
      lineDirection="center"
      variant="filled"
      margin="normal"
      disabled={isCorrect}
      value={userNumber}
      inputMode="numeric"
      inputProps={{ maxLength: 10, autoCorrect: false }}
      onChange={(e) => setUserNumber(e.target.value)}
    />
  );
}

export default CalculationFields;
