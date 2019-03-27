import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactDOM from "react-dom";
import { Layer, Rect, Stage, Group } from "react-konva";
import MyRect from "./components/MyRect";

class App extends Component {
  render() {
    return (
      <Stage width={1920} height={1080}>
        <Layer>
          <MyRect />
        </Layer>
      </Stage>
    );
  }
}

export default App;
