import { Typography } from "@mui/material";

function WrongAnswerNotice({ isWrongNumber }) {
  return (
    <Typography
      style={{
        display: "flex",
        justifyContent: "center",
        fontSize: "27px",
        fontWeight: "bold",
        color: "#f44336",
      }}
      className={isWrongNumber ?? "hidden"}
    >
      Is not a correct number!
    </Typography>
  );
}

export default WrongAnswerNotice;
