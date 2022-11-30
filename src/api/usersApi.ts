import { AxiosResponse } from "axios"
import { baseInstance } from "./axiosInstance"

export const usersApi = {
  getUsers() {
    return baseInstance.get<UserType[], AxiosResponse<UserType[]>>("users/all")
  },
}
export type UserType = {
  id: string
  userName: string
  token: string
}
