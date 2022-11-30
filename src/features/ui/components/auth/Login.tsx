import { Button, FormControl, FormGroup, Grid, TextField, Typography } from "@mui/material"
import { useFormik } from "formik"
import { Navigate } from "react-router-dom"
import { AuthDataType } from "../../../../api/authApi"
import { RouterPath } from "../../../../common/routes/Routs"
import { useAppDispatch, useAppSelector } from "../../../../utils/hooks/appHooks"
import { validatorRequiredField } from "../../../../utils/validators/authValidators"
import { authTC } from "../../../bll/reducers/authReducer"

export type AuthFormikType = {
  name?: string
}

export const Login = () => {
  const dispatch = useAppDispatch()
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn)

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validate: (values) => {
      const errors: AuthFormikType = {}
      validatorRequiredField(values, errors)
      return errors
    },
    onSubmit: (values) => {
      const value: AuthDataType = {
        name: values.name,
      }
      dispatch(authTC(value))
      formik.resetForm()
    },
  })
  const errorFormik = formik.touched.name && formik.errors.name
  if (isLoggedIn) {
    return <Navigate key={"usersTable"} to={RouterPath.profile} />
  }
  return (
    <Grid container justifyContent={"center"} alignItems={"center"} sx={{ height: "40vh" }}>
      <Grid item justifyContent={"center"} alignItems={"center"}>
        <form onSubmit={formik.handleSubmit} style={{ textAlign: "center" }}>
          <FormControl
            sx={{
              width: "350px",
              bgcolor: "rgb(181,154,255)",
              background: "linear-gradient(0deg, rgba(181,154,255,1) 17%, rgba(121,186,247,0.8) 61%)",
              marginTop: "50px",
              borderRadius: "5px",
            }}
          >
            <FormGroup sx={{ margin: "20px" }}>
              <h2 style={{ color: "white" }}>Enter your name</h2>
              <TextField label="Enter your name" margin="normal" {...formik.getFieldProps("name")} />
              {errorFormik && (
                <Typography variant="subtitle2" gutterBottom sx={{ color: "red", margin: "0 0 10px 0", textAlign: "left" }}>
                  {formik.errors.name}
                </Typography>
              )}
              <Button
                type={"submit"}
                variant={"contained"}
                sx={{
                  bgcolor: "#646cc7",
                  ":hover": {
                    bgcolor: "#73a1f1",
                  },
                }}
              >
                LOGIN
              </Button>
            </FormGroup>
          </FormControl>
        </form>
      </Grid>
    </Grid>
  )
}
