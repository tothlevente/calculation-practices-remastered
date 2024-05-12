import Button from "@mui/material/Button";
import RotateRightIcon from "@mui/icons-material/RotateRight";

function GenerateCalculationButton({ handleCalculation }) {
  return (
    <Button
      color="btnSecondary"
      variant="contained"
      startIcon={<RotateRightIcon />}
      onClick={handleCalculation}
    >
      Generate a new calculation
    </Button>
  );
}

export default GenerateCalculationButton;
