import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CustomIconStatistical from "./CustomIconStatistical";

import Hr from "./Hr";

const BoxStatistical = ({ data }) => {
  return (
    <div>
      <Box>
        <Paper
          elevation={3}
          sx={{ borderRadius: "12px", marginBottom: "12px" }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "6px 18px 0",
            }}
          >
            <CustomIconStatistical logo={data.logo}></CustomIconStatistical>

            <Box sx={{ textAlign: "right" }}>
              <span style={{ color: "rgb(123, 128, 154)", fontSize: "14px" }}>
                {data.name}
              </span>
              <h4 style={{ color: "rgb(52, 71, 103)", fontSize: "24px" }}>
                {data.num}
              </h4>
            </Box>
          </Box>

          <Hr />

          <Box>
            <p
              style={{
                display: "flex",
                padding: "0 16px 16px",
                fontSize: "14px",
                color: "rgb(123, 128, 154)",
                alignItems: "center",
              }}
            >
              <span style={{ color: "rgb(76, 175, 80)", fontWeight: "600" }}>
                {data.index}
              </span>
              &nbsp;{data.date}
            </p>
          </Box>
        </Paper>
      </Box>
    </div>
  );
};

export default BoxStatistical;
