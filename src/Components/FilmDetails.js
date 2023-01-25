import React from "react";
import { useParams } from "react-router-dom";
import { Box, Grid, Rating, Typography } from "@mui/material";
import { ENDPOINT } from "../App/config";
import { useEffect } from "react";
import { apiService } from "../App/apiService";
import { useState } from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import RecommendedFilms from "./RecommendedFilms";

function FilmDetails() {
  const { id } = useParams();
  const [filmDetails, setFilmDetails] = useState([]);
  const [recommendedFilms, setRecommendedFilms] = useState([]);
  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await apiService.get(ENDPOINT.GETMOVIEDETAILS(id));
        const rec = await apiService.get(ENDPOINT.GETRECOMMENDEDFILMS(id));
        console.log(ENDPOINT.GETMOVIEDETAILS(id));
        console.log(ENDPOINT.GETRECOMMENDEDFILMS(id));
        if (response.status === 200) {
          setFilmDetails(response.data);
          console.log(response.data);
        }
        if (rec.status === 200) {
          setRecommendedFilms(rec.data.results);
          console.log(rec.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, [id]);

  return (
    <Grid
      container
      spacing={2}
      sx={{
        width: "1024px",
        maxWidth: "95%",
        mt: "3px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid item xs={12} sm={6}>
        <img
          src={ENDPOINT.GETIMG("w500", filmDetails.backdrop_path)}
          alt={filmDetails.title}
          style={{ width: "100%" }}
        />
      </Grid>
      <Grid item xs={12} sm={6} spacing={2}>
        <Box sx={{ display: "flex", flexDirection: "column", rowGap: "6px" }}>
          <Typography variant="h5" sx={{ color: "#FFF0F0" }}>
            {filmDetails.title?.toUpperCase()}{" "}
            {`(${filmDetails.original_title})`}
          </Typography>
          <List sx={{ backgroundColor: "#495057" }}>
            <ListItem>
              <ListItemText>
                <strong>Genres:</strong>{" "}
                {`${filmDetails.genres?.map(
                  (genre, index) => ` ${genre.name}`
                )}`}
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                {" "}
                <strong>Runtime:</strong>
                {` ${filmDetails.runtime} minutes`}
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                {" "}
                <strong>Country</strong>
                {`: ${
                  filmDetails.production_countries
                    ? filmDetails.production_countries[0].name
                    : "none"
                } `}
              </ListItemText>
            </ListItem>
          </List>
          <Box
            sx={{
              backgroundColor: "#495057",
              p: "5px",
              display: "flex",
              gap: "5px",
              alignItems: "center",
            }}
          >
            <Rating
              name="read-only"
              value={Math.round(filmDetails.vote_average * 10) / 10}
              readOnly
              max={10}
              precision={0.1}
            />
            <Typography
              variant="h8"
              component="legend"
              sx={{ color: "#FFF0F0", fontWeight: "bold" }}
            >
              {`(${Math.round(filmDetails.vote_average * 10) / 10}/${
                filmDetails.vote_count
              } Votes)`}
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" sx={{ color: "#FFF0F0" }}>
          Description
        </Typography>
        <Box sx={{ backgroundColor: "#495057", p: "5px 10px" }}>
          <Typography variant="body2">{filmDetails.overview}</Typography>
        </Box>
      </Grid>
      <RecommendedFilms filmData={recommendedFilms} />
    </Grid>
  );
}

export default FilmDetails;
