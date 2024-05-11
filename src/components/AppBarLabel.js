import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import Brightness6TwoToneIcon from "@mui/icons-material/Brightness6TwoTone";
import CalculateTwoToneIcon from "@mui/icons-material/CalculateTwoTone";
import SettingsTwoToneIcon from "@mui/icons-material/SettingsTwoTone";

function AppBarLabel({ setIsDarkTheme }) {
  return (
    <Toolbar>
      <CalculateTwoToneIcon
        color="inherit"
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
      <IconButton
        style={{ marginRight: "15px" }}
        onClick={() => {
          setIsDarkTheme((prev) => !prev);
        }}
      >
        <Brightness6TwoToneIcon />
      </IconButton>
      <IconButton>
        <SettingsTwoToneIcon />
      </IconButton>
    </Toolbar>
  );
}

export default AppBarLabel;
