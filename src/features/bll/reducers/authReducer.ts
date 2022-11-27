import { createAsyncThunk, createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit"
import { authApi, AuthDataType } from "../../../api/authApi"
import { handleServerNetworkError } from "../../../utils/errors/axios-error/axiosErrorUtils"
import { setAppStatusAC } from "./appReducer"
type AuthStateType = {
  isLoggedIn: boolean
}
const initialState: AuthStateType = {
  isLoggedIn: false,
}
const slice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setIsLoggedIn(state, action: PayloadAction<{ isLoggedIn: boolean }>) {
      state.isLoggedIn = action.payload.isLoggedIn
    },
  },
})
export const authReducer = slice.reducer
const setIsLoggedIn = slice.actions.setIsLoggedIn

export const authTC = createAsyncThunk("auth/setIsLoggedIn", async (payload: AuthDataType, thunkApi) => {
  thunkApi.dispatch(setAppStatusAC({ status: "loading" }))
  try {
    const isLoggedIn = await authApi.auth(payload)
    const status = isLoggedIn.data.status
    if (status === true) {
      thunkApi.dispatch(setAppStatusAC({ status: "idle" }))
    }
    thunkApi.dispatch(setIsLoggedIn({ isLoggedIn: status }))
  } catch (e) {
    handleServerNetworkError(e, thunkApi.dispatch)
  } finally {
    thunkApi.dispatch(setAppStatusAC({ status: "idle" }))
  }
})
