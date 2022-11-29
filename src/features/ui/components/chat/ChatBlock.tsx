import { Container } from "@mui/material"
import { MessageForm } from "./send-message-block/MessageForm"
import { UserProfile } from "./profile/UserProfile"

export const ChatBlock = () => {
  return (
    <Container style={{ display: "flex", padding: "0" }}>
      <UserProfile />
      <MessageForm />
    </Container>
  )
}
