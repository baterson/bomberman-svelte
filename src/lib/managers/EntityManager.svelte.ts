import { Bomb } from '$lib/entities/Bomb.svelte';
import { Player } from '$lib/entities/Player.svelte';

export class EntityManager {
    entities = $state({});
    bombs = $state([]);

    constructor() {
        this.player = new Player([32, 32]);
        this.bombs = []
    }

    update = (stage) => {
        this.player.update(stage)
        this.bombs.forEach(bomb => bomb.update(stage))
    }

    spawnBomb = (position, timeManager) => {
        if (this.bombs.length > 1) return

        const bomb = new Bomb(position)
        this.bombs.push(bomb)

        timeManager.setTimer(bomb.id, 3000, () => {
            this.bombs = this.bombs.filter(b => b.id !== bomb.id)
        })
    }
}
