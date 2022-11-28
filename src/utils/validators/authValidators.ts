import { AuthFormikType } from "../../features/ui/components/auth/Login"

const errorRequired = "Required field"
export const validatorRequiredField = (values: AuthFormikType, error: AuthFormikType) => {
  if (values.name === "") {
    error.name = errorRequired
  }
  if (values.destination === "") {
    error.destination = errorRequired
  }
  if (values.theme === "") {
    error.destination = errorRequired
  }
  if (values.textMessage === "") {
    error.destination = errorRequired
  }
  return error
}
