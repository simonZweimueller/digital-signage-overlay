import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Layer, Rect, Stage, Group } from "react-konva";

class CreateImage extends Component {
  constructor(props) {
    super(props);
    this.state = { imgWidth: 1920, imgHeight: 1080 };

    this.handleSubmitCanvas = this.handleSubmitCanvas.bind(this);
    this.createCanvas = this.createCanvas.bind(this);

    this.handleSubmitText = this.handleSubmitText.bind(this);
    this.createText = this.createText.bind(this);

    this.handleSave = this.handleSave.bind(this);
    this.saveImage = this.saveImage.bind(this);
  }

  handleSubmitCanvas(event) {
    event.preventDefault();
    this.createCanvas();
  }

  handleSubmitText(event) {
    event.preventDefault();
    this.createText();
  }

  handleSave(event) {
    event.preventDefault();
    this.saveImage();
  }

  /*componentDidMount() {
    this.updateCanvas();
  }*/

  createCanvas() {
    const ctx = this.refs.canvas.getContext("2d");

    let bgColor = document.getElementById("bgColor").value;

    ctx.clearRect(0, 0, this.state.imgWidth, this.state.imgHeight);
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, this.state.imgWidth, this.state.imgHeight);
  }

  createText() {
    const ctx = this.refs.canvas.getContext("2d");

    let msg = document.getElementById("msg").value;
    let font = document.getElementById("font").value;
    let fontColor = document.getElementById("fontColor").value;
    let fontSize = document.getElementById("fontSize").value;
    let fontPWidth = document.getElementById("fontPWidth").value;
    let fontPHeight = document.getElementById("fontPHeight").value;

    ctx.font = fontSize + "px " + font;
    ctx.fillStyle = fontColor;
    ctx.textAlign = "center";
    ctx.fillText(msg, fontPWidth, fontPHeight);
  }

  saveImage() {
    let canvasSave = document.getElementById("myCanvas");
    const d = canvasSave.toDataURL("image/png");
    document.getElementById("downloadLink").innerHTML =
      "<a href='" + d + "' id='downloadButton' download='test.png'></a>";
    document.getElementById("downloadButton").click();
    console.log("Saved!");
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmitCanvas}>
          <label>Background Color: </label>
          <input id="bgColor" type="color" />
          <br />
          <input type="submit" value="Create Image" />
        </form>

        <form onSubmit={this.handleSubmitText}>
          <label>
            Text:
            <input type="text" id="msg" />
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
          <input type="submit" value="Add text" />
        </form>

        <input type="button" value="Save Image" onClick={this.handleSave} />

        <canvas
          ref="canvas"
          width={this.state.imgWidth}
          height={this.state.imgHeight}
          id="myCanvas"
        />

        <div id="downloadLink" />
      </React.Fragment>
    );
  }
}

export default CreateImage;
