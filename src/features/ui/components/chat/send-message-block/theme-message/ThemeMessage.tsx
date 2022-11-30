import React, { ChangeEvent, useState } from "react"
import TextField from "@mui/material/TextField"
import { FieldInputProps } from "formik"
import InputAdornment from "@mui/material/InputAdornment"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"

type ThemeMessagePropsType = {
  getFieldProps: FieldInputProps<any>
}
export const ThemeMessage: React.FC<ThemeMessagePropsType> = ({ getFieldProps }) => {
  const [value, setValue] = useState<string>("")
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  return (
    <TextField
      {...getFieldProps}
      label="Theme"
      variant="outlined"
      name="themeMessage"
      value={getFieldProps.value}
      margin="normal"
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
    />
  )
}
