import { SpriteManager } from "$lib/managers/SpriteManager.svelte";
import { Entity } from "./Entity.svelte";

export class BrickExplosion extends Entity {
    label = 'expB'
    layer = 1

    constructor(position) {
        super(position);

        //todo derive totalsprites from the sprite
        this.spriteManager = new SpriteManager(`brick_explosion`, 6, 0.2, true)
    }

    update = (stage) => {
        if (this.spriteManager.isFinished) {
            stage.managers.entityManager.removeEntity(this)
        }

        this.spriteManager.updateFrame(stage.deltaTime)
    }
}


