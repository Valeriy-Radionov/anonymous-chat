import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { authApi, AuthResponseType } from "../../../api/authApi"
import { handleServerNetworkError } from "../../../utils/errors/axios-error/axiosErrorUtils"
import { getMessagesTC } from "./messageReducer"
import { getUsersTC } from "./userReduser"

export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed"

export type InitialAppStateType = {
  status: RequestStatusType
  error: string
  isInitialized: boolean
}

const initialState: InitialAppStateType = {
  status: "idle",
  error: "",
  isInitialized: false,
}

const slice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    setAppStatusAC(state, action: PayloadAction<{ status: RequestStatusType }>) {
      state.status = action.payload.status
    },
    setAppErrorAC(state, action: PayloadAction<{ error: string }>) {
      state.error = action.payload.error
    },
    setAppInitializedAC(state, action: PayloadAction<{ isInitialized: boolean }>) {
      state.isInitialized = action.payload.isInitialized
    },
  },
})

export const appReducer = slice.reducer
export const setAppErrorAC = slice.actions.setAppErrorAC
export const setAppInitializedAC = slice.actions.setAppInitializedAC
export const setAppStatusAC = slice.actions.setAppStatusAC

export const isInitializedTC = createAsyncThunk("app/initialized", async (token: string | null, thunkApi) => {
  try {
    if (token) {
      const response = await authApi.me(token)
      if (response.data.isAuth === true) {
        thunkApi.dispatch(setAppInitializedAC({ isInitialized: true }))
        thunkApi.dispatch(getMessagesTC(token))
      }
    }
  } catch (e) {
    thunkApi.dispatch(setAppInitializedAC({ isInitialized: false }))
    handleServerNetworkError(e, thunkApi.dispatch)
  } finally {
    thunkApi.dispatch(setAppInitializedAC({ isInitialized: true }))
  }
})
