import { AxiosResponse } from "axios"
import { baseInstance } from "./axiosInstance"

export const messageApi = {
  getAllMessages(senderId: string) {
    return baseInstance.get<UsersMessageType[], AxiosResponse<UsersMessageType[]>>(`/messages/all/${senderId}`)
  },
  sendMessage(message: UsersMessageType) {
    return baseInstance.post<UsersMessageType, AxiosResponse<MessagesResponseType>>("/messages/message", message)
  },
}
export type UsersMessageType = {
  destination: string
  textMessage: string
  themeMessage: string
  senderId: string
  sender: string
  date?: string
}
export type MessagesResponseType = {
  msg: string
  statusCode: number
}
