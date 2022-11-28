import { Container } from "@mui/material"
import ListItemText from "@mui/material/ListItemText"
import Typography from "@mui/material/Typography"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import Avatar from "@mui/material/Avatar"
import ListItem from "@mui/material/ListItem"

export const HeaderMessage = () => {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </ListItemAvatar>
      <Container>
        <ListItemText primary="from: Nick Wofkader" />
        <div style={{ display: "flex", alignItems: "center", padding: "0" }}>
          <AccessTimeIcon fontSize="small" color="success" />
          <Typography sx={{ display: "inline", textAlign: "center", color: "orange" }} component="span" variant="body2" color="text.primary">
            {`Date: 12.07.22 14.45`}
          </Typography>
        </div>
      </Container>
    </ListItem>
  )
}