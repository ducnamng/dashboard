import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import InventoryIcon from "@mui/icons-material/Inventory";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import KeyIcon from "@mui/icons-material/Key";
import { Box } from "@mui/system";

function CustomIcon({ type }) {
  return (
    <div>
      {type === "notifi" ? (
        <Box className="iconOrders" sx={{ backgroundColor: "#4caf50" }}>
          <NotificationsIcon sx={{ fontSize: "16px", color: "#fff" }} />
        </Box>
      ) : type === "inventory" ? (
        <Box className="iconOrders" sx={{ backgroundColor: "#f44335" }}>
          <InventoryIcon sx={{ fontSize: "16px", color: "#fff" }} />
        </Box>
      ) : type === "card" ? (
        <Box className="iconOrders" sx={{ backgroundColor: "#fb8c00" }}>
          <CreditCardIcon sx={{ fontSize: "16px", color: "#fff" }} />
        </Box>
      ) : type === "cart" ? (
        <Box className="iconOrders" sx={{ backgroundColor: "#1a73e8" }}>
          <ShoppingCartIcon sx={{ fontSize: "16px", color: "#fff" }} />
        </Box>
      ) : type === "key" ? (
        <Box className="iconOrders" sx={{ backgroundColor: "#e91e63" }}>
          <KeyIcon sx={{ fontSize: "16px", color: "#fff" }} />
        </Box>
      ) : null}
    </div>
  );
}

export default CustomIcon;
