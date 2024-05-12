import { Box, Typography } from "@mui/material";

function WrongAnswerNotice({ isWrongNumber }) {
  return (
    <Box display={isWrongNumber ? "block" : "none"}>
      <Typography
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "27px",
          fontWeight: "bold",
          color: "#f44336",
        }}
      >
        Is not a correct number!
      </Typography>
    </Box>
  );
}

export default WrongAnswerNotice;
