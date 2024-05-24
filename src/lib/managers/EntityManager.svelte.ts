import { Bomb } from '$lib/entities/Bomb.svelte';
import { Explosion } from '$lib/entities/Explosion.svelte';
import { Player } from '$lib/entities/Player.svelte';
import { BrickExplosion } from '$lib/entities/BrickExplosion.svelte';

export class EntityManager {
    entities = $state({});

    constructor() {
        const player = new Player([32, 32]);
        this.registerEntity(player)
    }

    update = (stage) => {
        Object.values(this.entities).forEach(entity => entity.update(stage))
    }

    registerEntity = (entity) => {
        this.entities[entity.id] = entity
    }

    removeEntity = (entity) => {
        delete this.entities[entity.id]
    }

    spawnBomb = (position, timeManager, mapManager) => {
        const tile = mapManager.getTile(position)
        if (tile) return

        const bomb = new Bomb(mapManager.adjustPosition(position))
        this.registerEntity(bomb)

        timeManager.setTimer(bomb.id, 0.3, () => {
            this.spawnExplosion(bomb.boundingBox.middle, 2, mapManager, timeManager)

            delete this.entities[bomb.id]
        })
    }

    spawnExplosion = (_p, radius = 3, mapManager, timeManager) => {
        const position = mapManager.adjustPosition(_p)

        this.spawnExplosionPart(position, 'center');

        const [x, y] = position;

        const directions = [
            { x: 1, y: 0, side: 'horizontal', end: 'end_right' },
            { x: -1, y: 0, side: 'horizontal', end: 'end_left' },
            { x: 0, y: 1, side: 'vertical', end: 'end_down' },
            { x: 0, y: -1, side: 'vertical', end: 'end_up' },
        ];

        directions.forEach(direction => {
            for (let i = 1; i <= radius; i++) {
                const newPos = [
                    x + direction.x * i * 32,
                    y + direction.y * i * 32
                ];

                if (i === radius) {
                    this.spawnExplosionPart(newPos, direction.end);
                } else {
                    this.spawnExplosionPart(newPos, direction.side);
                }
            }
        });
    }

    spawnExplosionPart = (position, side) => {
        const explosion = new Explosion(position, side);
        this.registerEntity(explosion);
    }

    spawnBrickExplosion = (position) => {
        const brick = new BrickExplosion(position);
        this.registerEntity(brick);
    }
}
