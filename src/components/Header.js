import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Grid, Box, TextField } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Header = () => {
  return (
    <div>
      <Grid
        sx={{
          position: "fixed",
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 16px",
          top: 0,
          left: 0,
          right: 0,
          background: "#FFF",
        }}
      >
        <Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <HomeIcon sx={{ fontSize: "16px", color: "#929cae" }} />
            <p style={{ color: "#6f7d93", fontSize: "14px" }}>
              &nbsp;/&nbsp;Dashboard
            </p>
          </Box>
          <h3 style={{ color: "#354868", fontSize: "16px" }}>Dashboard</h3>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <TextField
            id="outlined-basic"
            label="Search here"
            variant="outlined"
            sx={{ color: "rgb(210, 214, 218)", fontSize: "14px" }}
          />
          <AccountCircleIcon sx={{ color: "#929cae", fontSize: "20px" }} />
          <SettingsIcon sx={{ color: "#929cae", fontSize: "20px" }} />
          <NotificationsIcon sx={{ color: "#929cae", fontSize: "20px" }} />
        </Box>
      </Grid>
    </div>
  );
};

export default Header;
