import React from "react";
import { Grid, Typography } from "@mui/material";
import RecommendedFilms from "../Components/RecommendedFilms";
import { useAuth } from "../contexts/AuthContext";
function FavoriteFilms() {
  const faveList = window.localStorage.getItem("favoriteList");
  console.log(faveList);
  const Auth = useAuth();
  if (faveList) {
    const filmData = JSON.parse(faveList);
    const userData = filmData.find((user) => user.user === Auth.user);
    if (userData) {
      return (
        <Grid
          container
          spacing={4}
          sx={{ width: "1024px", maxWidth: "95%", mt: "5px" }}
        >
          <RecommendedFilms filmData={userData.details} type="Favorite Films" />
        </Grid>
      );
    } else {
      return (
        <Typography
          variant="h3"
          sx={{
            color: "#FFF0F0",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          No Favorite Films Added
        </Typography>
      );
    }
  }
}

export default FavoriteFilms;
