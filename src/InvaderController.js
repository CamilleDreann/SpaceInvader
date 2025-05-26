import Invader from "./invader";

export default class InvaderController {
    invadersMap = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1],
        [2, 2, 2, 3, 3, 3, 2, 2, 2],
        [2, 2, 2, 3, 3, 3, 2, 2, 2],
        [1, 1, 1, 1, 1, 1, 1, 1, 1],
        [2, 2, 2, 2, 2, 2, 2, 2, 2]
    ];
    invaderRows = [
        [], [], [], [], [], []
    ];

    constructor(canvas) {
        this.canvas = canvas;
    }

    createInvaders() {
    this.invadersMap.forEach((row, rowIndex) => {
        this.invaderRows[rowIndex] = [];

        row.forEach((invaderNumber, invaderIndex) => {
        if (invaderNumber > 0) {
            this.invaderRows[rowIndex].push(
            new Invader(invaderIndex * 50, rowIndex * 35, invaderNumber)
            );
        }
        });
    });
    }

    drawInvaders(ctx) {
        this.invaderRows.flat().forEach((invader)=>{
            invader.draw(ctx);
        })
    }

    draw(ctx) {
        this.drawInvaders(ctx);
    }
}