import { FormikType } from "../../features/ui/components/auth/Login"

const errorRequired = "Required field"
export const validatorRequiredField = (values: FormikType, error: FormikType) => {
  if (values.name === "") {
    error.name = errorRequired
  }
  return error
}
