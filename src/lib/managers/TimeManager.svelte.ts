const FRAME_DURATION = 1000 / 60;

export class TimeManager {
    time = $state(0)
    deltaTime = 0
    lastFrameTime = 0
    timers = {}

    update = (timestamp) => {
        if (
            (this.deltaTime === 0 && this.lastFrameTime === 0) ||
            (timestamp - this.lastFrameTime >= FRAME_DURATION)
        ) {
            this.deltaTime = (timestamp - this.lastFrameTime) / 1000;
            this.time += this.deltaTime;
            this.lastFrameTime = timestamp;

            this.updateTimers(this.deltaTime);

            return true
        }

        return false
    }

    get timeInSeconds() {
        return Math.floor(this.time);
    }

    updateTimers = (deltaTime) => {
        for (const timer in this.timers) {
            const { duration, elapsed, onFinish } = this.timers[timer];

            if (elapsed >= duration) {
                onFinish();
                delete this.timers[timer];
            } else {
                this.timers[timer].elapsed += deltaTime;
            }
        }
    }

    setTimer = (id, duration, onFinish) => {
        this.timers[id] = {
            duration,
            elapsed: 0,
            onFinish
        }
    }
}
