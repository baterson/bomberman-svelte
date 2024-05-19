import { MapManager } from './managers/MapManager.svelte';
import { EntityManager } from './managers/EntityManager.svelte';
import { KeyboardManager } from './managers/KeyboardManager.svelte';

const FRAME_DURATION = 1000 / 60;

export class Stage {
    constructor() {
        this.mapManager = new MapManager();
        this.keyboardManager = new KeyboardManager();
        this.entityManager = new EntityManager();

        this.keyboardManager.listenToEvents();

        this.lastFrameTime = 0;
        this.time = 0; // in seconds

        requestAnimationFrame(this.update);
    }

    update = (timestamp) => {
        if (timestamp - this.lastFrameTime >= FRAME_DURATION) {
            this.deltaTime = (timestamp - this.lastFrameTime) / 1000; // Convert to seconds
            this.time += this.deltaTime;
            this.lastFrameTime = timestamp;

            this.entityManager.update(this);
        }

        requestAnimationFrame(this.update);
    }

    get managers() {
        return {
            keyboardManager: this.keyboardManager,
            mapManager: this.mapManager,
            entityManager: this.entityManager,
        }
    }
}
