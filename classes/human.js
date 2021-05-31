const Player = require('./Player')
const gesturePrompt = require("prompt-sync")();
class Human extends Player {
    constructor(name){
        super(name);
    } 
    chooseAGesture(){
        this.gestureSelection = gesturePrompt(this.name + " please choose a gesture.'Rock','Paper','Scissors','Lizard','Spock'").toLowerCase();
       switch (this.gestureSelection){
        case "rock":
            return;
        case "paper":
            return;
        case "scissors":
            return;
        case "lizard":
            return;
        case "spock":
            return;
        default:
        console.log("Invalid gesture please try again.");
        this.chooseAGesture();
       }        
    }
    
}
module.exports = Human;
 // if (this.gestureSelection === this.listOfGestures){
        // console.log(this.name + " selected " + this.gestureSelection + ".")
        // return;
        // }
        // else if (this.gestureSelection !== this.listOfGestures){
        //     console.log("Invalid gesture please try again.")
        //     this.chooseAGesture();
        // }