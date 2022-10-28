import { Avatar, Box, Grid, Paper } from "@mui/material";
import React from "react";
import styled from "styled-components";
import CustomLink from "../../custom/CustomLink";

const profiles = [
  { title: "Full Name:", index: "Pham Nguyen Duc Nam", type: "" },
  { title: "Mobile:", index: "0827398809", type: "" },
  { title: "Email:", index: "ducnamng7999@gmail.com", type: "" },
  { title: "Social:", type: "facebook" },
];

const Title = styled.span`
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.5px;
  opacity: 1;
  vertical-align: unset;
  text-decoration: none;
  color: rgb(52, 71, 103);
  font-weight: 700;
`;

const Index = styled.p`
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.5px;
  opacity: 1;
  vertical-align: unset;
  text-decoration: none;
  color: rgb(123, 128, 154);
  font-weight: 400;
`;

const Typography = styled.h4`
  padding: 16px 16px 0;
  font-size: 16px;
  line-height: 1.625;
  letter-spacing: 0.12px;
  opacity: 1;
  text-transform: capitalize;
  vertical-align: unset;
  text-decoration: none;
  color: rgb(52, 71, 103);
`;

const Content = () => {
  return (
    <div>
      <Grid container sx={{ marginTop: "10px" }}>
        <Grid item>
          <Box
            sx={{
              borderRadius: "12px",
              background:
                " linear-gradient(195deg, rgba(73, 163, 241, 0.6), rgba(26, 115, 232, 0.6)) 50% center / cover,url(https://demos.creative-tim.com/material-dashboard-react/static/media/bg-profile.af1219a742e09fc7b612.jpeg)",
              minHeight: "300px",
              backgroundPosition: "50% center",
              overflow: "hidden",
              opacity: "1",
              alignItems: "center",
            }}
          ></Box>
          <Paper
            sx={{
              padding: " 16px",
              margin: "-64px 24px 0",
              borderRadius: "12px",
            }}
          >
            <Grid container>
              <Grid sm={12} lg={1}>
                <Avatar
                  style={{ width: "74px", height: "74px" }}
                  src="https://scontent.fhan3-5.fna.fbcdn.net/v/t39.30808-6/269914313_725884755055544_1367960355525180049_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=JGSXQbztpIQAX9WfKJi&_nc_ht=scontent.fhan3-5.fna&oh=00_AfApV-z0ClwkarUl12iD0t7oYCpIV4lsWj1B9RggcTYx3w&oe=635FFE4E"
                ></Avatar>
              </Grid>
              <Grid sm={12} lg={4}>
                <Typography
                  style={{
                    fontSize: "24px",
                    lineHeight: "1.375",
                    opacity: " 1",
                    textTransform: " none",
                    verticalAlign: "unset",
                    textDecoration: "none",
                    color: " rgb(52, 71, 103)",
                  }}
                >
                  Phạm Nguyễn Đức Nam
                </Typography>
                <Index style={{ paddingLeft: "16px" }}>
                  Front End Developer
                </Index>
              </Grid>
            </Grid>

            <Box sx={{ marginBottom: "24px", marginTop: "40px" }}>
              <Grid container spacing={2}>
                <Grid sx={{ padding: "8px 0 0 8px" }} sm={12} lg={6}>
                  <Box>
                    <Typography>CONTACT INFORMATION</Typography>
                    <Box sx={{ padding: "16px 16px 0 16px" }}>
                      {profiles.map((profile) => {
                        return (
                          <Box
                            sx={{
                              display: "flex",
                              gap: "10px",
                              paddingRight: "16px",
                              paddingBottom: "10px",
                              alignItems: "center",
                            }}
                          >
                            <Title>{profile.title}</Title>
                            <Index>{profile.index}</Index>
                            <CustomLink type={profile.type}></CustomLink>
                          </Box>
                        );
                      })}
                    </Box>
                  </Box>

                  <Box>
                    <Typography>OVERVIEW</Typography>
                    <Box sx={{ padding: "16px 32px 16px 16px" }}>
                      <Index>
                        I want to prove myself, so that I will put knowledge and
                        experience about the Information Technology and try my
                        best to become a trainee in a frontend developer.
                        Futhermore, I hope I have good oppotunities to get
                        promotion in my job and develop my skills with
                        development of company
                      </Index>
                    </Box>
                  </Box>

                  <Box>
                    <Typography>WORK EXPERIENCE</Typography>
                    <Box sx={{ margin: "16px" }}>
                      <Box>
                        <Title>Lifetek</Title>
                        <Title> (08/2022 - 10/2022)</Title>
                        <Index style={{ paddingTop: "10px" }}>
                          Intern Frontend ReactJS
                        </Index>
                        <Index style={{ paddingTop: "10px" }}>
                          Working with ReactJS, Material UI
                        </Index>
                      </Box>
                    </Box>
                  </Box>

                  <Box>
                    <Typography>HOBBIES & INTEREST</Typography>
                    <Box sx={{ padding: "16px 32px 16px 16px" }}>
                      <Index>
                        Reading technologies blog tech and research new
                        javascript framework <br /> Play football once a week{" "}
                        <br /> I usually wake up early and walking and runing
                        everyday
                      </Index>
                    </Box>
                  </Box>
                </Grid>

                <Grid sx={{ padding: "8px 0 0 8px" }} sm={12} lg={6}>
                  <Box>
                    <Typography>EDUCATION</Typography>

                    <Box sx={{ margin: "16px" }}>
                      <Box>
                        <Title>University of Transport Technology</Title>
                        <Title> (08/2017 - 06/2022)</Title>
                        <Index style={{ paddingTop: "10px" }}>
                          Major: Communications and Computer Networks
                        </Index>
                      </Box>

                      <Box sx={{ paddingTop: "14px" }}>
                        <Title>T3H Information Technology Institute</Title>
                        <Title> (04/2022 - 08/2022)</Title>
                        <Index style={{ paddingTop: "10px" }}>
                          Major: ReactJs
                        </Index>
                      </Box>
                    </Box>
                  </Box>

                  <Box>
                    <Typography>SKILLS</Typography>

                    <Box sx={{ margin: "16px" }}>
                      <Box>
                        <Index style={{ paddingBottom: "10px" }}>
                          HTML,CSS
                        </Index>
                        <Index style={{ paddingBottom: "10px" }}>
                          Material UI, SCSS
                        </Index>
                        <Index style={{ paddingBottom: "10px" }}>
                          JavaScript
                        </Index>
                        <Index style={{ paddingBottom: "10px" }}>
                          ReactJS(Redux Toolkit)
                        </Index>
                        <Index>GIT</Index>
                      </Box>
                    </Box>
                  </Box>

                  <Box>
                    <Typography>PROJECTS</Typography>

                    <Box sx={{ margin: "16px" }}>
                      <Box>
                        <Title>Template Website Coffee shop</Title>
                        <Index style={{ paddingTop: "10px" }}>
                          Technology: HTML, SCSS, JavaScript
                        </Index>
                        <Index style={{ paddingTop: "10px" }}>
                          Link GIT:{" "}
                          <a
                            href="https://github.com/ducnamng/coffee_"
                            rel="noreferrer"
                            target="_blank"
                          >
                            https://github.com/ducnamng/coffee_
                          </a>
                        </Index>
                      </Box>

                      <Box sx={{ paddingTop: "14px" }}>
                        <Title>Dashboard</Title>
                        <Index style={{ paddingTop: "10px" }}>
                          Technology: HTML, JavaScript, React route, ReactJS,
                          MUIv5
                        </Index>
                        <Index style={{ paddingTop: "10px" }}>
                          Link GIT: <a></a>
                        </Index>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Content;
