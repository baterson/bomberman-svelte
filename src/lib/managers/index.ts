import { EntityManager } from "./EntityManager.svelte";
import { KeyboardManager } from "./KeyboardManager.svelte";
import { MapManager } from "./MapManager.svelte";

const keyboardManager = new KeyboardManager();
const mapManager = new MapManager();
const entityManager = new EntityManager(keyboardManager, mapManager);

export {
    mapManager,
    entityManager,
    keyboardManager
}