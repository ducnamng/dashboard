import { Avatar } from "@mui/material";
import React from "react";

function CustomMember({ member }) {
  return (
    <div>
      {member === "mui" ? (
        <Avatar
          sx={{ width: "25px", height: "25px", borderRadius: "50%" }}
          alt="Travis Howard"
          src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-1.0fd36e0ee93dcfacdef8.jpg"
        />
      ) : null}
    </div>
  );
}

export default CustomMember;
