import React from "react";
import { Grid, Typography } from "@mui/material";
import { ENDPOINT } from "../App/config";
import Film from "./Film";

function RecommendedFilms({ filmData, type, genre }) {
  return (
    <Grid item xs={12} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Typography variant="h5" sx={{ color: "#FFF0F0" }}>
        {type}
      </Typography>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{
          width: "100%",
          mt: "5px",
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
              isReplaced={true}
              genre={genre}
            />
          ))}
      </Grid>
    </Grid>
  );
}

export default RecommendedFilms;
