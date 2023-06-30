import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";
import React from "react";

export const MyTitle = ({ myTitle }) => {
  const theme = useTheme();
  return (
    <Typography
      fontWeight={"bold"}
      fontSize={"1.5rem"}
      color={theme.palette.neutral.main}
    >
      {myTitle}
    </Typography>
  );
};
