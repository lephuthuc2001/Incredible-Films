import React from "react";
import { Grid, Typography } from "@mui/material";
import { ENDPOINT } from "../App/config";
import Film from "./Film";

function RecommendedFilms({ filmData, type }) {
  return (
    <Grid item xs={12}>
      <Typography variant="h5" sx={{ color: "#FFF0F0" }}>
        {type}
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{
          width: "1024px",
          maxWidth: "95%",
          mt: "5px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {filmData
          .slice(0, 8)
          .filter((film) => film.poster_path != null)
          .map((film) => (
            <Film
              posterImg={ENDPOINT.GETIMG("w500", film.poster_path)}
              title={film.title}
              popularity={film.popularity}
              release_date={film.release_date}
              id={film.id}
              key={Math.random().toString(36).substring(5)}
            />
          ))}
      </Grid>
    </Grid>
  );
}

export default RecommendedFilms;
