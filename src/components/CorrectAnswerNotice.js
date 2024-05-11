import { Typography } from "@mui/material";

function CorrectAnswerNotice({ isCorrect }) {
  return (
    <Typography
      style={{
        display: "flex",
        justifyContent: "center",
        fontSize: "27px",
        fontWeight: "bold",
        color: "#4caf50",
      }}
      className={isCorrect ?? "hidden"}
    >
      Is a correct answer!
    </Typography>
  );
}

export default CorrectAnswerNotice;
