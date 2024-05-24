import { SpriteManager } from "$lib/managers/SpriteManager.svelte";
import { Entity } from "./Entity.svelte";

export class Explosion extends Entity {
    label = 'exp'
    layer = 2
    // spriteManager = new SpriteManager('bomb', 3)

    constructor(position, side) {
        super(position);
        console.log('this', this.id, position);

        this.spriteManager = new SpriteManager(`explosion_${side}`, 4, true)
    }

    update = (stage) => {
        this.spriteManager.updateFrame(stage.deltaTime)
    }

    get sprite() {
        return this.spriteManager.sprite
    }
}


