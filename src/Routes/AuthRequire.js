import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
function AuthRequire({ children }) {
  const auth = useAuth();
  const location = useLocation();
  if (auth.isAuthenticated) {
    return children;
  }
  return <Navigate to="/welcome" replace state={location} />;
}

export default AuthRequire;
