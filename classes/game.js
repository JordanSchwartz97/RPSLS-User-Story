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
    /////////////////////////////////////////////////////////////////////////////////////////////
    welcomeMenu(){
        console.log("Welcome to Jordan's RPSLS game. This game is based off the classic RPS game. In order to win you must win 2 games.");
        this.modeSelection();
                }  
    /////////////////////////////////////////////////////////////////////////////////////////////
    modeSelection(){
        let modeSelection = modePrompt("Please select a mode.'Ai' or 'Human' or 'Quit'").toLowerCase();
        switch(modeSelection.toLowerCase()){
            case "ai":
                console.log("You've Selected to play against an ai!");
                this.humanAiBuilder();
                while (this.player1.score < 2 && this.player2.score < 2) {
                this.player1.chooseAGesture();
                this.player2.randomGestureSelection();
                this.gameLogic();
            }
                // this.gameLogic();
                break;
            case "human":
                console.log("You've Selected to play against another human!");
                this.twoHumanBuilder();
                while (this.player1.score < 2 && this.player2.score < 2) {
                this.player1.chooseAGesture();
                this.player2.chooseAGesture();
                this.gameLogic();
                }
                this.winningPlayer();
                break;
            case "quit":
                break;
            default:
                break;
            }  
        }
    /////////////////////////////////////////////////////////////////////////////////////////////
    
    humanAiBuilder(){
        this.player1 = new Human("Player 1");
        this.player2 = new Ai("Player 2");
    }
    /////////////////////////////////////////////////////////////////////////////////////////////
    twoHumanBuilder(){
        this.player1 = new Human("Player 1");
        this.player2 = new Human("Player 2");
    }
    /////////////////////////////////////////////////////////////////////////////////////////////
    gameLogic(){
            if (this.player1.gestureSelection == "rock" && this.player2.gestureSelection == "scissors"){
               console.log(this.player1.name + " wins this round!");
               this.player1.score++;
               return
            }
            else if (this.player1.gestureSelection == "scissors" && this.player2.gestureSelection == "paper"){
                console.log(this.player1.name + " wins this round!"); 
                this.player1.score++;
                return
        }
        else if (this.player1.gestureSelection == "paper" && this.player2.gestureSelection == "rock"){
            console.log(this.player1.name + " wins this round!"); 
            this.player1.score++;
            return
            
        }
        else if (this.player1.gestureSelection == "rock" && this.player2.gestureSelection == "lizard"){
            console.log(this.player1.name + " wins this round!"); 
            this.player1.score++;
            return
        }
        else if (this.player1.gestureSelection == "lizard" && this.player2.gestureSelection == "spock"){
            console.log(this.player1.name + " wins this round!"); 
            this.player1.score++;
            return
        }
        else if (this.player1.gestureSelection == "spock" && this.player2.gestureSelection == "scissors"){
            console.log(this.player1.name + " wins this round!"); 
            this.player1.score++;
            return
        }
        else if (this.player1.gestureSelection == "scissors" && this.player2.gestureSelection == "lizard"){
            console.log(this.player1.name + " wins this round!"); 
            this.player1.score++;
            return
        }
        else if (this.player1.gestureSelection == "lizard" && this.player2.gestureSelection == "paper"){
            console.log(this.player1.name + " wins this round!"); 
            this.player1.score++;
            return;
        }
        else if (this.player1.gestureSelection == "paper" && this.player2.gestureSelection == "spock"){
            console.log(this.player1.name + " wins this round!"); 
            this.player1.score++;
            return
        }
        else if (this.player1.gestureSelection == "spock" && this.player2.gestureSelection == "rock"){
            console.log(this.player1.name + " wins this round!"); 
            this.player1.score++;
            return;
        }
        /////////////////////////////////////////////////////////////////Player 2 win logic
        else if (this.player2.gestureSelection == "rock" && this.player1.gestureSelection == "scissors"){
            console.log(this.player2.name + " wins this round!");
            this.player2.score++;
            return;
         }
         else if (this.player2.gestureSelection == "scissors" && this.player1.gestureSelection == "paper"){
             console.log(this.player2.name + " wins this round!"); 
             this.player2.score++;
             return;
     }
     else if (this.player2.gestureSelection == "paper" && this.player1.gestureSelection == "rock"){
         console.log(this.player2.name + " wins this round!"); 
         this.player2.score++;
         return;
         
     }
     else if (this.player2.gestureSelection == "rock" && this.player1.gestureSelection == "lizard"){
         console.log(this.player2.name + " wins this round!"); 
         this.player2.score++;
         return;
     }
     else if (this.player2.gestureSelection == "lizard" && this.player1.gestureSelection == "spock"){
         console.log(this.player2.name + " wins this round!"); 
         this.player2.score++;
         return;
     }
     else if (this.player2.gestureSelection == "spock" && this.player1.gestureSelection == "scissors"){
         console.log(this.player2.name + " wins this round!"); 
         this.player2.score++;
         return;
     }
     else if (this.player2.gestureSelection == "scissors" && this.player1.gestureSelection == "lizard"){
         console.log(this.player2.name + " wins this round!"); 
         this.player2.score++;
         return;
     }
     else if (this.player2.gestureSelection == "lizard" && this.player1.gestureSelection == "paper"){
         console.log(this.player2.name + " wins this round!"); 
         this.player2.score++;
         return;
     }
     else if (this.player2.gestureSelection == "paper" && this.player1.gestureSelection == "spock"){
         console.log(this.player2.name + " wins this round!"); 
         this.player2.score++;
         return;
     }
     else if (this.player2.gestureSelection == "spock" && this.player1.gestureSelection == "rock"){
         console.log(this.player2.name + " wins this round!"); 
         this.player2.score++;
         return;
     }
     ////////////////////////////////////TIE LOGIC
     if (this.player1.gestureSelection == "rock" && this.player2.gestureSelection == "rock"){
        console.log("It was a tie!");
        return;
     }
     else if (this.player1.gestureSelection == "scissors" && this.player2.gestureSelection == "scissors"){
        console.log("It was a tie!"); 
        return;
 }
 
 else if (this.player2.gestureSelection == "paper" && this.player1.gestureSelection == "paper"){
     console.log("It was a tie!"); 
     return;
 }
 else if (this.player2.gestureSelection == "lizard" && this.player1.gestureSelection == "lizard"){
    console.log("It was a tie!"); 
    return;
    
 }
 else if (this.player2.gestureSelection == "spock" && this.player1.gestureSelection == "spock"){
    console.log("It was a tie!"); 
    return;
    
 }
        else {
            this.gameLogic();
        }   
    }  
    winningPlayer(){
        if (this.player1.score == 2){
            console.log(this.player1.name + " wins the game!");
            return
        }
        else if (this.player2.score == 2){
            console.log(this.player2.name + " wins the game!");
            return
        }
        
    }
    
}




 
//  while (this.player1.score < 2 && this.player2.score < 2) {
//             if (this.player1.gestureSelection == "rock" && this.player2.gestureSelection == "scissors"){
//                 console.log(this.player1.name + " wins this round!");
//                 this.player1.score++
//             }
//            else{}
//          }






module.exports = Game;