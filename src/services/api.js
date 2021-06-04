import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_URL_API,
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
