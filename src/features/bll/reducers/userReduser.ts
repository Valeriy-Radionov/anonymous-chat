import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { usersApi, UserType } from "../../../api/usersApi"
import { handleServerNetworkError } from "../../../utils/errors/axios-error/axiosErrorUtils"
import { setAppStatusAC } from "./appReducer"
type UserStateType = {
  users: UserType[]
}
const initialState: UserStateType = {
  users: [],
}

const slice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    getUsers(state, action: PayloadAction<{ users: UserType[] }>) {
      state.users = action.payload.users
    },
  },
})

export const userReducer = slice.reducer
export const setUsers = slice.actions.getUsers

export const getUsersTC = createAsyncThunk("users/getUsers", async (token: string | null, thunkApi) => {
  thunkApi.dispatch(setAppStatusAC({ status: "loading" }))
  try {
    if (token) {
      const response = await usersApi.getUsers()
      const users = response.data
      if (users) {
        thunkApi.dispatch(setUsers({ users: users }))
        thunkApi.dispatch(setAppStatusAC({ status: "idle" }))
      }
    }
  } catch (e) {
    thunkApi.dispatch(setAppStatusAC({ status: "failed" }))
    handleServerNetworkError(e, thunkApi.dispatch)
  } finally {
    thunkApi.dispatch(setAppStatusAC({ status: "idle" }))
  }
})
