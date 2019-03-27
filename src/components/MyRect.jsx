import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Layer, Rect, Stage, Group } from "react-konva";

class MyRect extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      color: "green",
      text: "Hello there"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      color: "blue"
    });
  }
  render() {
    return (
      <Rect
        x={10}
        y={10}
        width={1920}
        height={1080}
        fill={this.state.color}
        text={this.state.text}
        shadowBlur={10}
        onClick={this.handleClick}
      />
    );
  }
}

export default MyRect;
