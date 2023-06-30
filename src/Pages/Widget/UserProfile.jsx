import { Box } from "@mui/material";
import { MyTitle } from "components/MyComponent";
import WidgetWrapper from "components/WidgetWrapper";
import React from "react";

const UserProfile = ({ userData }) => {
  return (
    <WidgetWrapper>
      <MyTitle myTitle={"Profile"} />
      {Object.keys(userData).map((k) => {
        return <Box>{k} : {userData[k]}</Box>;
      })}
    </WidgetWrapper>
  );
};

export default UserProfile;
