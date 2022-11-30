import AccessTimeIcon from "@mui/icons-material/AccessTime"
import { Container } from "@mui/material"
import Avatar from "@mui/material/Avatar"
import ListItem from "@mui/material/ListItem"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import ListItemText from "@mui/material/ListItemText"
import Typography from "@mui/material/Typography"
type HeaderMessagePropsType = {
  sender: string | undefined
  date: string | undefined
}
export const HeaderMessage: React.FC<HeaderMessagePropsType> = ({ sender, date }) => {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </ListItemAvatar>
      <Container>
        <ListItemText primary={`from: ${sender}`} />
        <div style={{ display: "flex", alignItems: "center", padding: "0" }}>
          <AccessTimeIcon fontSize="small" color="success" />
          <Typography sx={{ display: "inline", textAlign: "center", color: "orange" }} component="span" variant="body2" color="text.primary">
            {`Date: ${date}`}
          </Typography>
        </div>
      </Container>
    </ListItem>
  )
}
