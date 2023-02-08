// this is the code used to run the game

class Game{

    constructor(){
        this.p1Score = 0, 
        this.p2Score = 0,
        this.intervalID = 0
        this.player1 = document.querySelector("#p1")
        this.player2 = document.querySelector("#p2")
    }

    // starts the game, reseting all values and setting the eventListener and the setInterval
    play(){
        
        // reset the scores
        this.p1Score = 0
        this.p2Score = 0

        // render scores
        ctx.fillStyle = "rgb(200,0,0,0.5)"
        ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)  
        this.renderScores()

        // get ball speed defined by user
        let SPEED_BALL = document.querySelector("input").value

        // create the new object that will be used to play
        const ball = new Ball(RADIUS,SPEED_BALL)
        const paddleLeft = new Paddle(PADDLE_LENGTH,"left");
        const paddleRight = new Paddle(PADDLE_LENGTH,"rigth");

        // add event listener to control the paddles
        document.addEventListener('keydown', event => {
            switch(event.key){
                case "w": paddleLeft.moveUp(); break
                case "d": paddleLeft.moveRight(); break
                case "s": paddleLeft.moveDown(); break
                case "a": paddleLeft.moveLeft(); break
                   
                case "i": paddleRight.moveUp(); break
                case "l": paddleRight.moveRight(); break
                case "k": paddleRight.moveDown(); break
                case "j": paddleRight.moveLeft(); break
            }
        });

        // create the interval and run the game
        this.intervalID = setInterval(() => {
            
            // render
            this.renderBackground()
            paddleLeft.render()
            paddleRight.render()
            ball.render()

            // move the ball and return true if player1 scored, false if player2 scored or undefined if no one scored 
            let isScore = ball.moveBall(paddleLeft,paddleRight)

            // check 
            if (isScore==undefined) {}
            else if (isScore){
                this.addScore("p1")

            } else {
                this.addScore("p2")
            }
        }, 50);
    }

    // method to update the scores
    addScore(player) {
        if(player == "p1"){ this.p1Score+=1}
        else { this.p2Score+=1}
        this.renderScores()   

    };


    // render methods
    renderScores(){

        this.player1.innerHTML=this.p1Score;
        this.player2.innerHTML=this.p2Score;
    }


    renderBackground(){
        ctx.fillStyle = "white"
        ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
        ctx.fillStyle = "rgb(78,125,237)"
        ctx.fillRect(10,10,CANVAS_WIDTH-20,CANVAS_HEIGHT/2-11)
        ctx.fillRect(10,CANVAS_HEIGHT/2+1,CANVAS_WIDTH-20,CANVAS_HEIGHT/2-10)
        
        ctx.beginPath();
        ctx.setLineDash([4, 6]);
        ctx.lineWidth = 6;
        ctx.moveTo(CANVAS_WIDTH/2,2);
        ctx.lineTo(CANVAS_WIDTH/2, CANVAS_HEIGHT);
        ctx.stroke();
    }

}