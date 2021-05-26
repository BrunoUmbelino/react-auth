import React, { createContext } from "react";
import useAuth from "./hook/useAuth";

const Context = createContext();

function AuthProvider({ children }) {
  const { authenticated, loading, handleLogin, handleLogout, loginError } =
    useAuth();

  return (
    <Context.Provider
      value={{
        authenticated,
        loading,
        handleLogin,
        handleLogout,
        loginError,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { AuthProvider, Context };
