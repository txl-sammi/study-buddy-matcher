import axios from "axios";

const url = "http://localhost:5000";

export const signUpUser = (data) =>
  axios.post(`${url}/login/signUp`, data);
