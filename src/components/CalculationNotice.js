import { Typography } from "@mui/material";

function CalculationNotice({ isCorrect }) {
  return (
    <Typography
      style={{ display: "flex", justifyContent: "center", fontSize: "24px" }}
      className={isCorrect ? "hidden" : null}
    >
      Please enter your calculated number:
    </Typography>
  );
}

export default CalculationNotice;
