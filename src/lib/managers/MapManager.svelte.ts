import { Player } from '$lib/entities/Player.svelte';
import { generateStaticMap } from '$lib/map';

export class MapManager {
    map = $state(generateStaticMap(20));

    constructor() {
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
