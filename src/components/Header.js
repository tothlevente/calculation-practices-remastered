import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import Brightness6TwoToneIcon from "@mui/icons-material/Brightness6TwoTone";
import CalculateTwoToneIcon from "@mui/icons-material/CalculateTwoTone";
import SettingsTwoToneIcon from "@mui/icons-material/SettingsTwoTone";

function Header({ setIsDarkTheme }) {
  return (
    <Toolbar>
      <CalculateTwoToneIcon
        color="secondary"
        style={{ marginRight: "10px", fontSize: "34px" }}
      />
      <Typography
        variant="h5"
        noWrap
        component="div"
        fontFamily="Permanent Marker"
        sx={{ flexGrow: 1 }}
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
      <Tooltip title="Settings">
        <IconButton color="secondary">
          <SettingsTwoToneIcon />
        </IconButton>
      </Tooltip>
    </Toolbar>
  );
}

export default Header;
