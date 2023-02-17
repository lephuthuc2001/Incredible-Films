import React from "react";
import { Grid } from "@mui/material";
import FilmPerCate from "../Components/FilmPerCate";

function HomePage() {
  return (
    <Grid
      container
      sx={{
        width: "1024px",
        maxWidth: "95%",
        mt: "5px",
        justifyContent: "center",
        alignItems: "center",
        mb: "20px",
      }}
      spacing={4}
    >
      <FilmPerCate name="Popular" status="popular" />
      <FilmPerCate name="Upcoming" status="upcoming" />
      <FilmPerCate name="Now Playing" status="now_playing" />
      <FilmPerCate name="Top Rated" status="top_rated" />
    </Grid>
  );
}

export default HomePage;
