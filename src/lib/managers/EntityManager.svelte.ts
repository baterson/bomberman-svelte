import { Player } from '$lib/entities/Player.svelte';

export class EntityManager {
    entities = $state({});
    staticEntities = $state({});

    constructor(keyboardManager, mapManager) {
        this.keyboardManager = keyboardManager;
        this.mapManager = mapManager;

        const player = new Player([100, 100]);

        this.entities = {
            [player.displayName]: player,
        }
    }

    update = () => {
        Object.values(this.entities).forEach(entity => {
            entity.update(this);
        });

        requestAnimationFrame(this.update);
    }
}
