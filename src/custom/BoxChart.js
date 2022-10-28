import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Hr from "./Hr";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const BoxChart = ({ data }) => {
  return (
    <div>
      <Box>
        <Paper elevation={3} sx={{ borderRadius: "12px" }}>
          <Box sx={{ padding: "16px" }}>
            <Box sx={{ padding: "24px 8px 8px" }}>
              <Box>
                <h6 style={{ fontSize: "16px", color: "rgb(52, 71, 103)" }}>
                  {data.name}
                </h6>
                <p style={{ fontSize: "14px", color: "rgb(123, 128, 154)" }}>
                  <span
                    style={{ color: "rgb(76, 175, 80)", fontWeight: "600" }}
                  >
                    {data.index}
                  </span>
                  &nbsp;{data.text}
                </p>
              </Box>

              <Hr />

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  color: "rgb(123, 128, 154)",
                }}
              >
                <AccessTimeIcon sx={{ fontSize: "14px" }} />
                <p style={{ fontSize: "16px" }}>{data.date}</p>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>
    </div>
  );
};

export default BoxChart;
