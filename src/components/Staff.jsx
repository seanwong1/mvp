import React, { Component } from "react";
import Instrument from './Instrument.jsx';

class Staff extends Component {
  constructor(props) {
    super(props);
  };

  render() {

    return (
      <div>
        1 e + a 2 e + a 3 e + a 4 e + a
        <Instrument pattern={this.props.state.hiHatPattern}/>
        <Instrument pattern={this.props.state.kickPattern}/>
        <Instrument pattern={this.props.state.snarePattern}/>
      </div>
    )
  }
}

export default Staff;