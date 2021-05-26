import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3333",
});

const testeAPI = () =>
  axios
    .get(`/`)
    .then((response) => console.log(response))
    .catch((err) => console.log(err));

const loginAPI = ({ email, password }) => {
  axios
    .post(`/login`, {
      email,
      password,
    })
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
};

export { loginAPI, testeAPI };
