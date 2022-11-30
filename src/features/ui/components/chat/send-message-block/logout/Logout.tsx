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
    <div style={{ display: "flex", justifyContent: "end" }}>
      <IconButton onClick={logoutHandler} size={"small"} sx={{ border: "2px solid darkgrey", bgcolor: "green" }}>
        <ExitToAppIcon fontSize="large" sx={{ color: "white" }} />
      </IconButton>
    </div>
  )
}
