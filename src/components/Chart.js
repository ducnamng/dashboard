import { Grid } from "@mui/material";
import React from "react";
import BoxChart from "../custom/BoxChart";

const lists = [
  {
    name: "Website Views",
    text: "Last Campaign Performance",
    index: "",
    date: "campaign sent 2 days ago",
  },
  {
    name: "Daily Sales",
    text: "increase in today sales.",
    index: "(+15%)",
    date: "updated 4 min ago",
  },
  {
    name: "Completed Tasks",
    text: "Last Campaign Performance",
    index: "",
    date: "just updated",
  },
];

const Chart = () => {
  return (
    <div>
      <Grid container spacing={2} sx={{ width: "120%" }}>
        {lists.map((list) => (
          <Grid item lg={4} md={6} sm={12}>
            <BoxChart data={list} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Chart;
