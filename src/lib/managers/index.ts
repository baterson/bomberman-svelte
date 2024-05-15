import { EntityManager } from "./EntityManager.svelte";
import { KeyboardManager } from "./KeyboardManager.svelte";

const keyboardManager = new KeyboardManager();
const entityManager = new EntityManager(keyboardManager);

export {
    entityManager,
    keyboardManager
}