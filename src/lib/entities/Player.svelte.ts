import { ControlKeys } from "$lib/managers/KeyboardManager.svelte";

export class Player {
    displayName = 'player'
    position = $state([100, 100]);

    constructor() {
        // this.pos = text;
    }

    move = (direction) => {
        const [x, y] = this.position;

        if (direction === 'up') {
            this.position = [x, y - 10];
        } else if (direction === 'right') {
            this.position = [x + 10, y];
        } else if (direction === 'down') {
            this.position = [x, y + 10];
        } else if (direction === 'left') {
            this.position = [x - 10, y];
        }
    }

    update = (entityManager) => {
        const key = entityManager.keyboardManager.getKey();

        if (key === ControlKeys.ArrowUp) {
            this.move('up');
        } else if (key === ControlKeys.ArrowRight) {
            this.move('right');
        } else if (key === ControlKeys.ArrowDown) {
            this.move('down');
        } else if (key === ControlKeys.ArrowLeft) {
            this.move('left');
        }
    }
}


