import React from "react";
import { Grid } from "@mui/material";
import RecommendedFilms from "../Components/RecommendedFilms";
import { useAuth } from "../contexts/AuthContext";
function FavoriteFilms() {
  const faveList = window.localStorage.getItem("favoriteList");
  console.log(faveList);
  const Auth = useAuth();
  if (faveList) {
    const filmData = JSON.parse(faveList);
    console.log(filmData.find((user) => user.user === Auth.user).details);
    return (
      <Grid
        container
        spacing={4}
        sx={{ width: "1024px", maxWidth: "95%", mt: "5px" }}
      >
        <RecommendedFilms
          filmData={filmData.find((user) => user.user === Auth.user).details}
          type="Favorite Films"
        />
      </Grid>
    );
  }
}

export default FavoriteFilms;
