import { createTheme } from "@mui/system"

export const loginStyle = createTheme({
  palette: {
    background: {
      error: "#d91010",
    },
    text: {
      primary: "white",
      secondary: "#46505A",
    },
    action: {
      active: "#001E3C",
    },
    success: {
      dark: "#009688",
    },
  },
})
