const Human  = require('./Human');
const Player  = require('./Player');
const Ai = require('./Ai');
const modePrompt = require("prompt-sync")();

class Game {
    constructor(){
        this.player1 = new Human("Player 1")
        this.player2 = new Ai("Player 2")
    }
    run(){
        this.welcomeMenu();
    }
    
  
    
    welcomeMenu(){
        console.log("Welcome to Jordan's RPSLS game. This game is based off the classic RPS game. In order to win you must win 2 out of the 3 rounds.");
        let modeSelection = modePrompt("Please select a mode.'Ai' or 'Human'");
        switch(modeSelection.toLowerCase()){
            case "ai":
                console.log("You've Selected to play against an ai!");
                this.player1.chooseAGesture();
                this.player2.randomGestureSelection();
                break;
            case "human":
                console.log("You've Selected to play against another human!");
                this.player1.chooseAGesture();
                this.player2.chooseAGesture();
                break;
            default:
                break;
        }
    }
    
        
  
}

module.exports = Game;