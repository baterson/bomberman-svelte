import { Entity } from "./Entity.svelte";
import { ControlKeys } from "$lib/managers/KeyboardManager.svelte";

function getAnimationIndex(animationLength, framesTotal, elapsedTime, frameDuration) {
    const totalFramesPassed = elapsedTime / frameDuration;
    return Math.floor(totalFramesPassed) % animationLength;
}


export class Player extends Entity {
    label = 'player';
    prevPosition = $state(null);
    direction = $state('right');
    state = $state('idle');
    frame = $state(0);
    animationElapsedTime = 0;
    velocity = 300

    constructor(position) {
        super(position);
        this.prevPosition = position;
    }

    move = (direction, deltaTime) => {
        const [x, y] = this.position;
        this.prevPosition = [x, y];
        this.direction = direction;
        const speed = this.velocity * deltaTime;

        if (direction === 'up') {
            this.position = [x, y - speed];
        } else if (direction === 'right') {
            this.position = [x + speed, y];
        } else if (direction === 'down') {
            this.position = [x, y + speed];
        } else if (direction === 'left') {
            this.position = [x - speed, y];
        }

        this.state = 'move';
    }

    checkInput = (entityManager, keyboardManager, deltaTime) => {
        const key = keyboardManager.getKey();

        if (key === ControlKeys.ArrowUp) {
            this.move('up', deltaTime);
        } else if (key === ControlKeys.ArrowRight) {
            this.move('right', deltaTime);
        } else if (key === ControlKeys.ArrowDown) {
            this.move('down', deltaTime);
        } else if (key === ControlKeys.ArrowLeft) {
            this.move('left', deltaTime);
        } else {
            this.state = 'idle';
        }

        if (key === ControlKeys.Space) {
            entityManager.spawnBomb(this.position)
        }

    }

    getFrontCollisionPoints = () => {
        const { left, right, top, bottom } = this.boundingBox;
        if (this.direction === 'up') {
            return [{ x: left, y: top }, { x: right, y: top }];
        } else if (this.direction === 'right') {
            return [{ x: right, y: top }, { x: right, y: bottom }];
        } else if (this.direction === 'down') {
            return [{ x: left, y: bottom }, { x: right, y: bottom }];
        } else if (this.direction === 'left') {
            return [{ x: left, y: top }, { x: left, y: bottom }];
        }
    }

    forgiveCollision = (tile) => {
        const [point1, point2] = this.getFrontCollisionPoints();
        const tilePos = tile.position;
        const TILE_SIZE = 32;
        let diff;
        const destination = { x: this.prevPosition[0], y: this.prevPosition[1] };

        if (this.direction === 'up' || this.direction === 'down') {
            if (tilePos[0] > point1.x) {
                diff = tilePos[0] - point2.x;
                destination.x = tilePos[0] - 32;
            } else {
                diff = tilePos[0] + TILE_SIZE - point1.x;
                destination.x = tilePos[0] + TILE_SIZE;
            }
        } else if (this.direction === 'left' || this.direction === 'right') {
            if (tilePos[1] > point1.y) {
                diff = tilePos[1] - point2.y;
                destination.y = tilePos[1] - 32;
            } else {
                diff = tilePos[1] + TILE_SIZE - point1.y;
                destination.y = tilePos[1] + TILE_SIZE;
            }
        }

        if (Math.abs(diff) < 6) {
            return destination;
        }

        return undefined;
    }

    update = (stage) => {
        const { keyboardManager, entityManager, mapManager } = stage.managers;
        const { deltaTime } = stage;

        this.checkInput(entityManager, keyboardManager, deltaTime);

        if (this.state === 'move') {
            this.animationElapsedTime += deltaTime;
            const framesTotal = 3;
            this.frame = getAnimationIndex(framesTotal, framesTotal, this.animationElapsedTime, 0.1);
        } else {
            this.frame = 0
            this.animationElapsedTime = 0
        }

        const isCollideWithMap = mapManager.checkMapCollision(this);

        if (isCollideWithMap) {
            const tiles = mapManager.getNearbyTiles(this);
            for (const tile of tiles) {
                const forgivenPosition = this.forgiveCollision(tile);
                if (forgivenPosition) {
                    this.position = [forgivenPosition.x, forgivenPosition.y];
                    return;
                }
            }
            this.position = this.prevPosition;
        }
    }
}
