
class Player {
    constructor(name){
    this.name = name;
    this.listOfGestures = ["rock","paper","scissors","lizard","spock"];
    this.gestureSelection;
    this.score = 0;
    }
   
}

module.exports = Player;