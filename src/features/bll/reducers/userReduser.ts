import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { usersApi, UserType } from "../../../api/usersApi"
import { handleServerNetworkError } from "../../../utils/errors/axios-error/axiosErrorUtils"
import { setAppStatusAC } from "./appReducer"

const initialState: UserType[] = []

const slice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    getUsers(state, action: PayloadAction<{ users: UserType[] }>) {
      state = action.payload.users
    },
  },
})

export const userReducer = slice.reducer
export const setUsers = slice.actions.getUsers

export const getUsersTC = createAsyncThunk("users/getUsers", async (token: string | null, thunkApi) => {
  try {
    if (token) {
      const response = await usersApi.getUsers()
      const users = response.data.data
      if (users) {
        thunkApi.dispatch(setUsers({ users: users }))
        thunkApi.dispatch(setAppStatusAC({ status: "idle" }))
      }
    }
  } catch (e) {
    handleServerNetworkError(e, thunkApi.dispatch)
  }
})
