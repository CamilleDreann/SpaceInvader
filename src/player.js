import PlayerSprite from '../assets/images/player.png'

export default class Player {
    constructor(canvas) {
        this.canvas = canvas;
        this.x = canvas.width / 2 - 22;
        this.y = canvas.height - 50;
        this.width = 44;
        this.height = 32;

        this.image = new Image();
        this.image.src = PlayerSprite;
        document.addEventListener('keydown', this.keydown);
        document.addEventListener('keyup', this.keyup);
    }
    rightPressed = false;
    leftPressed = false;

    keydown = (event) => {
        if (event.code == 'ArrowRight') {
            this.rightPressed = true;
        }
        if (event.code == 'ArrowLeft') {
            this.leftPressed = true;
        }
    }
    keyup = (event) => {
        if (event.code == 'ArrowRight') {
            this.rightPressed = false;
        }
        if (event.code == 'ArrowLeft') {
            this.leftPressed = false;
        }
    }

    move(xVelocity) {
        if (this.rightPressed) {
            this.x += xVelocity;
        } else if (this.leftPressed) {
            this.x -= xVelocity;
        }
    }
    collideWithWalls(){
        if (this.x < 0) {
            this.x = 0;
        }
        if (this.x > this.canvas.width - this.width) {
            this.x = this.canvas.width - this.width;
            
        }
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        this.move(3)
        this.collideWithWalls()
    }
}