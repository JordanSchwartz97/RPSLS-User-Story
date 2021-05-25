function welcomeMenu(){
    console.log("Welcome to Jordan's RPSLS game. This is a rock paper scissors style game. You can choose to play against an AI or another human. In order to win the game you must win at least 2 of the 3 rounds of RPSLS.");
    const modePrompt = require("prompt-sync")();
    const modeChoice = modePrompt("Please select a mode to play against.'human','ai','quit'").toLowerCase;
    switch(modeChoice)
    {
        case "human":
        console.log("You've selected Human.");
        break;

        case "ai":
            console.log("You've selected Ai.");
        break;
        case "quit":
        break;
        default:
        console.log("Invalid Input, Please try again.");
        break;
        
    }
   
}

    function gestureSelection(){
    const gesturePrompt = require("prompt-sync")();
    const gestureSelection = gesturePrompt("Please select a gesture to throw down.'Rock,'Scissors','Paper','Lizard','Spock'").toLowerCase;
    }










module.exports.welcomeMenu = welcomeMenu;