import * as _ from "./defaultStyles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  html: {
    fontSize: 12,
    fontFamily: "Titillium Web, sans-serif",
    color: _.$gray4,
    fontWeight: "normal",
    textTransform: "none"
  },

  headline: {
    color: _.$brandGreen
  },

  /* ,Major Third Ratio: https://type-scale.com/ */
  h1: {
    fontSize: 39.06
  },
  h2: {
    fontSize: 31.25
  },
  h3: {
    fontSize: 25.01
  },
  h4: {
    fontSize: 20
  },
  h5: {
    fontSize: 16
  },
  h6: {
    fontSize: 12.8
  },

  img: {
    display: "flex",
    maxWidth: "100%",
    height: "auto",
    // verticalAlign: "middle",
    interpolationMode: "bicubic",
    border: 0
  },

  strong: {
    fontWeight: 700
  },

  ellipsis: {
    maxWidth: "calc(100% - 100px)",
    display: "inline-flex"
    // whiteSpace: "nowrap",
  },

  ellipsis_span: {
    overflow: "hidden"
    // textOverflow: "ellipsis",
  },

  a: {
    a_color: _.$brandBlue
  },

  "a:focus": {
    outline: "thin dotted",
    textDecoration: "none"
  },

  p: {
    marginBottom: 16
  },

  textarea: {
    border: "none"
  },

  textList: {
    margin: "0.5em 0"
  },

  textList_li: {
    marginLeft: 32
  },

  /* Using "i" element for FontAwesome icons. */
  i: {
    position: "relative"
  },

  "i::before": {
    content: "",
    fontFamily: "FontAwesome, sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
    position: "relative",
    top: 0,
    left: 0,
    // textDecoration: "inherit",
    color: "currentColor" // Use the color from the parent "i" element.
  },

  /* Text Leader/Heading */
  leader: {
    display: "block",
    fontSize: 12.8,
    lineHeight: 16,
    fontWeight: "bold"
  }
});
