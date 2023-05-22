// First we need to import axios.js
import axios from "axios";
// Next we make an 'instance' of it
const instance = axios.create({
  // .. where we make our configurations
  // baseURL: "http/api",
  baseURL: "http://20.63.77.148:5000",
  //baseURL: "http://localhost:5000",
});
export default instance;
