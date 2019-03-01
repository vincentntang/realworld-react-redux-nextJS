import React from "react";
import axios from "axios";

const API_ROOT = "https://conduit.productionready.io/api";

export default axios.create({
  baseURL: API_ROOT
});

axios.get("/articles").then(res => {
  console.log(res);
});

// API calls that don't need JWT

// API calls with JWT
