class Msg {
    constructor(){
        this.channels = {}
    }

    publish(msg, payload){
        if(this.channels[msg]){
            this.channels[msg].forEach(cb => cb(payload))
        }
    }

    subscribe(msg, cb){
        if(this.channels[msg]){
            this.channels[msg].push(cb)
        }
        else{
            this.channels[msg] = [cb]
        }
    }
}

export default new Msg()