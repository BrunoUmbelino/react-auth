import { useEffect, useState } from "react";

import api from "../../services/api";
import history from "../../routes/history";

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loginError, setLoginError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setAuthenticated(true);
    }

    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  async function handleLogin({ email, password }) {
    try {
      const response = await api.post(`/login`, {
        email,
        password,
      });

      localStorage.setItem("token", `${response.data.token}`);
      localStorage.setItem("username", `${response.data.username}`);
      api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
      setAuthenticated(true);
      history.push("/");
    } catch (error) {
      setLoginError("Username or password is invalid");
      console.log(error);
    }
  }

  function handleLogout() {
    setAuthenticated(false);
    setLoginError("");
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    history.push("/login");
    api.defaults.headers.Authorization = undefined;
  }

  return { authenticated, loading, handleLogin, handleLogout, loginError };
}
