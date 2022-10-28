import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import CustomIcon from "./CustomIcon";

const Orders = () => {
  const lists = [
    {
      name: "$2400, Design changes",
      time: "22 DEC 7:20 PM",
      icon_type: "notifi",
    },
    {
      name: "New order #1832412",
      time: "21 DEC 11 PM",
      icon_type: "inventory",
    },
    {
      name: "Server payments for April",
      time: "21 DEC 9:34 PM",
      icon_type: "cart",
    },
    {
      name: "New card added for order #4395133",
      time: "20 DEC 2:20 AM",
      icon_type: "card",
    },
    {
      name: "New card added for order #4395133",
      time: "18 DEC 4:54 AM",
      icon_type: "key",
    },
  ];

  return (
    <div>
      <Box>
        <Paper elevation={3} sx={{ borderRadius: "12px" }}>
          <Box className="headerProgress">
            <Box>
              <h6 style={{ fontSize: "16px", color: "rgb(52, 71, 103)" }}>
                Project
              </h6>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <ArrowUpwardIcon
                  sx={{
                    color: " #4caf50",
                    fontSize: "20px",
                    paddingRight: "5px",
                  }}
                />
                <strong
                  style={{ color: "rgb(123, 128, 154)", fontSize: "14px" }}
                >
                  24%&nbsp;
                </strong>
                <p style={{ color: "rgb(123, 128, 154)", fontSize: "14px" }}>
                  this month
                </p>
              </Box>
            </Box>
          </Box>
          <Box sx={{ padding: "16px" }}>
            {lists.map((list) => {
              return (
                <Box
                  sx={{
                    display: "flex",
                    gap: "12px",
                    marginBottom: "24px",
                  }}
                >
                  <Box
                    className="iconOrders"
                    sx={{ backgroundColor: "#4caf50" }}
                  >
                    <CustomIcon type={list.icon_type} />
                  </Box>

                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#344767",
                      }}
                    >
                      {list.name}
                    </span>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: "300",
                        color: "#7b809a",
                      }}
                    >
                      {list.time}
                    </span>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Paper>
      </Box>
    </div>
  );
};

export default Orders;
