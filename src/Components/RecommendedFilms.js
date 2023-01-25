import React from "react";
import { Grid, Typography } from "@mui/material";
import { ENDPOINT } from "../App/config";
import Film from "./Film";

function RecommendedFilms({ filmData }) {
  return (
    <Grid item xs={12}>
      <Typography variant="h5" sx={{ color: "#FFF0F0" }}>
        Recommendations
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
            />
          ))}
      </Grid>
    </Grid>
  );
}

export default RecommendedFilms;
