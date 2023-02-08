class Paddle{
    constructor(LENGTH, side) {
        this.length = LENGTH
        this.position = { x: side == "left" ? 10 : CANVAS_WIDTH-10-PADDLE_WIDTH, y: CANVAS_HEIGHT/2-LENGTH/2},
        this.side = side
        // this.speed = {x: 4, y: 2}
        // this.previousPosition = { x: CANVAS_WIDTH/2, y: CANVAS_HEIGHT/2}
    }

    calculatePosition(){

    }

    render(){
        ctx.fillStyle = "black"
        ctx.fillRect(this.position.x,this.position.y,PADDLE_WIDTH/7,this.length)
        ctx.fillStyle = "yellow"
        ctx.fillRect(this.position.x+PADDLE_WIDTH/7,this.position.y,PADDLE_WIDTH/7,this.length)
        ctx.fillStyle = "black"
        ctx.fillRect(this.position.x+2*PADDLE_WIDTH/7,this.position.y,3*PADDLE_WIDTH/7,this.length)
        ctx.fillStyle = "yellow"
        ctx.fillRect(this.position.x+5*PADDLE_WIDTH/7,this.position.y,PADDLE_WIDTH/7,this.length)
        ctx.fillStyle = "red"
        ctx.fillRect(this.position.x+6*PADDLE_WIDTH/7,this.position.y,PADDLE_WIDTH/7,this.length)



        ctx.arc(this.position.x,this.position.y,this.radius,0,2*Math.PI);

        ctx.fillStyle = "rgb(255,164,28)";
        ctx.fill();

    }

    
    moveDown(){
        if (this.position.y + this.length < CANVAS_HEIGHT) {
            this.position.y += SPEED_PADDLE
        }
    }

    moveUp(){

        if (this.position.y > 0) {
            this.position.y -= SPEED_PADDLE
        }
    }

    moveLeft(){

        if (this.position.x > ((this.side==="left") ? 0 : CANVAS_WIDTH/2 )) {
            this.position.x -= SPEED_PADDLE
        }
    }

    moveRight(){
        if (this.position.x < ((this.side==="left") ? CANVAS_WIDTH/2 : CANVAS_WIDTH)) {
            this.position.x += SPEED_PADDLE
        }
    }

}