import { ExpandLess } from "@mui/icons-material"
import ExpandMore from "@mui/icons-material/ExpandMore"
import MessageIcon from "@mui/icons-material/Message"
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong"
import Collapse from "@mui/material/Collapse"
import Divider from "@mui/material/Divider"
import List from "@mui/material/List"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import React from "react"
import { HeaderMessage } from "./header-message/HeaderMessage"
// background: #108dc7;  /* fallback for old browsers */
// background: -webkit-linear-gradient(to right, #ef8e38, #108dc7);  /* Chrome 10-25, Safari 5.1-6 */
// background: linear-gradient(to right, #ef8e38, #108dc7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

export const UserProfile = () => {
  const [open, setOpen] = React.useState(true)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <List sx={{ width: "50%", height: "100%", background: "background.paper", padding: "20px 0 20px 20px", color: "white" }}>
      <HeaderMessage />
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <ReceiptLongIcon color="info" />
        </ListItemIcon>
        <ListItemText primary="Theme message" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <MessageIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary="Hello!!! Im Nick! How are you? Thede efnred." />
          </ListItemButton>
        </List>
      </Collapse>
      <Divider variant="inset" component="li" />
    </List>
  )
}
