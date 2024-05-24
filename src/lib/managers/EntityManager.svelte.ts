import { Bomb } from '$lib/entities/Bomb.svelte';
import { Player } from '$lib/entities/Player.svelte';

export class EntityManager {
    entities = $state({});

    constructor() {
        const player = new Player([32, 32]);
        this.entities = {
            [player.id]: player
        }
    }

    update = (stage) => {
        Object.values(this.entities).forEach(entity => entity.update(stage))
    }

    spawnBomb = (position, timeManager) => {
        // if (this.bombs.length > 1) return

        const bomb = new Bomb(position)
        this.entities[bomb.id] = bomb

        timeManager.setTimer(bomb.id, 3000, () => {
            console.log('TIME?');

            delete this.entities[bomb.id]
        })
    }
}
