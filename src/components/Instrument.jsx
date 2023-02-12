import React, { Component } from "react";
import Beat from './Beat.jsx';

class Instrument extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    var beats = this.props.pattern.join(' ');

    return (
      <div>
        {beats}
      </div>
    );
  }
}

export default Instrument;