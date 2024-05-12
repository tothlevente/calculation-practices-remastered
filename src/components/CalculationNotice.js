import { Box, Typography } from "@mui/material";

function CalculationNotice({ isCorrect }) {
  return (
    <Box display={isCorrect ? "none" : "block"}>
      <Typography
        style={{ display: "flex", justifyContent: "center", fontSize: "24px" }}
      >
        Please enter your calculated number:
      </Typography>
    </Box>
  );
}

export default CalculationNotice;
