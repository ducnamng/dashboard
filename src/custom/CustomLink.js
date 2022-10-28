import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Box } from "@mui/system";

const CustomLink = ({ type }) => {
  return (
    <div>
      {type === "facebook" ? (
        <Box>
          <a href="https://www.facebook.com/profile.php?id=100029020792405">
            <FacebookIcon />
          </a>
        </Box>
      ) : null}
    </div>
  );
};

export default CustomLink;
