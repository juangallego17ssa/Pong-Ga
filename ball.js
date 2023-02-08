class Ball{
    constructor(RADIUS, SPEED_BALL) {
        this.radius = RADIUS
        this.position = { x: CANVAS_WIDTH/2, y: CANVAS_HEIGHT/2},
        this.angle = Math.PI/9 + Math.random()*Math.PI/6
        this.speed = {  x: Math.cos(this.angle)*SPEED_BALL*(-1+2*Math.floor(Math.random()*2)), 
                        y: Math.sin(this.angle)*SPEED_BALL*(-1+2*Math.floor(Math.random()*2))}
        this.previousPosition = { x: CANVAS_WIDTH/2, y: CANVAS_HEIGHT/2}
    }

    moveBall(paddleLeft, paddleRight){

        if ((this.position.x+this.radius>=CANVAS_WIDTH) 
            || (this.position.x-this.radius<=0)){
            let scoredByP1 = this.position.x+this.radius>=CANVAS_WIDTH
            this.speed.x = -this.speed.x
            this.position.x += this.speed.x
            this.position.y += this.speed.y
            
            return (scoredByP1)
        }

        if ((this.position.y+this.radius>=CANVAS_HEIGHT) 
            || (this.position.y-this.radius<=0)){
            this.speed.y = -this.speed.y

        }

        if (this.speed.x < 0){
            if (((this.position.x-this.radius)<=(paddleLeft.position.x+PADDLE_WIDTH)) && ((this.position.x-this.radius)>=(paddleLeft.position.x)) && (this.position.y >= paddleLeft.position.y) && (this.position.y <= (paddleLeft.position.y+PADDLE_LENGTH))){
                console.log("yes")
                this.speed.x = -this.speed.x
            }
        }

        if (this.speed.x > 0){
            if (((this.position.x+this.radius)>=(paddleRight.position.x)) && ((this.position.x+this.radius)<=(paddleRight.position.x+PADDLE_WIDTH)) && ((this.position.y) >= (paddleRight.position.y)) && ((this.position.y) <= (paddleRight.position.y + PADDLE_LENGTH))){
                this.speed.x = -this.speed.x
            }
        }

        this.position.x += this.speed.x
        this.position.y += this.speed.y
    }

    render(){
        ctx.beginPath();
        ctx.arc(this.position.x,this.position.y,this.radius,0,2*Math.PI);
        ctx.fillStyle = "rgb(255,164,28)";
        ctx.fill();

    }
}

