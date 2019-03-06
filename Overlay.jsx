import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Layer, Rect, Stage, Group } from "react-konva";

class Overlay extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateCanvas = this.updateCanvas.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    //alert(this.state.value);
    event.preventDefault();
    this.updateCanvas(this.state.value);
  }

  componentDidMount() {
    // this.updateCanvas();
  }
  updateCanvas(test) {
    const ctx = this.refs.canvas.getContext("2d");
    ctx.clearRect(0, 0, 1920, 1080);
    //ctx.fillText("Hello World", 20, 20);

    ctx.fillText(test, 40, 40);
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <label>
            UserInput:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <canvas ref="canvas" width={1920} height={1080} />
      </React.Fragment>
    );
  }
}

export default Overlay;
