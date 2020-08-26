import * as Tone from 'tone';

import Msg from "../app/Msg"

export default class Player {
    constructor(){
        // can load assets here

        this.loop = null;

        Msg.subscribe("PLAY", (song)=> {
            this.play(song)
        })

        Msg.subscribe("STOP", ()=> {
            this.loop.stop(0)
        })
    }

    renderSteps(song){
        const steps = []
        
        for(let i=0; i<song.tracks[0].values.length; i++){
            const step = []
            for(let j=0; song.tracks.length; j++){
                step.push(song.tracks[i][j])
            }
            ret.push(step)
        }
        return steps
    }
  
    play(song){
        const synth = new Tone.PolySynth().toDestination();

        this.loop = new Tone.Loop((time) => {
            synth.triggerAttackRelease(["C4"], time);
            synth.triggerAttackRelease(["D4"], time + 1);
        }, "8n").start(0);

        Tone.Transport.start();
    }
  }