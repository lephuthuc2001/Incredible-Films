import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import WelcomeLayout from "../Layouts/WelcomeLayout";
import LoginPage from "../Pages/LoginPage";
import NotFoundPages from "../Pages/NotFoundPages";
import AuthRequire from "./AuthRequire";
import FilmsList from "../Components/FilmsList";
import FilmDetails from "../Components/FilmDetails";
import HomePage from "../Pages/HomePage";
function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AuthRequire>
            <MainLayout />
          </AuthRequire>
        }
      >
        <Route index element={<HomePage />} />
        <Route path="genre/:id" element={<FilmsList />} />
        <Route path="filmDetails/:id" element={<FilmDetails />} />
        <Route path="search/:id" element={<FilmsList />} />
        <Route path="*" element={<NotFoundPages />} />
      </Route>
      <Route path="/welcome" element={<WelcomeLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPages />} />
      </Route>
    </Routes>
  );
}

export default Router;
