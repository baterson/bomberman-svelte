import { MapManager } from './managers/MapManager.svelte';
import { EntityManager } from './managers/EntityManager.svelte';
import { KeyboardManager } from './managers/KeyboardManager.svelte';
import { TimeManager } from './managers/TimeManager.svelte';

export class Stage {
    shouldReset = $state(false)
    timeManager = $state(new TimeManager())

    constructor() {

        this.mapManager = new MapManager();
        this.keyboardManager = new KeyboardManager();
        this.entityManager = new EntityManager();
        // this.timeManager = new TimeManager();

        this.keyboardManager.listenToEvents();

        requestAnimationFrame(this.update);

    }

    reset = () => {
        this.shouldReset = true
    }

    update = (timestamp) => {
        if (this.shouldReset) {
            return
        }

        const readyForNextFrame = this.timeManager.update(timestamp);

        if (readyForNextFrame) {
            this.entityManager.update(this);
        }

        requestAnimationFrame(this.update);
    }

    get deltaTime() {
        return this.timeManager.deltaTime
    }

    // todo: remove managers
    get managers() {
        return {
            timeManager: this.timeManager,
            keyboardManager: this.keyboardManager,
            mapManager: this.mapManager,
            entityManager: this.entityManager,
        }
    }
}
