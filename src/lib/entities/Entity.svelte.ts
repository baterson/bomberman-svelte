export class Entity {
    position = $state(null);

    constructor(position) {
        this.id = Date.now() - Math.floor(Math.random() * 100)
        this.position = position;
    }

    update = (stage) => { }

    get boundingBox() {
        const [x, y] = this.position;

        return {
            left: x,
            right: x + 32,
            top: y,
            bottom: y + 32
        };
    }
}
