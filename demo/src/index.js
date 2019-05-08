import React from "react";
import { render } from "react-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import App from "./App";
import * as _ from "../styles/defaultStyles";

const root = document.querySelector("#demo");

const theme = createMuiTheme({
  palette: {
    primary: { main: _.$brandBlue },
    secondary: { main: _.$brandGreen },
    background: {
      paper: "#fff",
      default: "transparent"
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)"
    }
  },
  typography: {
    useNextVariants: true,
    htmlFontSize: 16
  }
});

render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  root
);
