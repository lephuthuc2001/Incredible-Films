export const BASE_URL = process.env.REACT_APP_BASE_URL;
export const API_KEY = process.env.REACT_APP_API_KEY;
export const ENDPOINT = {
  GENRES: `/genre/movie/list?api_key=${API_KEY}`,
  FILMSPERGENRE: (genre, page = 1) =>
    `/discover/movie?api_key=${API_KEY}&with_genres=${genre}&page=${page}`,
  GETIMG: (size, url) => `https://image.tmdb.org/t/p/${size}${url}`,
  GETMOVIEDETAILS: (movieID) => `/movie/${movieID}?api_key=${API_KEY}`,
  FILMSPERSTATUS: (status) => `/movie/${status}?api_key=${API_KEY}`,
  GETRECOMMENDEDFILMS: (movieID) =>
    `/movie/${movieID}/recommendations?api_key=${API_KEY}`,
  SEARCHFILMS: (query, page = 1) =>
    `/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`,
};
