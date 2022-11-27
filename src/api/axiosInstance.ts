import axios from "axios"

export const baseInstance = axios.create({
  baseURL: process.env.NODE_ENV === "development" ? "http://localhost:5000" : "https://backend-users-01.herokuapp.com/",
})
