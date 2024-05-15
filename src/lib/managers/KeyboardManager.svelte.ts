export const ControlKeys = {
    ArrowUp: 'ArrowUp',
    ArrowRight: 'ArrowRight',
    ArrowDown: 'ArrowDown',
    ArrowLeft: 'ArrowLeft',
    Space: 'Space',
}


export class KeyboardManager {
    queue

    constructor() {
        this.queue = new Set();
    }

    handleEvent(event: KeyboardEvent) {
        const { code, type } = event;

        if (!ControlKeys[code]) return;

        if (type === 'keydown') {
            this.queue.add(ControlKeys[code]);
        } else {
            this.queue.delete(ControlKeys[code]);
        }
    }

    getKey() {
        return Array.from(this.queue).pop();
    }

    getKeys = () => {
        return Array.from(this.queue);
    }

    listenToEvents() {
        ['keydown', 'keyup'].forEach(eventName => {
            window.addEventListener(eventName, (event: KeyboardEvent) => {
                this.handleEvent(event);
            });
        });
    }
}
