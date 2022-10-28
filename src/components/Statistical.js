import { Grid } from "@mui/material";
import React from "react";
import BoxStatistical from "../custom/BoxStatistical";

const lists = [
  {
    logo: "chair",
    name: "Bookings",
    num: "281",
    index: "55%",
    date: "than lask week",
  },
  {
    logo: "chart",
    name: "Today's Users",
    num: "2,300",
    index: "3%",
    date: "than lask month",
  },
  {
    logo: "store",
    name: "Revenue",
    num: "34k",
    index: "1%",
    date: "than yesterday",
  },
  {
    logo: "add",
    name: "Followers",
    num: "+91",
    index: "",
    date: "Just updated",
  },
];

const Statistical = () => {
  return (
    <div>
      <Grid
        container
        spacing={2}
        sx={{ padding: "16px 0", width: "120%", marginTop: "10px" }}
      >
        {lists.map((list) => (
          <Grid
            sx={{ paddingLeft: "24px !impotent" }}
            item
            lg={3}
            md={6}
            sm={12}
          >
            <BoxStatistical data={list} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Statistical;
