import { Container } from "@mui/material"
import { UserProfile } from "./profile/UserProfile"
import { MessageForm } from "./send-message-block/MessageForm"

export const ChatBlock = () => {
  return (
    <Container style={{ display: "flex", padding: "0", height: "100vh" }}>
      <UserProfile />
      <MessageForm />
    </Container>
  )
}
