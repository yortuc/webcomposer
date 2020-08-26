
import App from "./app/app"


const song = {
  title: "demo song", 
  tracks: [
    {name: "B2", values: [false,false,true,false]},
    {name: "E3", values: [false,true,false,true]},
    {name: "G#3",values: [true,false,false,false]}
  ]
}

const app = new App(song);

app.start()