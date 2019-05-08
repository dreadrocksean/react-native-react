import * as _ from "./defaultStyles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  app: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "100vh"
  },

  /* Wrapper class for content area on a textBased page */
  textContent: {
    maxWidth: 752,
    margin: "0 auto",
    padding: 16
  },

  /* Single card page */
  contentCard: {
    width: "400",
    maxWidth: "100%",
    margin: "5em auto",
    padding: 32,
    backgroundColor: _.$white
  },

  "contentCard_h3:firstChild": {
    marginTop: 0
  }
});
