import { Player } from '$lib/entities/Player.svelte';

export class EntityManager {
    entities = $state({});
    staticEntities = $state({});

    constructor() {
        const player = new Player([32, 32]);

        this.entities = {
            [player.displayName]: player,
        }
    }

    update = (stage) => {
        Object.values(this.entities).forEach(entity => {
            entity.update(stage);
        });
    }
}
