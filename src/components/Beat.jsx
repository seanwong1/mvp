import React, { Component } from "react";

class Beat extends Component {
  render() {
    const box = {
      'height': '50px',
      'width': '50px',
      'background-color': '#555'
    }

    return (
      <div style={box}></div>
    );
  }
}

export default Beat;