import CircularProgress from "@mui/material/CircularProgress"
import { useEffect } from "react"
import { ErrorSnackbar } from "../common/components/error/ErrorSnackBar"
import { LoadingLiner } from "../common/components/error/liner-progress/LoadingLiner"
import { Routs } from "../common/routes/Routs"
import { isInitializedTC } from "../features/bll/reducers/appReducer"
import { useAppDispatch, useAppSelector } from "../utils/hooks/appHooks"
import "./App.css"

function App() {
  const token = localStorage.getItem("token")
  const isInitialized = useAppSelector((state) => state.app.isInitialized)
  const loading = useAppSelector((state) => state.app.status)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(isInitializedTC(token))
  }, [dispatch, isInitialized])

  if (!isInitialized) {
    return (
      <div style={{ position: "fixed", top: "30%", textAlign: "center", width: "100%" }}>
        <CircularProgress />
      </div>
    )
  }
  return (
    <div className="App">
      <ErrorSnackbar />
      {loading === "loading" && <LoadingLiner />}
      <Routs />
    </div>
  )
}

export default App
