import Invader1 from '../assets/images/invader1.png';
import Invader2 from '../assets/images/invader2.png';
import Invader3 from '../assets/images/invader3.png';


export default class Invader {
    constructor(x, y, imageNumber) {
        this.x = x;
        this.y = y;
        this.width = 44;
        this.height = 32;

        this.image = new Image();
        this.image.src = this.getImage(imageNumber);
    }

    getImage(imageNumber) {
        switch (imageNumber) {
            case 1:
                return Invader1;
            case 2:
                return Invader2;
            case 3:
                return Invader3;
            default:
                return Invader1;
        }
    }

    move(xVelocity, yVelocity) {
        this.x += xVelocity;
        this.y += yVelocity;
    }

    draw(ctx) {
        console.log('Drawing invader at', this.x, this.y);
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}
