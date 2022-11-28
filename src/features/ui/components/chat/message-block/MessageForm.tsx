import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import { Button, FormControl, FormGroup, ListItemButton, ListItemIcon, ListItemText, TextField } from "@mui/material"
import TextareaAutosize from "@mui/material/TextareaAutosize"
import { Container } from "@mui/system"
import { useFormik } from "formik"
import { useState } from "react"
import { useAppDispatch } from "../../../../../utils/hooks/appHooks"
import { validatorRequiredField } from "../../../../../utils/validators/authValidators"
import { AuthFormikType } from "../../auth/Login"
import { DropDownList } from "./list/DropDownList"

export const MessageForm = () => {
  const dispatch = useAppDispatch()
  const [open, setOpen] = useState<boolean>(false)
  const [destination, setDestination] = useState<string>("")
  const handleClick = () => {
    setOpen(!open)
  }
  const closeListHandler = (value: boolean) => {
    setOpen(value)
  }
  const setDestinationValue = (value: string) => {
    setDestination(value)
  }

  const formik = useFormik({
    initialValues: {
      destination: "",
      theme: "",
      textMessage: "",
    },
    validate: (values) => {
      //исправить валидацию
      const errors: AuthFormikType = {}
      validatorRequiredField(values, errors)
      return errors
    },
    onSubmit: (values) => {
      formik.resetForm()
    },
  })
  const errorFormikDestination = formik.touched.destination && formik.errors.destination
  const errorFormikTheme = formik.touched.theme && formik.errors.theme
  const errorFormikMessage = formik.touched.textMessage && formik.errors.textMessage
  return (
    <Container sx={{ width: "50%", height: "100vh", padding: "20px 20px 20px 0" }}>
      <form onSubmit={formik.handleSubmit} style={{ textAlign: "center", height: "100vh" }}>
        <FormControl
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <FormGroup sx={{ margin: "20px" }}>
            <h1 style={{ color: "white" }}>Send message</h1>
            <ListItemButton onClick={handleClick} sx={{ border: "1px solid white" }}>
              <ListItemIcon>
                <AccountCircleIcon color="success" />
              </ListItemIcon>
              <ListItemText primary={destination} {...formik.getFieldProps("destination")} sx={{ color: "white" }} />
            </ListItemButton>
            <DropDownList closeListHandler={closeListHandler} setDestination={setDestinationValue} isOpen={open} />
            {errorFormikDestination && <div style={{ color: "red", textAlign: "start" }}>{formik.errors.destination}</div>}
            <TextField
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
              {...formik.getFieldProps("theme")}
            />
            {errorFormikTheme && <div style={{ color: "red", margin: "0 0 10px 0", textAlign: "left" }}>{formik.errors.theme}</div>}
            {/* <ThemeMessage getFieldProps={formik.getFieldProps("theme")} /> */}
            <TextareaAutosize
              aria-placeholder="Your message"
              aria-label="maximum height"
              placeholder="Maximum 4 rows"
              style={{ width: "100%", minHeight: "150px", marginBottom: "20px" }}
              {...formik.getFieldProps("textMessage")}
            />
            {errorFormikMessage && <div style={{ color: "red", textAlign: "start" }}>{formik.errors.textMessage}</div>}

            <Button
              type={"submit"}
              variant={"contained"}
              sx={{
                bgcolor: "rgb(167,115,241)",
                background: "radial-gradient(circle, rgba(167,115,241,0.12788865546218486) 22%, rgba(95,154,23,0.1558998599439776) 31%, rgba(23,143,154,0.5788690476190477) 77%)",
                ":hover": {
                  bgcolor: "#73a1f1",
                },
              }}
            >
              SEND
            </Button>
          </FormGroup>
        </FormControl>
      </form>
    </Container>
  )
}
