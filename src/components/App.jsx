import React, { Component } from "react";
var Promise = require("bluebird");
import Staff from './Staff.jsx';

import hiHat from '../assets/hi_hat.mp3';
import kick from '../assets/kick.mp3';
import snare from '../assets/snare.mp3';

class App extends Component {
  state = {
                  //1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4
    kickPattern:   [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
    snarePattern:  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    hiHatPattern:  [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0]
    // kickPattern:  [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
    // snarePattern: [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
    // hiHatPattern: [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]
  };

  // TODO: Slider that sets ms for bpm
  sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);});
  };

  playSoundAsync(sound) {
    new Audio(sound).play();
  };

  async playKick() {
    // for (var i = 0; i < this.state.kickPattern; i++) {
    //   console.log(i);
    //   if (this.kickPattern[i]) {
    //     console.log('hello');
    //     this.state.kick.play();
    //   } else {
    //     setTimeout(500);
    //   }
    // }
    for (var i = 0; i < this.state.kickPattern.length; i++) {
      if (!this.state.kickPattern[i]) {
        await this.sleep(150);
      } else {
        this.playSoundAsync(kick);
      }
    }

  };

  async playSnare() {
    for (var i = 0; i < this.state.snarePattern.length; i++) {
      if (!this.state.snarePattern[i]) {
        await this.sleep(150);
      } else {
        this.playSoundAsync(snare);
      }
    }
  };

  async playHiHat() {
    for (var i = 0; i < this.state.hiHatPattern.length; i++) {
      if (!this.state.hiHatPattern[i]) {
        console.log('**');
        await this.sleep(150);
      } else {
        console.log('pah');
        this.playSoundAsync(hiHat);
      }
    }
  };

  playAll = () => {
    this.playHiHat();
    this.playKick();
    this.playSnare();

  };

  render() {
    return (
      <div>
        {/* <Staff /> */}
        <button onClick={this.playAll}>
          Play
        </button>
        {/* <button onClick={this.playSnare}>
          Snare
        </button>
        <button onClick={this.playHiHat}>
          Hi-Hat
        </button> */}
      </div>
    );
  }
}

export default App;