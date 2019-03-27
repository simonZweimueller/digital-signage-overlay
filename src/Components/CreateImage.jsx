import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Layer, Rect, Stage, Group } from "react-konva";

class CreateImage extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", color: "red" };

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

    ctx.clearRect(0, 0, 1920, 1080);
    //ctx.fillText("Hello World", 20, 20);
    ctx.font = "15px " + font;
    ctx.fillStyle = fontColor;
    ctx.textAlign = "center";
    ctx.fillText(test, 40, 40);
  }

  sendImage() {
    //TODO http-get
    //https://nodejs.org/api/http.html#http_http_get_options_callback --IMPORTANT
    //192.168.43.129/library
    //https://xibo.org.uk/manual/api/#/library/libraryAdd

    let url = "192.168.43.129/library/";
    let method = "POST";
    let shouldBeAsync = true;
    let request = new XMLHttpRequest();

    //https://stackoverflow.com/questions/34485420/how-do-you-put-an-image-file-in-a-json-object
    /*let img = new Image();
    img.onload = function() {
      let testCanvas = document.getElementById("myCanvas");
      let testImg = testCanvas.toDataURL("image/png");
    };
    img.src = location.pathname;
    console.log(img.src);*/

    //converts canvas to png
    let testCanvas = document.getElementById("myCanvas");
    let testImg = testCanvas.toDataURL("image/png");

    request.onload = function() {
      var status = request.status;
      var data = request.responseText;
    };
    request.open(method, url, shouldBeAsync);
    request.setRequestHeader("Content-Type", "application/json;");
    request.send(testImg);
    console.log(testImg);
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
          <input id="fontColor" type="color" />
          <br />
          <input type="submit" value="Create Image" />
        </form>
        <button onClick={this.sendImage}>Send</button>{" "}
        {/*evt <form> verwenden*/}
        <canvas ref="canvas" width={1920} height={1080} id="myCanvas" />
      </React.Fragment>
    );
  }
}

export default CreateImage;
