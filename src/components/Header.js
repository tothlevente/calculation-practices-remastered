import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import CalculateTwoToneIcon from "@mui/icons-material/CalculateTwoTone";
import Brightness6TwoToneIcon from "@mui/icons-material/Brightness6TwoTone";

function Header({ setIsDarkTheme }) {
  return (
    <Toolbar>
      <CalculateTwoToneIcon
        color="secondary"
        style={{ marginRight: "10px", fontSize: "34px" }}
      />
      <Typography
        noWrap
        fontWeight="bold"
        sx={{ flexGrow: 1 }}
        style={{ fontWeight: "bold", fontSize: "27px" }}
      >
        Calculation practices
      </Typography>
      <Tooltip title="Change to dark or light theme">
        <IconButton
          color="secondary"
          style={{ marginRight: "15px" }}
          onClick={() => {
            setIsDarkTheme((prev) => !prev);
          }}
        >
          <Brightness6TwoToneIcon />
        </IconButton>
      </Tooltip>
    </Toolbar>
  );
}

export default Header;
