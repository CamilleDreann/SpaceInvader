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
    }

    move(xVelocity) {
        this.x += xVelocity;

        if (this.x < 0) {
            this.x = 0;
        } else if (this.x + this.width > this.canvas.width) {
            this.x = this.canvas.width - this.width;
        }
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}