import { fabric } from "fabric";

import Track from "./components/Track"

export default class AppUI{
    constructor(song){
      this.song = song;

      this.canvas = null;

      this.canvas = new fabric.Canvas('canvas');
    } 

    render(){
      const track = new Track(50, 50, "Kick")
      track.render(this.canvas)
    }
  }