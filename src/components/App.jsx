import React, { Component } from "react";
var Promise = require("bluebird");
import $ from 'jquery';
import Staff from './Staff.jsx';

import hiHat from '../assets/hi_hat.mp3';
import kick from '../assets/kick.mp3';
import snare from '../assets/snare.mp3';
import rest from '../assets/rest.mp3';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kickPattern: [],
      snarePattern: [],
      hiHatPattern: [],
      kick: new Audio(kick),
      snare: new Audio(snare),
      hiHat: new Audio(hiHat),
      rest: new Audio(rest),
      beats: 16,
      curBeat: 0,
      tempo: 1,
      staff: []
    };
  }

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

  playAll() {
    this.playHiHat();
    this.playKick();
    this.playSnare();

  };

  getPattern(pattern) {
    $.ajax({
      url: 'http://localhost:3000/patterns',
      type: 'GET',
      data: {
        pattern: pattern
      }
    })
      .done((data) => {
        this.setState({
          kickPattern: data[0].instrument1.split(''),
          snarePattern: data[0].instrument2.split(''),
          hiHatPattern: data[0].instrument3.split('')
        });
      });
  };

  render() {
    return (
      <div>
        {/* <Staff /> */}
        <button onClick={this.add}>
          Add
        </button>
        <button onClick={() => {this.playAll()}}>
          Play
        </button>
        <button onClick={() => {this.getPattern(1)}}>
          Pattern1
        </button>
        <button onClick={() => {this.getPattern(2)}}>
          Pattern2
        </button>
      </div>
    );
  }
}

export default App;