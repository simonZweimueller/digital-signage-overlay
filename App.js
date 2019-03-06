import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import UserInput from "./Components/UserInput";
import Question from "./Components/Question";
import CanvasComponent from "./Components/CanvasComponent";
//import { Layer, Rect, Stage, Group } from "react-konva";

class App extends Component {
  state = {
    questions: [
      { id: "fdsd", title: "Why is the sky blue?" },

      { id: "adsf", title: "Who invented pizza?" },

      { id: "afdsf", title: "Is green tea overrated?" }
    ],

    displayQuestions: false,

    pictures: [{ ref: "canvas", width: 300, height: 300 }],
    displayPicture: false,
    color: "green"
  };

  /*componentDidMount = () => {
    this.updateCanvas();
  };
*/
  displayQuestion = () => {
    this.setState({
      displayQuestions: !this.state.displayQuestions
    });
  };

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
    let questions = null;
    let pictures = null;

    if (this.state.displayQuestions) {
      questions = (
        <div>
          {this.state.questions.map((question, index) => {
            return <Question key={question.id} title={question.title} />;
          })}
        </div>
      );
    }

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
        <button className="btn" onClick={this.displayQuestion}>
          View
        </button>

        {questions}

        <button className="btn" onClick={this.displayPicture}>
          View Pic
        </button>

        {pictures}
      </React.Fragment>
    );
  }
}

export default App;
