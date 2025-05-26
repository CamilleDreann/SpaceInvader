import '../css/style.scss';
import Space from '../assets/images/space.png';
import InvaderController from './InvaderController.js';

let canvas = document.getElementById('game');
let ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;

const background = new Image();
background.src = Space;


let invaderController = new InvaderController(canvas);

function game() {
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    invaderController.createInvaders();
    invaderController.draw(ctx);
}
setInterval(game, 1000 / 60);
