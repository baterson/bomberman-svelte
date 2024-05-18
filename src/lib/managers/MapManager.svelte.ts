import { Player } from '$lib/entities/Player.svelte';
import { generateStaticMap } from '$lib/map';
import { checkMapCollision } from '$lib/collisions';

export class MapManager {
    map = $state(generateStaticMap(20));

    checkMapCollision = (entity) => {
        return checkMapCollision(this.map, entity);
    }

    update = () => {
        Object.values(this.entities).forEach(entity => {
            entity.update(this);
        });

        requestAnimationFrame(this.update);
    }
}
