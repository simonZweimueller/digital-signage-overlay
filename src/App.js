import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CanvasComponent from "./Components/CanvasComponent";
//import { Layer, Rect, Stage, Group } from "react-konva";

//Components noch nicht auf App-Ebene gebracht

class App extends Component {
  state = {
    pictures: [{ ref: "canvas", width: 300, height: 300 }],
    displayPicture: false,
    color: "green"
  };

  /*componentDidMount = () => {
    this.updateCanvas();
  };
*/

  displayPicture = () => {
    this.setState({
      displayPicture: !this.state.displayPicture
    });
  };

  updateCanvas = picture => {
    const pictures = [...this.state.pictures];
    const index = pictures.indexOf(picture);
    pictures[index] = { ...pictures };
    let ctx = pictures[index].refs.canvas.getContext("2d");
    pictures[index].fillRect(0, 0, 20, 100);
    pictures[index].fillText("Hello World", 20, 20);
    this.setState({ pictures });
  };

  render() {
    let pictures = null;

    if (this.state.displayPicture) {
      pictures = (
        <div>
          {this.state.pictures.map((picture, index) => {
            return (
              <CanvasComponent
                ref={picture.ref}
                height={picture.height}
                width={picture.width}
                onUpdateCanvas={this.updateCanvas}
              />
            );
          })}
        </div>
      );
    }

    return (
      <React.Fragment>
        <button className="btn" onClick={this.displayPicture}>
          View Pic
        </button>

        {pictures}
      </React.Fragment>
    );
  }
}

export default App;
