export class Entity {
    position = $state(null);
    layer = 0

    constructor(position) {
        this.id = Date.now() - Math.floor(Math.random() * 100 * Math.random())
        this.position = position;
    }

    update = (stage) => { }

    get boundingBox() {
        const [x, y] = this.position;

        return {
            left: x,
            right: x + 32,
            top: y,
            bottom: y + 32,
            middle: [x + 16, y + 16]
        };
    }
}
