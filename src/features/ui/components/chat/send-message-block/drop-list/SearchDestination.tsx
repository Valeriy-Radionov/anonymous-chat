import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import { InputAdornment } from "@mui/material"
import TextField from "@mui/material/TextField"
import { FieldInputProps } from "formik"
import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../../../../utils/hooks/appHooks"
import { getUsersTC } from "../../../../../bll/reducers/userReduser"

type DropListPropsType = {
  getFieldProps?: FieldInputProps<any>
}
export const SearchDestination: React.FC<DropListPropsType> = ({ getFieldProps, ...rest }) => {
  const users = useAppSelector((state) => state.users.users)
  const dispatch = useAppDispatch()
  const token = localStorage.getItem("token")
  const [user, setUser] = useState("")
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value)
  }
  useEffect(() => {
    dispatch(getUsersTC(token))
  }, [])
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
      {...rest}
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
      {users.map((user) => (
        <option key={`${user.userName}${user.id}`} value={user.userName}>
          {user.userName}
        </option>
      ))}
    </TextField>
  )
}
