import {
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";

const SignUp = () => {
  return (
    <div>
      <Box
        sx={{
          height: "100%",
          overflowX: "hidden",
          color: "rgb(52, 71, 103)",
          paddingTop: "20px",
        }}
      >
        <Box>
          <Box></Box>
          <Grid
            containe
            sx={{
              display: "flex",
              flexFlow: "row wrap",
              justifyContent: "center",
              alignItems: "center",
              height: "599px",
            }}
          >
            <Grid xs={11} sm={9} md={5} lg={4}>
              <Paper sx={{ display: "flex", flexDirection: "column" }}>
                <Box
                  sx={{
                    margin: "-24px 16px 8px",
                    padding: " 16px",
                    textAlign: "center",
                    opacity: "1",
                    background:
                      "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))",
                    color: "rgb(52, 71, 103)",
                    borderRadius: "0.5rem",
                    boxShadow:
                      "rgb(0 0 0 / 14%) 0rem 0.25rem 1.25rem 0rem, rgb(0 187 212 / 40%) 0rem 0.4375rem 0.625rem -0.3125rem",
                  }}
                >
                  <h4 style={{ color: "#fff", fontSize: "24px" }}>Sign Up</h4>
                  <Box
                    sx={{
                      color: "#fff",
                      display: "flex",
                      gap: "25px",
                      justifyContent: "center",
                      padding: "32px",
                    }}
                  >
                    <FacebookIcon sx={{ width: "20px", height: "20px" }} />
                    <GitHubIcon sx={{ width: "20px", height: "20px" }} />
                    <GoogleIcon sx={{ width: "20px", height: "20px" }} />
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "32px 24px 24px",
                  }}
                >
                  <TextField
                    id="standard-basic"
                    label="Name"
                    variant="standard"
                    sx={{
                      color: "rgb(210, 214, 218)",
                      fontSize: "14px",
                      marginBottom: "16px",
                    }}
                  />
                  <TextField
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    sx={{
                      color: "rgb(210, 214, 218)",
                      fontSize: "14px",
                      marginBottom: "16px",
                    }}
                  />
                  <TextField
                    id="standard-basic"
                    label="Passwork"
                    variant="standard"
                    sx={{
                      color: "rgb(210, 214, 218)",
                      fontSize: "14px",
                      marginBottom: "16px",
                    }}
                  />

                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Label"
                    />
                    <p>Remember me</p>
                  </Box>
                  <Stack spacing={2} direction="row">
                    <Button
                      variant="contained"
                      sx={{
                        padding: "10px 24px",
                        width: "100%",
                        margin: "32px 0 8px 0",
                      }}
                    >
                      SIGN UP
                    </Button>
                  </Stack>
                  <Box sx={{ margin: "24px 0 8px 0" }}>
                    <p style={{ textAlign: "center" }}>
                      Already have an account?{" "}
                      <a
                        href
                        style={{
                          color: "rgb(26, 115, 232)",
                          fontWeight: "600",
                        }}
                      >
                        Sign In
                      </a>
                    </p>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default SignUp;
