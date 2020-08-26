import { fabric } from "fabric";

import NoteCell from "./NoteCell"

export default class Track {
    constructor(x, y, title){
        this.x = x
        this.y = y
        this.title = title
    }

    render(c){
        const controls = []

        // header
        const trackHeader = new NoteCell(this.x, this.y, 120, 60, "Kick", "#444")
        c.add(trackHeader.render())

        // cells
        for(let i=0; i<12; i++){
            const cell = new NoteCell(this.x + 124 + i*(64), this.y, 60, 60, "", "#ccc", true)
            c.add(cell.render())
        }
    }
}