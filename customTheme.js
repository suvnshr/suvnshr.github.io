import { grey, lime } from "@material-ui/core/colors";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let customTheme = createMuiTheme({
  typography: {
    fontFamily: "'DM Sans', 'sans-serif'",
  },
  palette: {
    type: "dark",
    primary: {
      main: lime[500],
    },
    secondary: {
      main: grey[800],
    },
  },
});

customTheme = responsiveFontSizes(customTheme);

export default customTheme;
