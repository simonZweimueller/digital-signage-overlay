import React, { Component } from "react";

/*class CanvasComponent extends Component {
  render() {
    return (
      <div className="CanvasComponent">
        <canvas ref={props.ref} width={props.width} height={props.height} />
      </div>
    );
  }
}*/

const CanvasComponent = props => {
  return (
    <div className="CanvasComponent">
      <canvas ref={props.ref} width={props.width} height={props.height} />
      <button onClick={() => props.onUpdateCanvas(props.picture)}>Fill</button>
    </div>
  );
};

export default CanvasComponent;
