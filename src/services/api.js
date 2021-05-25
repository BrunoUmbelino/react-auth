import axios from "axios";

const baseUrl = "http://localhost:3333";

const testeAPI = () =>
  axios
    .get(`${baseUrl}/`)
    .then((response) => console.log(response))
    .catch((err) => console.log(err));

const loginAPI = ({ email, password }) => {
  axios
    .post(`${baseUrl}/login`, {
      email,
      password,
    })
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
};

export { loginAPI, testeAPI };
