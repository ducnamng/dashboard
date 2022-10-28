import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Header from "../Header";
import Menu from "../Menu";
import MainProfile from "../screenProfile/MainProfile";

function Layout({ title, url, children }) {
  return (
    <Box>
      <Header />
      <Grid container spacing={2} p={2}>
        <Box>
          <Menu />
        </Box>
        <Box
          style={{
            marginLeft: 332,
            width: "100%",
            paddingTop: "76px",
          }}
        >
          {children}
        </Box>
      </Grid>
    </Box>
  );
}

export default Layout;
