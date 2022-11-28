import { AxiosResponse } from "axios"
import { baseInstance } from "./axiosInstance"

export type AuthDataType = {
  name: string
}

export type AuthResponseType = {
  msg: string
  status: boolean
  token: string
}
export type MeResponseType = {
  msg: string
  isAuth: boolean
}

export const authApi = {
  auth(authData: AuthDataType) {
    return baseInstance.post<AuthDataType, AxiosResponse<AuthResponseType>>("/auth", authData)
  },
  me(token: string) {
    return baseInstance.get<{ token: string }, AxiosResponse<MeResponseType>>(`/me/${token}`)
  },
}
