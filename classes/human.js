const Player = require('./Player')
const gesturePrompt = require("prompt-sync")();
class Human extends Player {
    constructor(name){
        super(name);
    } 
    chooseAGesture(){
        let correctGesture = false;
        this.gestureSelection = gesturePrompt(this.name + " please choose a gesture.'Rock','Paper','Scissors','Lizard','Spock'. ").toLowerCase();
        for (let i = 0; i < this.listOfGestures.length; i++) { 
            if(this.gestureSelection == this.listOfGestures[i]){
                correctGesture = true;
                return;
            }
        }
        if (!correctGesture){
        console.log("Invalid input, please input a valid gesture.")
        this.chooseAGesture();  
        } 
        
    }
}
module.exports = Human;
