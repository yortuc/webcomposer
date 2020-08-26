import { fabric } from "fabric";

export default class NoteCell {
    constructor(x, y, w, h, title, bg="#ccc", selectable=false){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.bg = bg
        this.title = title
        this.selectable = selectable
    }

    render(){
        const rect = new fabric.Rect({
            fill: this.bg,
            width: this.w,
            height: this.h,
            originX: 'center',
            originY: 'center'
        });

        var text = new fabric.Text(this.title, {
            fontSize: 14,
            originX: 'center',
            originY: 'center',
            fill: "white",
            fontFamily: "Arial"
        });

        var group = new fabric.Group([ rect, text ], {
            left: this.x,
            top: this.y,
            selectable: this.selectable,
            lockMovementX: true,
            lockMovementY: true
        });

        return group
    }
}