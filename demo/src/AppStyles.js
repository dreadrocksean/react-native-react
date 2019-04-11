const $padding = 40;
const $white = "#fff";

export default {
  App: {
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#282c34",
    color: $white,
    minHeight: `calc(100vh - ${$padding * 2}px)`,
    padding: $padding,
    textAlign: "center"
  },
  AppLogo: {
    animation: "App-logo-spin infinite 20s linear",
    height: 240,
    marginVertical: 20
  },
  AppHeader: {
    fontSize: "calc(10px + 2vmin)",
    color: "white"
  },
  AppBody: {
    justifyContent: "space-between",
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
    // shadowColor: "#fe839a",
    shadowOffset: { width: 0, height: 0 },
    // shadowOpacity: 0.5,
    shadowRadius: 0,
    elevation: 4
  },
  button: {
    background: "transparent",
    borderRadius: 3,
    border: "2px solid palevioletred",
    color: "palevioletred",
    padding: "0.25em 1em"
  },
  testView: {
    width: "50%",
    height: 100,
    margin: 20,
    padding: 20,
    background: "grey",
    borderLeft: "dashed 1px white",
    borderRight: "dashed 1px white"
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
