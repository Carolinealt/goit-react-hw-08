import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {},
      styleOverrides: {
        root: {
          backgroundColor: "#008d17;",
        },
      },
    },
  },
});
