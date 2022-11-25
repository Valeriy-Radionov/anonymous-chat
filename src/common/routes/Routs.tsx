import { Route, Routes } from "react-router-dom"
import { ErrorPage } from "../components/error/ErrorPage"

export enum RouterPath {
  login = "/login",
  users = "/chat",
  error = "*",
}
export const Routs = () => {
  return (
    <Routes>
      {/* <Route path={"/"} element={} /> */}
      <Route path={RouterPath.error} element={<ErrorPage />} />
    </Routes>
  )
}
