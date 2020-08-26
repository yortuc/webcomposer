import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import msg from "../../app/Msg"

import Looper from "./component/Looper"
import Msg from '../../app/Msg';

export default class AppUI{
    constructor(song, msg){
        this.song = song;
        this.playing = false

        Msg.subscribe("TOGGLE_CELL", (payload)=> {
            this.song.tracks[payload.trackIndex].values[payload.cellIndex] = !this.song.tracks[payload.trackIndex].values[payload.cellIndex]
            this.render()
        })

    }

    handlePlayToggle(){
        if(this.playing){
            Msg.publish("STOP")
        }
        else{
            Msg.publish("PLAY", this.song)
        }
    }

    render(){
        ReactDOM.render(
            <div>
                <button onClick={this.handlePlayToggle.bind(this)}>Play</button>
                <Looper tracks={this.song.tracks} />
            </div>,
            document.getElementById('app')        
          );
    }
  }