import history from "../routes/history";
import api from "./api";

const register = async ({ email, password }) => {
  try {
    api.post("/register", { email, password });
    alert("User registered successfully!");
    history.push("/loading");
    setTimeout(() => {
      history.push("/login");
    }, 500);
  } catch (error) {
    console.log(error);
  }
};

export default register;
