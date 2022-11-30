import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { messageApi, UsersMessageType } from "../../../api/messageApi"
import { handleServerNetworkError } from "../../../utils/errors/axios-error/axiosErrorUtils"
import { setAppStatusAC } from "./appReducer"
import { logoutTC } from "./authReducer"
type MessagesStateType = {
  messages: UsersMessageType[]
}
const initialState: MessagesStateType = {
  messages: [],
}

const slice = createSlice({
  name: "messages",
  initialState: initialState,
  reducers: {
    getMessages(state, action: PayloadAction<{ messages: UsersMessageType[] }>) {
      state.messages = action.payload.messages
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logoutTC.fulfilled, (state, action) => {
      state.messages = []
    })
  },
})

export const messageReducer = slice.reducer
export const getMessages = slice.actions.getMessages

export const sendMessageTC = createAsyncThunk("messages/sendMessag", async (message: UsersMessageType, thunkApi) => {
  try {
    thunkApi.dispatch(setAppStatusAC({ status: "loading" }))
    await messageApi.sendMessage(message)
    thunkApi.dispatch(setAppStatusAC({ status: "idle" }))
  } catch (e) {
    thunkApi.dispatch(setAppStatusAC({ status: "failed" }))
    handleServerNetworkError(e, thunkApi.dispatch)
  }
})
export const getMessagesTC = createAsyncThunk("messages/getAllMessages", async (senderId: string, thunkApi) => {
  try {
    const messages = await messageApi.getAllMessages(senderId)
    if (Array.isArray(messages.data)) {
      thunkApi.dispatch(getMessages({ messages: messages.data }))
    }
  } catch (e) {
    handleServerNetworkError(e, thunkApi.dispatch)
  }
})
