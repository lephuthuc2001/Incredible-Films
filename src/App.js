import React from "react";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./contexts/AuthContext";
import Router from "./Routes/Router";
import MUIThemeProvider from "./contexts/MUIThemeProvider";
function App() {
  return (
    <MUIThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AuthProvider>
    </MUIThemeProvider>
  );
}

export default App;
