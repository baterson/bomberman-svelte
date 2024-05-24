import { spritePositions } from "$lib/spritePositions";

const FRAME_DURATION = 0.1

const getAnimationIndex = (totalFrames, elapsedTime) => {
    const totalFramesPassed = elapsedTime / FRAME_DURATION;

    return Math.floor(totalFramesPassed) % totalFrames;
}

export class SpriteManager {
    frame = $state(0);
    totalFrames = 0
    elapsedTime = 0;

    constructor(spriteName, totalFrames) {
        this.spriteName = spriteName
        this.totalFrames = totalFrames
    }

    get sprite() {
        return spritePositions[this.spriteName][this.frame]
    }

    updateFrame = (deltaTime) => {
        this.elapsedTime += deltaTime;

        this.frame = getAnimationIndex(this.totalFrames, this.elapsedTime);
        return this.sprite[this.frame]
    }
}