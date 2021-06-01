const Human  = require('./Human');
const Player  = require('./Player');
const Ai = require('./Ai');
const modePrompt = require("prompt-sync")();
class Game {
    constructor(){
        this.player1;
        this.player2;  
    }
    run(){
        this.welcomeMenu(); 

    }
    ///////////////////////////////////////////////////////////////////////Basic Into message with rules
    welcomeMenu(){
        console.log("Welcome to Jordan's RPSLS game. This game is based off the classic rock,paper,scissors game. In order to win you must win 3 games.");
        console.log("The game will continue to run until the player reaches the winning score. ");
        this.modeSelection();
                }  
    ///////////////////////////////////////////////////////////////////////Chooses vs mode. Either vs ai or human. Also runs a majority of the methods for the game.
    modeSelection(){
        let modeSelection = modePrompt("Please select a mode.'Ai' or 'Human' or 'Exit'.").toLowerCase();
        switch(modeSelection.toLowerCase()){
            case "ai":
                console.log("You've Selected to play against an ai!");
                this.humanAiBuilder();
                while (this.player1.score < 3 && this.player2.score < 3) {
                this.player1.chooseAGesture();
                this.player2.randomGestureSelection();
                this.gameLogic();
            }
                this.winningPlayer();
                break;
            case "human":
                console.log("You've Selected to play against another human!");
                this.twoHumanBuilder();
                while (this.player1.score < 3 && this.player2.score < 3) {
                this.player1.chooseAGesture();
                this.player2.chooseAGesture();
                this.gameLogic();
                }
                this.winningPlayer();
                break;
            case "exit":
                break;
            default:
                console.log("Invalid Input please select a mode or type 'Exit'.")
                this.modeSelection();
                break;
            }  
        }
    ///////////////////////////////////////////////////////////////////////Builds one human and one ai player.
    humanAiBuilder(){
        this.player1 = new Human("Player 1");
        this.player2 = new Ai("Player 2");
    }
    ///////////////////////////////////////////////////////////////////////Builds two new human players
    twoHumanBuilder(){
        this.player1 = new Human("Player 1");
        this.player2 = new Human("Player 2");
    }
    /////////////////////////////////////////////////////////////////////Game Logic method
    gameLogic(){
        /////////////////////////////////////////////////////////////////Player 1 win logic
        
            if (this.player1.gestureSelection == "rock" && this.player2.gestureSelection == "scissors"){
                this.player1.score++;
               console.log(`${this.player1.name} wins this round! The score is now: ${this.player1.score}-${this.player2.score}`);
               return
            }
            else if (this.player1.gestureSelection == "scissors" && this.player2.gestureSelection == "paper"){
                this.player1.score++;
                console.log(`${this.player1.name} wins this round! The score is now: ${this.player1.score}-${this.player2.score}`);
                return
        }
        else if (this.player1.gestureSelection == "paper" && this.player2.gestureSelection == "rock"){
            this.player1.score++;
            console.log(`${this.player1.name} wins this round! The score is now: ${this.player1.score}-${this.player2.score}`);
            return
            
        }
        else if (this.player1.gestureSelection == "rock" && this.player2.gestureSelection == "lizard"){
            this.player1.score++;
            console.log(`${this.player1.name} wins this round! The score is now: ${this.player1.score}-${this.player2.score}`);
            return
        }
        else if (this.player1.gestureSelection == "lizard" && this.player2.gestureSelection == "spock"){
            this.player1.score++;
            console.log(`${this.player1.name} wins this round! The score is now: ${this.player1.score}-${this.player2.score}`);
            return
        }
        else if (this.player1.gestureSelection == "spock" && this.player2.gestureSelection == "scissors"){
            this.player1.score++;
            console.log(`${this.player1.name} wins this round! The score is now: ${this.player1.score}-${this.player2.score}`);
            return
        }
        else if (this.player1.gestureSelection == "scissors" && this.player2.gestureSelection == "lizard"){
            this.player1.score++;
            console.log(`${this.player1.name} wins this round! The score is now: ${this.player1.score}-${this.player2.score}`);
            return
        }
        else if (this.player1.gestureSelection == "lizard" && this.player2.gestureSelection == "paper"){
            this.player1.score++;
            console.log(`${this.player1.name} wins this round! The score is now: ${this.player1.score}-${this.player2.score}`);
            return;
        }
        else if (this.player1.gestureSelection == "paper" && this.player2.gestureSelection == "spock"){
            this.player1.score++;
            console.log(`${this.player1.name} wins this round! The score is now: ${this.player1.score}-${this.player2.score}`);
            return
        }
        else if (this.player1.gestureSelection == "spock" && this.player2.gestureSelection == "rock"){
            this.player1.score++;
            console.log(`${this.player1.name} wins this round! The score is now: ${this.player1.score}-${this.player2.score}`); 
            return;
        }
        /////////////////////////////////////////////////////////////////Player 2 win logic
        else if (this.player2.gestureSelection == "rock" && this.player1.gestureSelection == "scissors"){
            this.player2.score++;
            console.log(`${this.player2.name} wins this round! The score is now: ${this.player1.score}-${this.player2.score}`); 
            return;
         }
         else if (this.player2.gestureSelection == "scissors" && this.player1.gestureSelection == "paper"){
             this.player2.score++;
            console.log(`${this.player2.name} wins this round! The score is now: ${this.player1.score}-${this.player2.score}`);  
             return;
     }
     else if (this.player2.gestureSelection == "paper" && this.player1.gestureSelection == "rock"){
         this.player2.score++;
        console.log(`${this.player2.name} wins this round! The score is now: ${this.player1.score}-${this.player2.score}`);  
         return;
         
     }
     else if (this.player2.gestureSelection == "rock" && this.player1.gestureSelection == "lizard"){
         this.player2.score++;
        console.log(`${this.player2.name} wins this round! The score is now: ${this.player1.score}-${this.player2.score}`);  
         return;
     }
     else if (this.player2.gestureSelection == "lizard" && this.player1.gestureSelection == "spock"){
         this.player2.score++;
        console.log(`${this.player2.name} wins this round! The score is now: ${this.player1.score}-${this.player2.score}`);  
         return;
     }
     else if (this.player2.gestureSelection == "spock" && this.player1.gestureSelection == "scissors"){
         this.player2.score++;
        console.log(`${this.player2.name} wins this round! The score is now: ${this.player1.score}-${this.player2.score}`);  
         return;
     }
     else if (this.player2.gestureSelection == "scissors" && this.player1.gestureSelection == "lizard"){
         this.player2.score++;
        console.log(`${this.player2.name} wins this round! The score is now: ${this.player1.score}-${this.player2.score}`);  
         return;
     }
     else if (this.player2.gestureSelection == "lizard" && this.player1.gestureSelection == "paper"){
         this.player2.score++;
        console.log(`${this.player2.name} wins this round! The score is now: ${this.player1.score}-${this.player2.score}`);  
         return;
     }
     else if (this.player2.gestureSelection == "paper" && this.player1.gestureSelection == "spock"){
         this.player2.score++;
        console.log(`${this.player2.name} wins this round! The score is now: ${this.player1.score}-${this.player2.score}`);  
         return;
     }
     else if (this.player2.gestureSelection == "spock" && this.player1.gestureSelection == "rock"){
         this.player2.score++;
        console.log(`${this.player2.name} wins this round! The score is now: ${this.player1.score}-${this.player2.score}`); 
         return;
     }
     ////////////////////////////////////TIE LOGIC
     if (this.player1.gestureSelection == "rock" && this.player2.gestureSelection == "rock"){
        console.log(`It was a tie! ${this.player1.score}-${this.player2.score}`);
        return;
     }
     else if (this.player1.gestureSelection == "scissors" && this.player2.gestureSelection == "scissors"){
        console.log(`It was a tie! ${this.player1.score}-${this.player2.score}`);
        return;
 }
 
 else if (this.player2.gestureSelection == "paper" && this.player1.gestureSelection == "paper"){
     console.log(`It was a tie! ${this.player1.score}-${this.player2.score}`);
     return;
 }
 else if (this.player2.gestureSelection == "lizard" && this.player1.gestureSelection == "lizard"){
    console.log(`It was a tie! ${this.player1.score}-${this.player2.score}`);
    return;
    
 }
 else if (this.player2.gestureSelection == "spock" && this.player1.gestureSelection == "spock"){
    console.log(`It was a tie! ${this.player1.score}-${this.player2.score}`);
    return;
    /////////////////////////////////////////////////////////////////Default case logic
 }
        else {
            this.gameLogic();
        }   
    }  
    /////////////////////////////////////////////////////////////Winning player console message
    winningPlayer(){
        if (this.player1.score == 3){
            console.log(this.player1.name + " wins the game!");
            return
        }
        else if (this.player2.score == 3){
            console.log(this.player2.name + " wins the game!");
            return
        }
        
    }
    
}

module.exports = Game;