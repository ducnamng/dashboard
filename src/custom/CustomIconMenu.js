import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TableViewIcon from "@mui/icons-material/TableView";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import LoginIcon from "@mui/icons-material/Login";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Box } from "@mui/system";

function CustomIconMenu({ icon }) {
  return (
    <div>
      {icon === "dashboard" ? (
        <Box sx={{ display: "grid", placeItems: "center" }}>
          <DashboardIcon sx={{ paddingLeft: "5px", color: "white" }} />
        </Box>
      ) : icon === "table" ? (
        <Box sx={{ display: "grid", placeItems: "center" }}>
          <TableViewIcon sx={{ paddingLeft: "5px", color: "white" }} />
        </Box>
      ) : icon === "billing" ? (
        <Box sx={{ display: "grid", placeItems: "center" }}>
          <ReceiptLongIcon sx={{ paddingLeft: "5px", color: "white" }} />
        </Box>
      ) : icon === "nofica" ? (
        <Box sx={{ display: "grid", placeItems: "center" }}>
          <NotificationsIcon sx={{ paddingLeft: "5px", color: "white" }} />
        </Box>
      ) : icon === "profile" ? (
        <Box sx={{ display: "grid", placeItems: "center" }}>
          <PersonIcon sx={{ paddingLeft: "5px", color: "white" }} />
        </Box>
      ) : icon === "signin" ? (
        <Box sx={{ display: "grid", placeItems: "center" }}>
          <LoginIcon sx={{ paddingLeft: "5px", color: "white" }} />
        </Box>
      ) : icon === "signup" ? (
        <Box sx={{ display: "grid", placeItems: "center" }}>
          <AssignmentIcon sx={{ paddingLeft: "5px", color: "white" }} />
        </Box>
      ) : null}
    </div>
  );
}

export default CustomIconMenu;
