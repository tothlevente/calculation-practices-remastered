import Button from "@mui/material/Button";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";

function CheckAnswerButton({ isCorrect, handleCheck }) {
  return (
    <Button
      disabled={isCorrect}
      color="btnPrimary"
      variant="contained"
      startIcon={<PlaylistAddCheckIcon />}
      onClick={handleCheck}
    >
      Check your answer
    </Button>
  );
}

export default CheckAnswerButton;
