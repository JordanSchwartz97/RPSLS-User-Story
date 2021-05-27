const Player = require('./Player')
const gesturePrompt = require("prompt-sync")();
class Human extends Player {
    constructor(name,listOfGestures,gestureSelection){
        super(name,listOfGestures,gestureSelection)
    } 
    chooseAGesture(){
        let gestureSelection = gesturePrompt("Please choose a gesture.'rock','paper','scissors','lizard','spock'").toLowerCase();
        console.log("You selected " + gestureSelection + ".")
        return gestureSelection;
    }
}
module.exports = Human;
