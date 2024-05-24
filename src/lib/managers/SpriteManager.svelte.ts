import { spritePositions } from "$lib/spritePositions";

const FRAME_DURATION = 0.15

const getAnimationIndex = (totalFrames, elapsedTime, frameDuration) => {
    const totalFramesPassed = elapsedTime / frameDuration;

    return Math.floor(totalFramesPassed) % totalFrames;
}

export class SpriteManager {
    frame = $state(0);
    totalFrames = 0
    elapsedTime = 0;

    constructor(spriteName, totalFrames, frameDuration = 0.15, noRepeat = false) {
        this.spriteName = spriteName
        this.totalFrames = totalFrames
        this.frameDuration = frameDuration
        this.noRepeat = noRepeat
    }

    get sprite() {
        return spritePositions[this.spriteName][this.frame]
    }

    get isFinished() {
        return this.frame === this.totalFrames - 1
    }

    updateFrame = (deltaTime) => {
        if (this.noRepeat && this.isFinished) {
            return this.sprite[this.frame]
        }

        this.elapsedTime += deltaTime;

        this.frame = getAnimationIndex(this.totalFrames, this.elapsedTime, this.frameDuration);
        return this.sprite[this.frame]
    }
}