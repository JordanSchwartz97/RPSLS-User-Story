const Player = require('./Player')

class Ai extends Player {
    
    constructor(name){
        super(name);
    }
    randomGestureSelection(){
        let randomNumber = Math.floor(Math.random() * (this.listOfGestures.length -1))
        this.gestureSelection = this.listOfGestures[randomNumber];
        console.log(this.name + " selected "  + this.gestureSelection + ".");
        return this.gestureSelection;  
    }
}

module.exports = Ai;