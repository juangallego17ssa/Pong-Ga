// defines some global variables that will be used by different classes
const PADDLE_WIDTH = 15
const RADIUS = 10;
const PADDLE_LENGTH = 65
const SPEED_PADDLE = 10

// create the canvas
const canvas = document.querySelector("canvas")
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width
const CANVAS_HEIGHT = canvas.height


// initialize the object Game and render the backgroud
const game = new Game();
game.renderBackground()


// Program the button to start the game
const button = document.querySelector("button")
button.addEventListener("click", (event) => {
    clearInterval(game.intervalID)
    game.play()
})



// Cemetery

// function startAnimation(){
//     ctx.scale(2,2)
//     renderBackground()
//     renderBall(ball)
// }



