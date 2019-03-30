import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Layer, Rect, Stage, Group } from "react-konva";

class CreateImage extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", imgWidth: 1920, imgHeight: 1080 };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateCanvas = this.updateCanvas.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.updateCanvas(this.state.value);
  }

  /*componentDidMount() {
    this.updateCanvas();
  }*/

  updateCanvas(test) {
    const ctx = this.refs.canvas.getContext("2d");
    let font = document.getElementById("font").value;
    let fontColor = document.getElementById("fontColor").value;
    let fontSize = document.getElementById("fontSize").value;
    let fontPWidth = document.getElementById("fontPWidth").value;
    let fontPHeight = document.getElementById("fontPHeight").value;
    let bgColor = document.getElementById("bgColor").value;
    document.getElementById("myCanvas").style.backgroundColor = bgColor;

    console.log(fontColor);

    ctx.clearRect(0, 0, 1920, 1080);
    //ctx.fillText("Hello World", 20, 20);
    ctx.font = fontSize + "px " + font;
    ctx.fillStyle = fontColor;
    ctx.textAlign = "center";
    ctx.fillText(test, fontPWidth, fontPHeight);
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <label>
            Text:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Font:
            <select name="font" size="1" id="font">
              <option>Arial</option>
              <option>Calibri</option>
            </select>
          </label>
          <br />
          <label>Font Color: </label>
          <input id="fontColor" type="color" />
          <br />
          <label>Font Size (in px): </label>
          <input id="fontSize" type="number" />
          <br />
          <label>Font Position width (in px): </label>
          <input id="fontPWidth" type="number" />
          <br />
          <label>Font Position height (in px): </label>
          <input id="fontPHeight" type="number" />
          <br />
          <label>Background Color: </label>
          <input id="bgColor" type="color" />
          <br />
          <input type="submit" value="Create Image" />
        </form>
        <canvas
          ref="canvas"
          width={this.state.imgWidth}
          height={this.state.imgHeight}
          id="myCanvas"
        />
      </React.Fragment>
    );
  }
}

export default CreateImage;
