import { Button, FormControl, FormGroup } from "@mui/material"
import TextareaAutosize from "@mui/material/TextareaAutosize"
import { Container } from "@mui/system"
import { FormikErrors, useFormik } from "formik"
import { useAppDispatch, useAppSelector } from "../../../../../utils/hooks/appHooks"
import { messageValidator } from "../../../../../utils/validators/authValidators"
import { sendMessageTC } from "../../../../bll/reducers/messageReducer"
import { SearchDestination } from "./drop-list/SearchDestination"
import { Logout } from "./logout/Logout"
import { ThemeMessage } from "./theme-message/ThemeMessage"

export type MessageFormikType = {
  destination?: string
  themeMessage?: string
  textMessage?: string
}
export const MessageForm = () => {
  const dispatch = useAppDispatch()
  const token = localStorage.getItem("token")

  const formik = useFormik({
    initialValues: {
      destination: "",
      themeMessage: "",
      textMessage: "",
    },
    validate: (values: MessageFormikType) => {
      const errors: FormikErrors<MessageFormikType> = {}
      messageValidator(values, errors)
      return errors
    },
    onSubmit: (values) => {
      if (token) {
        dispatch(
          sendMessageTC({
            destination: values.destination,
            themeMessage: values.themeMessage,
            textMessage: values.textMessage,
            senderId: token,
          })
        )
      }
      formik.resetForm()
    },
  })
  const errorFormikDestination = formik.touched.destination && formik.errors.destination
  const errorFormikTheme = formik.touched.themeMessage && formik.errors.themeMessage
  const errorFormikMessage = formik.touched.textMessage && formik.errors.textMessage

  return (
    <Container sx={{ width: "50%", height: "100vh", padding: "20px 20px 20px 0" }}>
      <Logout />
      <form onSubmit={formik.handleSubmit} style={{ textAlign: "center", height: "100vh" }}>
        <FormControl sx={{ width: "100%", height: "100%" }}>
          <FormGroup sx={{ margin: "20px" }}>
            <h1 style={{ color: "white" }}>Send message</h1>
            <SearchDestination getFieldProps={formik.getFieldProps("destination")} />
            {errorFormikDestination && <div style={{ color: "red", textAlign: "start" }}>{formik.errors.destination}</div>}
            <ThemeMessage getFieldProps={formik.getFieldProps("theme")} />
            {errorFormikTheme && <div style={{ color: "red", margin: "0 0 10px 0", textAlign: "left" }}>{formik.errors.themeMessage}</div>}
            <TextareaAutosize
              aria-placeholder="Your message"
              aria-label="maximum height"
              placeholder="Entered your message"
              style={{ width: "100%", minHeight: "150px", background: "#343a40", border: "1px solid white", borderRadius: "5px" }}
              {...formik.getFieldProps("textMessage")}
            />
            {errorFormikMessage && <div style={{ color: "red", textAlign: "start" }}>{formik.errors.textMessage}</div>}
            <Button
              type={"submit"}
              variant={"contained"}
              sx={{
                bgcolor: "#646cc7;",
                marginTop: "30px",

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
