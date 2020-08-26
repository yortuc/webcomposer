import React, { Component } from 'react';

import Msg from "../../../app/Msg"

export default class Looper extends Component {
    constructor(props) {
      super(props);
    }
  
    handleCellToggle(trackIndex, cellIndex){
        console.log(trackIndex, cellIndex) 
        
        Msg.publish("TOGGLE_CELL", {
            trackIndex, 
            cellIndex
        })
    }

    render() {
      const tracks = this.props.tracks.map((t, trackIndex) => {
        const cells = t.values.map((v, cellIndex) => 
          <td onClick={()=> this.handleCellToggle(trackIndex, cellIndex)} className={v == 1 ? "track-note on" : "track-note off"}></td>
        )
        
        return (
          <tr>
            <td className="track-head">{t.name}</td>
            {cells}
          </tr>)
      })
  
      return (
        <div className="looper">
            <div className="progress"></div>
            <table className="looper">
                <tbody>{tracks}</tbody>
            </table>
        </div>
      );
    }
  }
  
  