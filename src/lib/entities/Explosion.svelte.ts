import { SpriteManager } from "$lib/managers/SpriteManager.svelte";
import { Entity } from "./Entity.svelte";

export class Explosion extends Entity {
    // todo name to entity
    name = 'explosion'
    layer = 2
    // spriteManager = new SpriteManager('bomb', 3)

    constructor(position, side) {
        super(position);
        // console.log('this', this.id, position);

        this.spriteManager = new SpriteManager(`explosion_${side}`, 4, 0.2, true)
    }

    update = (stage) => {
        const { timeManager, mapManager, entityManager } = stage.managers;

        if (this.spriteManager.isFinished) {
            return entityManager.removeEntity(this)
        }

        const tile = mapManager.getTile(this.boundingBox.middle)

        if (tile === 1 || tile === 0) {
            entityManager.spawnBrickExplosion(this.origin)
            mapManager.removeTile(this.boundingBox.middle)
        }
        // const

        this.spriteManager.updateFrame(stage.deltaTime)
    }
}


