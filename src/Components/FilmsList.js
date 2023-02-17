import React from "react";
import { useParams } from "react-router-dom";
import { apiService } from "../App/apiService";
import { ENDPOINT } from "../App/config";
import { useEffect, useState } from "react";
import Film from "./Film";
import { Grid } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { useLocation } from "react-router-dom";
function FilmsList() {
  const { id } = useParams();
  const [filmData, setFilmData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const state = useLocation().state;
  useEffect(() => {
    const getFilms = async () => {
      try {
        const response = await apiService.get(
          state.type === "genre"
            ? `${ENDPOINT.FILMSPERGENRE(id, page)}`
            : `${ENDPOINT.SEARCHFILMS(state.query, page)}`
        );
        setTotalPages((prev) => {
          const currentTotalPages = response.data.total_pages;
          if (prev !== currentTotalPages) {
            setPage(1);
          }
          return currentTotalPages;
        });
        setFilmData(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getFilms();
  }, [id, page]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <h1 style={{ color: "#FFF0F0" }}>{state.title}</h1>
      <Grid
        container
        spacing={2}
        sx={{
          width: "1024px",
          maxWidth: "95%",
          mt: "5px",
        }}
      >
        {filmData
          .filter((film) => film.poster_path != null)
          .map((film) => (
            <Film
              posterImg={ENDPOINT.GETIMG("w500", film.poster_path)}
              title={film.title}
              popularity={film.popularity}
              release_date={film.release_date}
              id={film.id}
              key={Math.random().toString(36).substring(5)}
              genre={state.title}
            />
          ))}
      </Grid>

      <Pagination
        sx={{ m: "20px 0" }}
        count={totalPages > 500 ? 500 : totalPages}
        shape="rounded"
        defaultPage={1}
        page={page}
        onChange={handleChange}
        color="error"
      />
    </>
  );
}

export default FilmsList;
