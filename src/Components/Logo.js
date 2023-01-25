import React from "react";
import logoImg from "./logo.png";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
function Logo({ disabledLink, sx }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const logo = (
    <Box sx={{ width: "150px", height: "150px", ...sx }}>
      <img
        src={logoImg}
        alt="Incredible Films"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "fill",
        }}
      />
    </Box>
  );

  const navigate = useNavigate();
  if (disabledLink) {
    return logo;
  }
  return (
    <Button
      sx={{
        display: matches ? "inline-block" : "none",
      }}
      onClick={() => navigate("/")}
    >
      {logo}
    </Button>
  );
}

export default Logo;
