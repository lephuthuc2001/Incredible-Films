import React, { createContext, useContext, useReducer } from "react";

const initialState = {
  isAuthenticated: false,
  user: null,
};
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

const AuthContext = createContext({ ...initialState });

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    isAuthenticated: window.localStorage.getItem("username") ? true : false,
    user: window.localStorage.getItem("username")
      ? window.localStorage.getItem("username")
      : null,
  });

  const login = (username) => {
    dispatch({
      type: LOGIN,
      payload: { username },
    });
    window.localStorage.setItem("username", username);
  };

  const logout = () => {
    dispatch({ type: LOGOUT });
    window.localStorage.removeItem("username");
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
