import { AxiosResponse } from "axios"
import { baseInstance } from "./axiosInstance"

export type AuthDataType = {
  name: string
}

export type AuthResponseType = {
  id: string
  userName: string
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
    return baseInstance.get<{ token: string }, AxiosResponse<MeResponseType>>(`/auth/me/${token}`)
  },
  logout(token: string) {
    return baseInstance.post<AxiosResponse<AuthResponseType>>(`/auth/logout/${token}`)
  },
}
