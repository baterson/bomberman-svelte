import { Player } from '$lib/entities/Player.svelte';
import { generateStaticMap } from '$lib/map';
import { checkEntityCollision, positionToIndex } from '$lib/collisions';

export class MapManager {
    map = $state(generateStaticMap());

    checkMapCollision = (entity) => {
        const { boundingBox } = entity;
        const nearbyTiles = this.getNearbyTiles(entity);

        return nearbyTiles.some(tile => {
            return checkEntityCollision(boundingBox, tile.boundingBox);
        });
    }

    getIndex(position) {
        const [x, y] = position;

        return [Math.floor(x / 32), Math.floor(y / 32)]
    }

    adjustPosition = (position) => {
        const [x, y] = position;
        return [Math.floor(x / 32) * 32, Math.floor(y / 32) * 32];
    }

    getTile(position) {
        const [x, y] = this.getIndex(position);

        // todo fix error handling
        try {
            return this.map[y][x];
        } catch {
            return null
        }
    }

    removeTile = (position) => {
        const [x, y] = this.getIndex(position);

        try {
            this.map[y][x] = null;
        } catch {
            return null
        }
    }

    getNearbyTiles = (entity) => {
        const { boundingBox } = entity;
        const [x1, y1] = positionToIndex([boundingBox.left, boundingBox.top]);
        const [x2, y2] = positionToIndex([boundingBox.right, boundingBox.bottom]);

        const tiles = [];
        for (let y = y1; y <= y2; y++) {
            for (let x = x1; x <= x2; x++) {
                if (this.map[y] && (this.map[y][x] === 1 || this.map[y][x] === 0)) {
                    tiles.push({
                        position: [x * 32, y * 32],
                        boundingBox: {
                            left: x * 32,
                            right: x * 32 + 32,
                            top: y * 32,
                            bottom: y * 32 + 32
                        }
                    });
                }
            }
        }
        return tiles;
    }
}
