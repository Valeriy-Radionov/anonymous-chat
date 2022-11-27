import { AxiosResponse } from "axios"
import { baseInstance } from "./axiosInstance"

export type AuthDataType = {
  name: string
}

export type AuthResponseType = {
  msg: string
  status: boolean
}

export const authApi = {
  auth(authData: AuthDataType) {
    return baseInstance.post<AuthDataType, AxiosResponse<AuthResponseType>>("/login", authData)
  },
}
