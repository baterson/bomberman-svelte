import { Entity } from "./Entity.svelte";
import { ControlKeys } from "$lib/managers/KeyboardManager.svelte";

export class Player extends Entity {
    displayName = 'player'
    prevPosition = $state(null)

    move = (direction) => {
        const [x, y] = this.position;
        this.prevPosition = [x, y];

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

    checkInput = (keyboardManager) => {
        const key = keyboardManager.getKey();

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

    update = (entityManager) => {
        const { keyboardManager, mapManager } = entityManager;

        this.checkInput(keyboardManager)

        const isCollideWithMap = mapManager.checkMapCollision(this);

        console.log('isCollideWithMap', isCollideWithMap);
        if (isCollideWithMap) {
            this.position = this.prevPosition;
        }
    }
}


