//Some constants
const GAME_CANVAS = document.getElementById("gameCanvas");
const GAME_CONTEXT = gameCanvas.getContext("2d");
const GAME_WIDTH = 800;
const GAME_HEIGHT = 500;

/**
 * Main class to handle the main game loop
 * Setup of basic screen size and stuffs
 */
class Game{
    constructor(canvas,context){
        this.gameCanvas = canvas
        this.gameContext = context
    }

    startGame(){
        console.log("startGame");
    }

    stopGame(){
        console.log("stopGame");
    }

    clearScreen(){
        console.log("clearScreen");
        this.gameContext.clearRect(0,0,this.gameCanvas.width,this.gameCanvas.height)
    }

    setupScreenSize(){
        this.gameCanvas.width = GAME_WIDTH;
        this.gameCanvas.height = GAME_HEIGHT;
    }

    setupGameLoop(){
        console.log("setupGameLoop");
        this.gameContext.font="20px Helvetica";
        this.gameContext.fillStyle = "black";
        this.gameContext.textAlign = "center";
        this.gameContext.fillText("Coming Soon", this.gameCanvas.width/2, this.gameCanvas.height/2);
    }
}

var newGame = new Game(GAME_CANVAS,GAME_CONTEXT)
newGame.startGame()
newGame.setupScreenSize()
newGame.setupGameLoop()
