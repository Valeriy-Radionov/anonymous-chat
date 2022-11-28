import React from "react"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import ListSubheader from "@mui/material/ListSubheader"
import Collapse from "@mui/material/Collapse"

type DropDownListPropsType = {
  setDestination: (value: string) => void
  closeListHandler: (value: boolean) => void
  isOpen: boolean
}
export const DropDownList: React.FC<DropDownListPropsType> = ({ setDestination, closeListHandler, isOpen }) => {
  return (
    <Collapse in={isOpen} timeout="auto" unmountOnExit>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "black",
          position: "relative",
          overflow: "auto",
          color: "white",
          maxHeight: 300,
          "& ul": { padding: 0 },
        }}
        subheader={<li />}
      >
        {["0", "1", "2"].map((item, index) => (
          <ListItem
            key={`${index}${item}`}
            onClick={() => {
              setDestination(item)
              closeListHandler(false)
            }}
          >
            <ListItemText primary={`Item ${item}`} />
          </ListItem>
        ))}
      </List>
    </Collapse>
  )
}
