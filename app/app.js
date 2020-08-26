import * as Tone from 'tone';

import Player from "./Player"
import AppUI from "../ui/reactui/appui"

export default class App {
    constructor(song){
        this.ui = new AppUI(song, this.msg)
        this.player = new Player()
    }

    msg(payload){
      console.log(payload)

      switch(payload.command){
        case "PLAY":
          this.player.play(this.song)
      }
    }

    start(){
        console.log("App started...")
        this.ui.render()
    }
  }