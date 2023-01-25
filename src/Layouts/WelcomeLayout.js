import React from "react";
import Logo from "../Components/Logo";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import bg from "./welcomelogo.jpg";
function WelcomeLayout() {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("login");
  };
  return (
    <Box
      sx={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          zIndex: "1000",
          display: "flex",
          justifyContent: "space-between",
          p: "20px",
          paddingLeft: "50px",
          paddingRight: "50px",
        }}
      >
        {" "}
        <Logo sx={{ flexGrow: "1" }} />
        <Button
          variant="contained"
          onClick={clickHandler}
          sx={{
            alignSelf: "center",
            backgroundColor: "#c92a2a",
            "&:hover": { backgroundColor: "#e03131" },
          }}
        >
          Sign In
        </Button>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <Typography
          variant="h4"
          color="white"
          textAlign="center"
          display="block"
        >
          Unlimited movies, Tv show and more
        </Typography>
        <Typography
          variant="h6"
          color="white"
          textAlign="center"
          display="block"
        >
          Watch anywhere. Cancel anytime.
        </Typography>
      </Box>

      <Outlet />
    </Box>
  );
}

export default WelcomeLayout;
