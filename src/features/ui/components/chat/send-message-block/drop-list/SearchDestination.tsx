import { InputAdornment, ListItem, ListItemIcon, ListItemText } from "@mui/material"
import TextField from "@mui/material/TextField"
import { FieldInputProps } from "formik"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../../../../utils/hooks/appHooks"

type DropListPropsType = {
  getFieldProps?: FieldInputProps<any>
  setDestination: (value: string) => void
  destination: string
}
export const SearchDestination: React.FC<DropListPropsType> = ({ getFieldProps, setDestination, destination }) => {
  const users = useAppSelector((state) => state.users)
  const stateUserName = ["Ronan", "Valred", "Pelfo", "Hrenf", "< Jeck", "Dick"]
  const [user, setUser] = useState("")
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value)
  }
  return (
    <TextField
      id="outlined-select-currency-native"
      name="destination"
      value={user}
      label="Destination"
      variant="outlined"
      margin="normal"
      select
      onChange={onChangeHandler}
      SelectProps={{
        native: true,
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <AccountCircleIcon color="success" />
          </InputAdornment>
        ),
      }}
      {...getFieldProps}
      sx={{
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "white",
          },
          "&:hover fieldset": {
            borderColor: "green",
          },
          "&.Mui-focused fieldset": {
            borderColor: "white",
          },
        },
      }}
    >
      {users.map((el, index) => (
        <option key={`${el}${index}`} value={el.userName}>
          {el.userName}
        </option>
      ))}
    </TextField>
  )
}
