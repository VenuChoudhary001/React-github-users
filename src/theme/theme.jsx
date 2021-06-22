import { createMuiTheme } from "@material-ui/core";

const THEME = createMuiTheme({
  palette: {
    primary: {
      main: "#fff",
    },
  },
  typography: {
    h6: {
      fontFamily: "Raleway",
      fontWeight: 500,
    },
  },
});

export default THEME;
