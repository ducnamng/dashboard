import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import BoxProJect from "../custom/BoxProject";
import Orders from "../custom/Orders";

const Progress = () => {
  return (
    <div>
      <Box sx={{ width: "120%" }}>
        <Grid container spacing={2} sx={{ padding: "16px 0" }}>
          <Grid item lg={8} md={6} sm={12}>
            <BoxProJect />
          </Grid>

          <Grid item lg={4} md={6} sm={12}>
            <Orders />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Progress;
