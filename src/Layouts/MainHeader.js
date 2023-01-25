import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Logo from "../Components/Logo";
import MyMenu from "../Components/MyMenu";
import { useTheme } from "@emotion/react";
import { useEffect, useState } from "react";
import { apiService } from "../App/apiService";
import { ENDPOINT } from "../App/config";
import FilmSearch from "../Components/FilmSearch";

export default function MainHeader() {
  const theme = useTheme();
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    const getGenres = async () => {
      try {
        const response = await apiService.get(ENDPOINT.GENRES);
        if (response.status === 200) {
          setGenres(response.data.genres);
        }
      } catch (error) {
        return;
      }
    };
    getGenres();
  }, []);

  return (
    <Box
      sx={{
        display: "block",
        alignSelf: "stretch",
      }}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: `${theme.pallete.primary.dark}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "1024px",
            maxWidth: "100%",
          }}
        >
          <Logo disabledLink={false} />
          <MyMenu menuName="Genres" menuItems={genres} />
          <FilmSearch />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
