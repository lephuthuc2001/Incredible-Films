import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
const PRIMARY = {
  light: "#495057",
  main: "#343a40",
  dark: "#212529",
  contrastText: "#fff",
};

const SECONDARY = {
  light: "#f03e3e",
  main: "#e03131",
  dark: "#c92a2a",
  contrastText: "#fff",
};
const theme = createTheme({
  pallete: {
    primary: PRIMARY,
    secondary: SECONDARY,
  },
});
function MUIThemeProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      {" "}
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default MUIThemeProvider;
