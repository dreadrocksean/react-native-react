const $padding = 40;
const $white = "#fff";

export default {
  App: {
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#282c34",
    minHeight: `calc(100vh - ${$padding * 2}px)`,
    padding: $padding
  },
  AppLogo: {
    animation: "App-logo-spin infinite 20s linear",
    height: 240,
    marginVertical: 20
  },
  AppHeader: {
    marginBottom: 20
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
  text: {
    color: "yellow",
    margin: 20
  },
  shadow: {
    shadowColor: "#000",
    // shadowColor: "#fe839a",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 0
  },
  button: {
    backgroundColor: "transparent",
    borderRadius: 3,
    border: "2px solid palevioletred",
    color: "palevioletred",
    padding: "0.25em 1em"
  },
  touchView: {
    width: "50%",
    margin: 20,
    padding: 5,
    backgroundColor: "#993333"
  },
  testView: {
    width: "50%",
    height: 100,
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
  }
};
