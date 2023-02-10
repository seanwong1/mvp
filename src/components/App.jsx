import React, { Component } from "react";
var Promise = require("bluebird");
import Staff from './Staff.jsx';

import hiHat from '../assets/hi_hat.mp3';
import kick from '../assets/kick.mp3';
import snare from '../assets/snare.mp3';
import rest from '../assets/rest.mp3';

class App extends Component {
  state = {
                  //1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4
    kickPattern:   [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
    snarePattern:  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    hiHatPattern:  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    // kickPattern:  [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
    // snarePattern: [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
    // hiHatPattern: [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]
    kick: new Audio(kick),
    snare: new Audio(snare),
    hiHat: new Audio(hiHat),
    rest: new Audio(rest),
    beats: 16,
    curBeat: 0,
    tempo: 1,
    staff: []
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
        await this.sleep(100);
      } else {
        this.state.kick.play();
      }
    }

  };

  async playSnare() {
    for (var i = 0; i < this.state.snarePattern.length; i++) {
      if (!this.state.snarePattern[i]) {
        await this.sleep(100);
      } else {
        this.state.snare.play();
      }
    }
  };

  async playHiHat() {
    for (var i = 0; i < this.state.hiHatPattern.length; i++) {
      if (!this.state.hiHatPattern[i]) {
        console.log('**');
        await this.sleep(100);
      } else {
        console.log('pah');
        this.state.hiHat.play();
      }
    }
  };

  playAll = () => {
    this.playHiHat();
    this.playKick();
    this.playSnare();

  };

    // setTempo() {
  //   this.state.kick.playbackRate = this.state.tempo;
  //   this.state.snare.playbackRate = this.state.tempo;
  //   this.state.hiHat.playbackRate = this.state.tempo;
  //   this.state.rest.playbackRate = this.state.tempo;
  // }

  // add = () => {
  //   this.setTempo();
  //   for (var i = 0; i < this.state.beats; i++) {
  //     this.state.staff.push([]);
  //     if (!this.state.kickPattern[i] && !this.state.snarePattern[i] && !this.state.hiHatPattern[i]) {
  //       this.state.staff[i].push(this.state.rest);
  //       this.state.staff[i][0].playbackRate = 2;
  //     }
  //     if (this.state.kickPattern[i]) {
  //       this.state.staff[i].push(this.state.kick);
  //     }
  //     if (this.state.snarePattern[i]) {
  //       this.state.staff[i].push(this.state.snare);
  //     }
  //     if (this.state.hiHatPattern[i]) {
  //       this.state.staff[i].push(this.state.hiHat);
  //     }
  //     this.addOnEnd(i);
  //   }
  //   console.log(this.state.staff);
  // }

  // addOnEnd(index) {
  //   this.state.staff[index][this.state.staff[index].length - 1].addEventListener('ended', this.playNext);
  // }

  // playNext = () => {
  //   if (this.state.curBeat < this.state.beats) {
  //     for (var i = 0; i < this.state.staff[this.state.curBeat].length; i++) {
  //       this.state.staff[this.state.curBeat][i].play();
  //     }
  //     this.state.curBeat++;
  //   }
  // }

  // playNext = () => {
  //   if (this.state.curBeat < this.state.beats) {
  //     if (!this.state.kickPattern[this.state.curBeat] && !this.state.snarePattern[this.state.curBeat] && !this.state.hiHatPattern[this.state.curBeat]) {
  //       this.sleep(100);
  //     }
  //     if (this.state.kickPattern[this.state.curBeat]) {
  //       this.state.kick.addEventListener('ended', this.playNext)
  //       this.state.kick.play();
  //     }
  //     if (this.state.snarePattern[this.state.curBeat]) {
  //       this.state.snare.addEventListener('ended', this.playNext)
  //       this.state.snare.play();
  //     }
  //     if (this.state.hiHatPattern[this.state.curBeat]) {
  //       this.state.hiHat.addEventListener('ended', this.playNext)
  //       this.state.hiHat.play();
  //     }
  //     this.state.curBeat++;
  //     console.log(this.state.curBeat);
  //   }
  // }

  // playNext = () => {
  //   if (this.state.curBeat < this.state.beats) {
  //     if (!this.state.kickPattern[this.state.curBeat] && !this.state.snarePattern[this.state.curBeat] && !this.state.hiHatPattern[this.state.curBeat]) {
  //       this.sleep(100);
  //     }
  //     if (this.state.kickPattern[this.state.curBeat]) {
  //       this.state.kick.addEventListener('ended', this.playNext)
  //       this.state.kick.play();
  //     }
  //     if (this.state.snarePattern[this.state.curBeat]) {
  //       this.state.snare.addEventListener('ended', this.playNext)
  //       this.state.snare.play();
  //     }
  //     if (this.state.hiHatPattern[this.state.curBeat]) {
  //       this.state.hiHat.addEventListener('ended', this.playNext)
  //       this.state.hiHat.play();
  //     }
  //     this.state.curBeat++;
  //     console.log(this.state.curBeat);
  //   }
  // }

  render() {
    return (
      <div>
        {/* <Staff /> */}
        <button onClick={this.add}>
          Add
        </button>
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