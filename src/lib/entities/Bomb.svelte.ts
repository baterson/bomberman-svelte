import { SpriteManager } from "$lib/managers/SpriteManager.svelte";
import { Entity } from "./Entity.svelte";

export class Bomb extends Entity {
    label = 'bomb'
    spriteManager = new SpriteManager('bomb', 3)

    update = (stage) => {
        this.spriteManager.updateFrame(stage.deltaTime)
    }

    get sprite() {
        return this.spriteManager.sprite
    }
}


