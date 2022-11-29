import ExitToAppIcon from "@mui/icons-material/ExitToApp"
import IconButton from "@mui/material/IconButton"
import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../../../../../utils/hooks/appHooks"
import { logoutTC } from "../../../../../bll/reducers/authReducer"
export const Logout = () => {
  const dispatch = useAppDispatch()
  const token = localStorage.getItem("token")
  const navigate = useNavigate()
  const logoutHandler = () => {
    token && dispatch(logoutTC({ token }))
    navigate("/auth")
  }
  return (
    <IconButton onClick={logoutHandler}>
      <ExitToAppIcon fontSize="large" color="error" />
    </IconButton>
  )
}
