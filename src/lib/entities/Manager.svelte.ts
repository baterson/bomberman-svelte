import { Player } from './Player.svelte';
import { Brick } from './Brick.svelte';
import { Still } from './Still.svelte';
import { Bomb } from './Bomb.svelte';

export class Manager {
    entities = $state({});
    staticEntities = $state({});

    constructor() {
        const player = new Player();

        this.entities = {
            [player.displayName]: player,
        }

        this.staticEntities = {
            bricks: [new Brick([0, 50]), new Brick([200, 200])],
            bombs: [new Bomb([20, 150]), new Bomb([250, 0])],
            still: [new Still([40, 80]), new Still([300, 300])],
        }
    }
}


