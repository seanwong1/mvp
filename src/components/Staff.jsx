import React, { Component } from "react";
import Instrument from './Instrument.jsx';

class Staff extends Component {
  constructor(props) {
    super(props);
  };

  render() {

    return (
      <div>
        <Instrument pattern={this.props.state.hiHatPattern}/>
        <Instrument pattern={this.props.state.kickPattern}/>
        <Instrument pattern={this.props.state.snarePattern}/>
      </div>
    )
  }
}

export default Staff;