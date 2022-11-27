import { Route, Routes } from "react-router-dom"
import { Login } from "../../features/ui/components/auth/Login"
import { UserProfile } from "../../features/ui/components/chat/UserProfile"
import { ErrorPage } from "../components/error/ErrorPage"

export enum RouterPath {
  login = "/login",
  profile = "/profile",
  error = "*",
}
export const Routs = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Login />} />
      <Route path={RouterPath.profile} element={<UserProfile />} />
      <Route path={RouterPath.error} element={<ErrorPage />} />
    </Routes>
  )
}
