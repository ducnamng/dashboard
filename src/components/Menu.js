import { Paper, Box } from "@mui/material";
import React from "react";
import BakeryDiningIcon from "@mui/icons-material/BakeryDining";
import CustomIconMenu from "../custom/CustomIconMenu";
import { Link } from "react-router-dom";

const lists = [
  { icon: "dashboard", name: "Dashboard", path: "/" },
  { icon: "table", name: "Tables", path: "table" },
  { icon: "nofica", name: "Nofications", path: "nofica" },
  { icon: "profile", name: "Profile", path: "profile" },
  { icon: "signin", name: "Sign In", path: "signin" },
  { icon: "signup", name: "Sign Up", path: "signup" },
];

const Menu = () => {
  return (
    <div style={{ height: "100%" }}>
      <Paper
        sx={{
          borderRadius: 0,
          borderTopRightRadius: "12px",
          backgroundColor: "#3f3f46",
          position: "fixed",
          zIndex: 1,
          width: "300px",
          overflowY: "auto",
          top: "76px",
          bottom: 0,
          background:
            "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))",
        }}
      >
        <Box
          sx={{
            padding: "24px 32px 8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "3px",
            color: "#fff",
          }}
        >
          <BakeryDiningIcon
            style={{ width: "32px", height: "32px", color: "#fff" }}
          ></BakeryDiningIcon>
          <p>Dashboard</p>
        </Box>

        <hr
          style={{ backgroundColor: "#fff", outline: "none", margin: "16px" }}
        />

        {lists.map((list) => {
          return (
            <Box>
              {/* <Link to="/">{list.name}</Link> */}
              <ul>
                <Link to={list.path}>
                  <li style={{ display: "flex" }}>
                    <Box
                      className="hoverMenu"
                      sx={{
                        display: "flex",
                        // background:
                        //   "linear-gradient(195deg, rgb(236, 64, 122), rgb(216, 27, 96))",
                        padding: "12px 10px",
                        margin: "1.5px 20px",
                        alignItems: "center",
                        width: "100%",
                        borderRadius: "5px",
                        gap: "15px",
                      }}
                    >
                      <CustomIconMenu icon={list.icon} />

                      <p
                        style={{
                          color: "white",
                          fontWeight: "400",
                          fontSize: "14px",
                        }}
                      >
                        {list.name}
                      </p>
                    </Box>
                  </li>
                </Link>
              </ul>
            </Box>
          );
        })}
      </Paper>
    </div>
  );
};

export default Menu;
