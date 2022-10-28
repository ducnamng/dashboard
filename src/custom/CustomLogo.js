import { Box } from "@mui/system";
import React from "react";

function CustomLogo({ logo }) {
  return (
    <div>
      {logo === "material" ? (
        <Box>
          <img
            style={{ width: "36px", height: "36px" }}
            src="https://demos.creative-tim.com/material-dashboard-react/static/media/logo-xd.6e37886f94dba0c2967ece68a152e30c.svg"
            alt="img"
          />
        </Box>
      ) : logo === "add" ? (
        <Box>
          <img
            style={{ width: "36px", height: "36px" }}
            src="https://demos.creative-tim.com/material-dashboard-react/static/media/logo-atlassian.f2b0e8570a4b4ce768854ff3dad1a6e1.svg"
            alt="img"
          />
        </Box>
      ) : logo === "fix" ? (
        <Box>
          <img
            style={{ width: "36px", height: "36px" }}
            src="https://demos.creative-tim.com/material-dashboard-react/static/media/logo-slack.7c47c5aa474b5c4fb39fcf05ffb8e4e7.svg"
            alt="img"
          />
        </Box>
      ) : logo === "launch" ? (
        <Box>
          <img
            style={{ width: "36px", height: "36px" }}
            src="https://demos.creative-tim.com/material-dashboard-react/static/media/logo-spotify.e83cf56c9d99a1fdf59e8deb58bbe470.svg"
            alt="img"
          />
        </Box>
      ) : logo === "addnew" ? (
        <Box>
          <img
            style={{ width: "36px", height: "36px" }}
            src="https://demos.creative-tim.com/material-dashboard-react/static/media/logo-jira.c19fd4e416babfbd0fdb0a794188c601.svg"
            alt="img"
          />
        </Box>
      ) : logo === "redesign" ? (
        <Box>
          <img
            style={{ width: "36px", height: "36px" }}
            src="https://demos.creative-tim.com/material-dashboard-react/static/media/logo-invision.a1062115730dcd10e1c4f4abe7b9ab33.svg"
            alt="img"
          />
        </Box>
      ) : null}
    </div>
  );
}

export default CustomLogo;
