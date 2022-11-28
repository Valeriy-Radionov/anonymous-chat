import React from "react"
import TextField from "@mui/material/TextField"
import { FieldInputProps } from "formik"
type ThemeMessagePropsType = {
  getFieldProps: FieldInputProps<any>
}
export const ThemeMessage: React.FC<ThemeMessagePropsType> = ({ getFieldProps }) => {
  return (
    <TextField
      {...getFieldProps}
      label="Theme"
      variant="outlined"
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
