import React from "react";
import ChairIcon from "@mui/icons-material/Chair";
import { Box } from "@mui/system";
import BarChartIcon from "@mui/icons-material/BarChart";
import StoreIcon from "@mui/icons-material/Store";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

function CustomIconStatistical({ logo }) {
  return (
    <div>
      {logo === "chair" ? (
        <Box
          sx={{
            width: "64px",
            height: "64px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background:
              "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))",
            color: "rgb(255, 255, 255)",
            boxShadow:
              "rgb(0 0 0 / 14%) 0px 4px 20px 0px, rgb(64 64 64 / 40%) 0px 7px 10px -5px;",
            borderRadius: "12px",
            marginTop: "-24px",
          }}
        >
          <ChairIcon />
        </Box>
      ) : logo === "chart" ? (
        <Box
          sx={{
            color: "white",
            width: "64px",
            height: "64px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background:
              "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))",
            boxShadow:
              "rgb(0 0 0 / 14%) 0px 4px 20px 0px, rgb(64 64 64 / 40%) 0px 7px 10px -5px;",
            borderRadius: "12px",
            marginTop: "-24px",
          }}
        >
          <BarChartIcon />
        </Box>
      ) : logo === "store" ? (
        <Box
          sx={{
            color: "white",
            width: "64px",
            height: "64px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background:
              "linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))",
            boxShadow:
              "rgb(0 0 0 / 14%) 0px 4px 20px 0px, rgb(64 64 64 / 40%) 0px 7px 10px -5px;",
            borderRadius: "12px",
            marginTop: "-24px",
          }}
        >
          <StoreIcon />
        </Box>
      ) : logo === "add" ? (
        <Box
          sx={{
            color: "white",
            width: "64px",
            height: "64px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background:
              "linear-gradient(195deg, rgb(236, 64, 122), rgb(216, 27, 96))",
            boxShadow:
              "rgb(0 0 0 / 14%) 0px 4px 20px 0px, rgb(64 64 64 / 40%) 0px 7px 10px -5px;",
            borderRadius: "12px",
            marginTop: "-24px",
          }}
        >
          <PersonAddIcon />
        </Box>
      ) : null}
    </div>
  );
}

export default CustomIconStatistical;
