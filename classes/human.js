const Player = require('./Player')
const gesturePrompt = require("prompt-sync")();
class Human extends Player {
    constructor(name){
        super(name);
    } 
    chooseAGesture(){
        this.gestureSelection = gesturePrompt("Please choose a gesture.'Rock','Paper','Scissors','Lizard','Spock'").toLowerCase();
        console.log(this.name + " selected " + this.gestureSelection + ".")
        return;
    }
    
}
module.exports = Human;
