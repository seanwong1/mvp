import React, { Component } from "react";

import hiHat from '../assets/hi_hat.mp3';
import kick from '../assets/kick.mp3';
import snare from '../assets/snare.mp3';

class App extends Component {
  state = {

    kick: new Audio(kick),
    snare: new Audio(snare),
    hiHat: new Audio(hiHat),

  };

  playKick = () => {
    this.state.kick.play();
  };

  playSnare = () => {
    this.state.snare.play();
  };

  playHiHat = () => {
    this.state.hiHat.play();
  };

  render() {
    return (
      <div>
        <button onClick={this.playKick}>
          Kick
        </button>
        <button onClick={this.playSnare}>
          Snare
        </button>
        <button onClick={this.playHiHat}>
          Hi-Hat
        </button>
      </div>
    );
  }
}

export default App;