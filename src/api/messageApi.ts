import { AxiosResponse } from "axios"
import { baseInstance } from "./axiosInstance"

export const usersApi = {
  getAllMessages(id: string) {
    return baseInstance.get<AxiosResponse<UsersMessageType>>(`/users/all/${id}`)
  },
}
export type UsersMessageType = {
  id: string
  textMessage: string
  themeMessage: string
  dateOfSend: Date
}
