import React from "react";
import { render } from "react-dom";

import App from "./App";

const body = document.querySelector("body");
const root = document.querySelector("#demo");
body.style.overflow = "hidden";
// root.style.overflow = "hidden";

render(<App />, root);
