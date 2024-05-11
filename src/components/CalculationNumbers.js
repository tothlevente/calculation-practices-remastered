import { Typography } from "@mui/material";

function CalculationNumbers({
  firstNumber,
  secondNumber,
  operation,
  userNumber,
}) {
  return (
    <Typography
      style={{
        display: "flex",
        justifyContent: "center",
        fontSize: "57px",
        fontWeight: "bold",
      }}
    >
      {firstNumber}
      {operation}
      {secondNumber} = {parseInt(userNumber) ? userNumber : "?"}
    </Typography>
  );
}

export default CalculationNumbers;
