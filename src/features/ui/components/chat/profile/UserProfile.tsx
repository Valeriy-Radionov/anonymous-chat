import { ExpandLess } from "@mui/icons-material"
import ExpandMore from "@mui/icons-material/ExpandMore"
import MessageIcon from "@mui/icons-material/Message"
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong"
import { TableContainer } from "@mui/material"
import Collapse from "@mui/material/Collapse"
import Divider from "@mui/material/Divider"
import List from "@mui/material/List"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import React, { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../../../utils/hooks/appHooks"
import { getMessagesTC } from "../../../../bll/reducers/messageReducer"
import { HeaderMessage } from "./header-message/HeaderMessage"

export const UserProfile = () => {
  const [open, setOpen] = React.useState(false)
  const dispatch = useAppDispatch()
  const messages = useAppSelector((state) => state.messages.messages)
  const token = localStorage.getItem("token")
  const handleClick = () => {
    setOpen(!open)
  }
  useEffect(() => {
    const timerId = setInterval(() => {
      if (token) {
        dispatch(getMessagesTC(token))
      }
      if (!token) {
        clearInterval(timerId)
      }
    }, 3000)
  }, [token])
  return messages ? (
    <TableContainer
      style={{ width: "50%", height: "95%", background: "background.paper", color: "white", border: "2px solid black", borderRadius: "5px", margin: "20px 0 0 5px", padding: "0 0 0 5px" }}
    >
      <h1 style={{ textAlign: "center" }}>MESSAGES</h1>
      {messages.map((message, index) => {
        return (
          <List key={`destination${message.senderId}${index}`}>
            <HeaderMessage sender={message.sender} date={message.date} />
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <ReceiptLongIcon color="info" />
              </ListItemIcon>
              <ListItemText primary={`Theme: ${message.themeMessage}`} />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <MessageIcon color="secondary" />
                  </ListItemIcon>
                  <ListItemText primary={`${message.textMessage}`} />
                </ListItemButton>
              </List>
            </Collapse>
            <Divider variant="inset" component="li" />
          </List>
        )
      })}
    </TableContainer>
  ) : (
    <div style={{ width: "50%", height: "100%", background: "background.paper", padding: "20px 0 20px 20px", color: "white" }}>
      <h1>No messages</h1>
    </div>
  )
}
