import React, { Component } from "react";
import Beat from './Beat.jsx';

class Instrument extends Component {
  render() {
    // var beats = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map(() => {
    //   <Beat />
    // });

    return (
      <div>
        <Beat />
        <Beat />
        <Beat />
        <Beat />
      </div>
    );
  }
}

export default Instrument;