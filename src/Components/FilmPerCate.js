import React from "react";
import { Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { apiService } from "../App/apiService";
import { ENDPOINT } from "../App/config";
import { useState } from "react";
import Film from "./Film";
function FilmPerCate({ name, status }) {
  const [filmData, setFilmData] = useState([]);
  useEffect(() => {
    const getFilmsPerStatus = async () => {
      try {
        const response = await apiService.get(ENDPOINT.FILMSPERSTATUS(status));
        if (response.status === 200) {
          setFilmData(response.data.results);
        }
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    getFilmsPerStatus();
  }, []);

  return (
    <Grid item xs={12}>
      <Typography
        variant="h4"
        sx={{ color: "#FFF0F0", textAlign: "center", mb: "20px" }}
      >
        {name.toUpperCase()}
      </Typography>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{
          width: "100%",
          maxWidth: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {filmData
          .slice(0, 4)
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

export default FilmPerCate;
