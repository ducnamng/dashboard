import { Box, Grid } from "@mui/material";
import React from "react";
import Header from "./Header";
import Chart from "./Chart";
import Statistical from "./Statistical";
import Progress from "./Progress";
import Menu from "./Menu";
import SignIn from "./signin/SignIn";

const Main = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={6} md={10}>
          <Statistical></Statistical>
          <Chart></Chart>
          <Progress></Progress>
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;
