import {
  Avatar,
  AvatarGroup,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import CustomLogo from "./CustomLogo";

const BoxProJect = () => {
  const rows = [
    {
      logo: "material",
      companies: "Material UI XD Version",
      budget: "$14,000",
      member: "Nam",
      completion: "66%",
    },
    {
      logo: "add",
      companies: "Add Progress Track",
      budget: "$3,000",
      member: "Nam",
      completion: "66%",
    },
    {
      logo: "fix",
      companies: "Fix Platform Errors",
      budget: "$Not set",
      member: "Nam",
      completion: "66%",
    },
    {
      logo: "launch",
      companies: "Launch our Mobile App",
      budget: "$20,500",
      member: "Nam",
      completion: "66%",
    },
    {
      logo: "addnew",
      companies: "Add the New Pricing Page",
      budget: "$500",
      member: "Nam",
      completion: "66%",
    },
    {
      logo: "redesign",
      companies: "Redesign New Online Shop",
      budget: "$2,000",
      member: "Nam",
      completion: "66%",
    },
  ];
  console.log(CustomLogo);
  return (
    <div>
      <Paper elevation={3} sx={{ borderRadius: "12px" }}>
        <Box className="headerProgress">
          <Box>
            <h6 style={{ fontSize: "16px", color: "rgb(52, 71, 103)" }}>
              Project
            </h6>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <DoneIcon
                sx={{
                  color: " rgb(26, 115, 232);",
                  fontSize: "20px",
                  paddingRight: "5px",
                }}
              />
              <strong style={{ color: "rgb(123, 128, 154)", fontSize: "14px" }}>
                30 done&nbsp;
              </strong>
              <p style={{ color: "rgb(123, 128, 154)", fontSize: "14px" }}>
                this month
              </p>
            </Box>
          </Box>
          <MoreVertIcon
            sx={{
              color: "rgb(123, 128, 154)",
              fontSize: "20px",
            }}
          />
        </Box>
        <Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      fontSize: "11px",
                      color: "rgb(123, 128, 154)",
                      fontWeight: "600",
                    }}
                  >
                    Companies
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontSize: "11px",
                      color: "rgb(123, 128, 154)",
                      fontWeight: "600",
                    }}
                  >
                    Members
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontSize: "11px",
                      color: "rgb(123, 128, 154)",
                      fontWeight: "600",
                    }}
                  >
                    Budget
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontSize: "11px",
                      color: "rgb(123, 128, 154)",
                      fontWeight: "600",
                    }}
                  >
                    Completion
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <CustomLogo logo={row.logo} />
                        <span style={{ fontWeight: "600", color: "#344767" }}>
                          {row.companies}
                        </span>
                      </Box>
                    </TableCell>
                    <TableCell align="center">{row.member}</TableCell>
                    <TableCell align="center">{row.budget}</TableCell>
                    <TableCell align="center">{row.completion}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Paper>
    </div>
  );
};

export default BoxProJect;
