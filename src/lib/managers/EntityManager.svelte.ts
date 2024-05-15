import { Player } from '$lib/entities/Player.svelte';

export class EntityManager {
    entities = $state({});
    staticEntities = $state({});

    constructor(keyboardManager) {
        this.keyboardManager = keyboardManager;

        const player = new Player();

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
