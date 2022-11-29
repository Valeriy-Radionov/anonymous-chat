import { Button, FormControl, FormGroup } from "@mui/material"
import TextareaAutosize from "@mui/material/TextareaAutosize"
import { Container } from "@mui/system"
import { FormikErrors, useFormik } from "formik"
import { useState } from "react"
import { useAppDispatch } from "../../../../../utils/hooks/appHooks"
import { messageValidator } from "../../../../../utils/validators/authValidators"
import { SearchDestination } from "./drop-list/SearchDestination"
import { Logout } from "./logout/Logout"
import { ThemeMessage } from "./theme-message/ThemeMessage"
export type MessageFormikType = {
  destination?: string
  theme?: string
  textMessage?: string
}
export const MessageForm = () => {
  const dispatch = useAppDispatch()
  const [destination, setDestination] = useState<string>("")

  const setDestinationValue = (value: string) => {
    setDestination(value)
  }
  const formik = useFormik({
    initialValues: {
      destination: "",
      theme: "",
      textMessage: "",
    },
    validate: (values: MessageFormikType) => {
      const errors: FormikErrors<MessageFormikType> = {}
      messageValidator(values, errors)
      return errors
    },
    onSubmit: (values) => {
      formik.resetForm()
    },
  })
  const errorFormikDestination = formik.touched.destination && formik.errors.destination
  const errorFormikTheme = formik.touched.theme && formik.errors.theme
  const errorFormikMessage = formik.touched.textMessage && formik.errors.textMessage
  console.log(errorFormikDestination?.toString(), errorFormikTheme?.toString(), errorFormikMessage?.toString())
  return (
    <Container sx={{ width: "50%", height: "100vh", padding: "20px 20px 20px 0" }}>
      <Logout />
      <form onSubmit={formik.handleSubmit} style={{ textAlign: "center", height: "100vh" }}>
        <FormControl
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <FormGroup sx={{ margin: "20px" }}>
            <h1 style={{ color: "white" }}>Send message</h1>
            <SearchDestination getFieldProps={formik.getFieldProps("destination")} />
            {errorFormikDestination && <div style={{ color: "red", textAlign: "start" }}>{formik.errors.destination}</div>}
            <ThemeMessage getFieldProps={formik.getFieldProps("theme")} />
            {errorFormikTheme && <div style={{ color: "red", margin: "0 0 10px 0", textAlign: "left" }}>{formik.errors.theme}</div>}
            <TextareaAutosize
              aria-placeholder="Your message"
              aria-label="maximum height"
              placeholder="Maximum 4 rows"
              style={{ width: "100%", minHeight: "150px" }}
              {...formik.getFieldProps("textMessage")}
            />
            {errorFormikMessage && <div style={{ color: "red", textAlign: "start" }}>{formik.errors.textMessage}</div>}
            <Button
              type={"submit"}
              variant={"contained"}
              sx={{
                bgcolor: "rgb(167,115,241)",
                marginTop: "30px",
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
