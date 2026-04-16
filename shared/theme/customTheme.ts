import { grey } from "@mui/material/colors";
import { createTheme, responsiveFontSizes, Theme } from "@mui/material/styles";

let customTheme = createTheme({
  typography: {
    fontFamily: "'JetBrains Mono', monospace",
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#D670DA",
    },
    secondary: {
      main: grey[900],
    },
  },
});

customTheme = responsiveFontSizes(customTheme);

export default customTheme as Theme;
