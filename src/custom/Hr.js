import { Divider } from "@mui/material";
import React from "react";

const Hr = () => {
  return (
    <div>
      <Divider
        sx={{
          margin: "16px",
          borderTop: "0px solid rgba(0, 0, 0, 0.12)",
          borderLeft: "0px solid rgba(0, 0, 0, 0.12)",
          borderRight: "0px solid rgba(0, 0, 0, 0.12)",
          backgroundImage:
            "linear-gradient(to right, rgba(52, 71, 103, 0), rgba(52, 71, 103, 0.4), rgba(52, 71, 103, 0))",
          opacity: "0.25",
        }}
      />
    </div>
  );
};

export default Hr;
