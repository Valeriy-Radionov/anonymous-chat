import TextField from "@mui/material/TextField"
import { FieldInputProps } from "formik"
import React from "react"

type ThemeMessagePropsType = {
  getFieldProps: FieldInputProps<any>
}
export const ThemeMessage: React.FC<ThemeMessagePropsType> = ({ getFieldProps }) => {
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
