import { EntityManager } from "./EntityManager.svelte";
import { KeyboardManager } from "./KeyboardManager.svelte";
import { MapManager } from "./MapManager.svelte";

const keyboardManager = new KeyboardManager();
const entityManager = new EntityManager(keyboardManager);
const mapManager = new MapManager();

export {
    mapManager,
    entityManager,
    keyboardManager
}