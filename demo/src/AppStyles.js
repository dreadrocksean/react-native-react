const $padding = 40;
const $white = "#fff";

export default {
  App: {
    justifyContent: "flex-start",
    // justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#282c34",
    minHeight: `calc(100vh - ${$padding * 2}px)`,
    padding: $padding
  },
  AppLogo: {
    animation: "App-logo-spin infinite 20s linear",
    width: 240,
    height: 240,
    marginVertical: 20
  },
  AppImage: {
    animation: "App-image-spin infinite 350s linear",
    width: 500,
    height: 500,
    marginVertical: 0
  },
  AppHeader: {
    marginBottom: 20,
    alignItems: "center"
  },
  headerText: {
    fontSize: "calc(10px + 2vmin)",
    color: "white"
  },
  AppBody: {
    justifyContent: "space-between",
    alignItems: "center"
  },
  centered: {
    alignItems: "center"
  },
  AppLink: {
    color: "#61dafb"
  },
  FormElement: {
    fontSize: 16,
    textAlign: "left",
    borderWidth: 1,
    borderType: "solid",
    borderColor: "#efefef",
    padding: 8,
    width: "100%",
    borderRadius: 10,
    marginVertical: 10
  },
  checkbox: {
    width: 20,
    height: 20
  },
  formElementLayout: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  label: { color: "orange", fontSize: 18, marginRight: 10 },
  TextInput: {
    color: "#4d4d4d",
    fontSize: 16,
    height: 40,
    minHeight: 40,
    width: "80vw",
    maxWidth: 300,
    minWidth: 300,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#d4d4d4",
    marginVertical: 20
  },
  CheckBox: {
    height: 40
  },
  text: {
    color: "yellow",
    margin: 20
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 0
  },
  button: {
    backgroundColor: "transparent",
    borderRadius: 3,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "palevioletred",
    color: "palevioletred",
    paddingVertical: 4,
    paddingHorizontal: 16
  },
  touchView: {
    width: "50%",
    margin: 20,
    padding: 5,
    backgroundColor: "#993333"
  },
  shadowView: {
    width: "50%",
    margin: 20,
    padding: 5,
    backgroundColor: "#339933",
    shadowColor: "#fff",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 3
  },
  testView: {
    width: "50%",
    minHeight: 100,
    margin: 20,
    padding: 20,
    backgroundColor: "grey",
    borderLeftStyle: "solid",
    borderLeftWidth: 1,
    borderLeftColor: "white",
    borderRightStyle: "dashed",
    borderRightWidth: 1,
    borderRightColor: "white"
  },
  list: {
    margin: 20,
    padding: 20,
    borderColor: "#4d4d4d",
    borderWidth: 1,
    borderStyle: "solid"
    // maxHeight: 400
  },
  listItem: {
    margin: 20,
    padding: 20,
    backgroundColor: "#9999ff"
  },
  "@keyframes App-logo-spin": {
    from: {
      transform: "rotate(225deg)"
    },
    to: {
      transform: "rotate(585deg)"
    }
  },
  "@keyframes App-image-spin": {
    from: {
      transform: "rotate(0deg)"
    },
    to: {
      transform: "rotate(-360deg)"
    }
  }
};
