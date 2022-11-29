import { AuthFormikType } from "../../features/ui/components/auth/Login"
import { MessageFormikType } from "../../features/ui/components/chat/send-message-block/MessageForm"

const errorRequired = "Required field"
export const validatorRequiredField = (values: AuthFormikType, error: AuthFormikType) => {
  if (values.name === "") {
    error.name = errorRequired
  }

  return error
}
export const messageValidator = (values: MessageFormikType, error: MessageFormikType) => {
  if (!values.destination) {
    error.destination = errorRequired
  }
  if (!values.theme) {
    error.theme = errorRequired
  }
  if (!values.textMessage) {
    error.textMessage = errorRequired
  }
  return error
}
