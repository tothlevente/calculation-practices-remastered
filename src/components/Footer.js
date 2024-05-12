import GitHubIcon from "@mui/icons-material/GitHub";
import {
  AppBar,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
  Link,
} from "@mui/material";

function Footer() {
  return (
    <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar>
        <Typography sx={{ flexGrow: 1 }}>
          Created with ❤ by Levente Tóth in 2024
        </Typography>
        <Tooltip title="Visit the GitHub repository">
          <Link
            href="https://github.com/tothlevente/calculation-practices-remastered"
            rel="noreferrer"
            target="_blank"
            underline="none"
          >
            <IconButton color="secondary" style={{ marginRight: "15px" }}>
              <GitHubIcon />
            </IconButton>
          </Link>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
