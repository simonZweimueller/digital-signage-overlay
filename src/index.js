import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import UserInput from "./Components/UserInput.jsx";
import CanvasComponent from "./Components/CanvasComponent.jsx";
import Question from "./Components/Question.jsx";
import Overlay from "./Components/Overlay.jsx";

ReactDOM.render(<Overlay />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
