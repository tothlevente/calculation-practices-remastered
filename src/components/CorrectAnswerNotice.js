import { Box, Typography } from "@mui/material";

function CorrectAnswerNotice({ isCorrect }) {
  return (
    <Box display={isCorrect ? "block" : "none"}>
      <Typography
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "27px",
          fontWeight: "bold",
          color: "#4caf50",
        }}
      >
        Is a correct answer!
      </Typography>
    </Box>
  );
}

export default CorrectAnswerNotice;
