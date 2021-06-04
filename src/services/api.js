import axios from "axios";
const { REACT_APP_URL_API } = process.env;

export default axios.create({
  baseURL: REACT_APP_URL_API,
});
