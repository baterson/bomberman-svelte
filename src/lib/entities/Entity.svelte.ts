export class Entity {
    position = $state(null);
    layer = 0

    constructor(position) {
        this.id = Date.now() - Math.floor(Math.random() * 100 * Math.random())
        this.position = position;
    }

    update = (stage) => { }

    get sprite() {
        return this.spriteManager.sprite
    }

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

    get origin() {
        return [this.boundingBox.left, this.boundingBox.top]
    }

    checkEntityCollisions = (otherEntity) => {
        const box1 = this.boundingBox;
        const box2 = otherEntity.boundingBox;

        return !(box1.left > box2.right ||
            box1.right < box2.left ||
            box1.top > box2.bottom ||
            box1.bottom < box2.top);
    }

}
