import { ControlKeys } from "$lib/managers/KeyboardManager.svelte";

export class Entity {
    position = $state(null);

    constructor(position) {
        this.position = position;
        // this.pos = text;
    }

    get boundingBox() {
        const [x, y] = this.position;

        return {
            left: x,
            right: x + 32,
            top: y,
            bottom: y + 32
        };
    }
}
