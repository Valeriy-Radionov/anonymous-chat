import axios from "axios"

export const baseInstance = axios.create({
  baseURL: process.env.NODE_ENV === "development" ? "http://localhost:5000" : "chat-backend-v1-lze0rmscg-valeriy-radionov.vercel.app",
})
