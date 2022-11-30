import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { authApi, AuthDataType, AuthResponseType } from "../../../api/authApi"
import { handleServerNetworkError } from "../../../utils/errors/axios-error/axiosErrorUtils"
import { setAppStatusAC } from "./appReducer"
import { getMessagesTC } from "./messageReducer"

type AuthStateType = {
  isLoggedIn: boolean
  currentUser: AuthResponseType
}

const initialState: AuthStateType = {
  isLoggedIn: false,
  currentUser: { id: "", userName: "", token: "" },
}
const slice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setIsLoggedIn(state, action: PayloadAction<{ isLoggedIn: boolean }>) {
      state.isLoggedIn = action.payload.isLoggedIn
    },
    setCurrentUser(state, action: PayloadAction<{ currentUser: AuthResponseType }>) {
      state.currentUser = action.payload.currentUser
    },
  },
})
export const authReducer = slice.reducer
export const setIsLoggedIn = slice.actions.setIsLoggedIn
export const setCurrentUser = slice.actions.setCurrentUser

export const authTC = createAsyncThunk("auth/setIsLoggedIn", async (payload: AuthDataType, thunkApi) => {
  thunkApi.dispatch(setAppStatusAC({ status: "loading" }))
  try {
    const response = await authApi.auth(payload)
    const currentUser = response.data
    if (currentUser) {
      localStorage.setItem("token", response.data.token)
      thunkApi.dispatch(setCurrentUser({ currentUser }))
      thunkApi.dispatch(getMessagesTC(currentUser.id))

      thunkApi.dispatch(setAppStatusAC({ status: "idle" }))
    }
    thunkApi.dispatch(setIsLoggedIn({ isLoggedIn: true }))
  } catch (e) {
    thunkApi.dispatch(setAppStatusAC({ status: "failed" }))
    handleServerNetworkError(e, thunkApi.dispatch)
  }
})

export const logoutTC = createAsyncThunk("auth/logout", async (payload: { token: string | null }, thunkApi) => {
  thunkApi.dispatch(setAppStatusAC({ status: "loading" }))
  try {
    thunkApi.dispatch(setIsLoggedIn({ isLoggedIn: false }))
    payload.token && (await authApi.logout(payload.token))
    localStorage.removeItem("token")
  } catch (e) {
    handleServerNetworkError(e, thunkApi.dispatch)
  } finally {
    thunkApi.dispatch(setAppStatusAC({ status: "idle" }))
  }
})
