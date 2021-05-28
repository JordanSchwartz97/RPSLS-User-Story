const Player = require('./Player')

class Ai extends Player {
    
    constructor(name){
        super(name);
    }
    randomGestureSelection(){
        let randomNumber = Math.floor(Math.random() * (this.listOfGestures.length -1))
       let gestureSelection = this.listOfGestures[randomNumber];
        console.log(this.name + " selected "  + gestureSelection + ".");
        return gestureSelection;  
    }



}

module.exports = Ai;