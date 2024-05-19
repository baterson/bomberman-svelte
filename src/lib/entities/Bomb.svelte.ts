import { Entity } from "./Entity.svelte";

function getAnimationIndex(animationLength, framesTotal, elapsedTime, frameDuration) {
    const totalFramesPassed = elapsedTime / frameDuration;
    return Math.floor(totalFramesPassed) % animationLength;
}

export class Bomb extends Entity {
    label = 'bomb'
    frame = $state(0);
    animationElapsedTime = 0;

    update = (stage) => {
        const { deltaTime } = stage;

        this.animationElapsedTime += deltaTime;
        const framesTotal = 3;
        this.frame = getAnimationIndex(framesTotal, framesTotal, this.animationElapsedTime, 0.1);
    }
}


