import { Route, Routes } from "react-router-dom"
import { Login } from "../../features/ui/components/auth/Login"
import { ChatBlock } from "../../features/ui/components/chat/ChatBlock"
import { ErrorPage } from "../components/error/ErrorPage"

export enum RouterPath {
  auth = "/auth",
  profile = "/profile",
  error = "*",
}
export const Routs = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Login />} />
      <Route path={RouterPath.auth} element={<Login />} />
      <Route path={RouterPath.profile} element={<ChatBlock />} />
      <Route path={RouterPath.error} element={<ErrorPage />} />
    </Routes>
  )
}
