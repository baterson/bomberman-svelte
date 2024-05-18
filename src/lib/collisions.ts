export const positionToIndex = (position) => {
    const [x, y] = position;
    return [Math.floor(x / 32), Math.floor(y / 32)]
}

export const checkEntityCollision = (box1, box2) => {
    return box1.left < box2.right && box1.right > box2.left &&
        box1.top < box2.bottom && box1.bottom > box2.top;
};

export const checkMapCollision = (map, entity, forgivenessDistance = 3) => {
    const { boundingBox } = entity;

    const corners = [
        [boundingBox.left, boundingBox.top],
        [boundingBox.right, boundingBox.top],
        [boundingBox.left, boundingBox.bottom],
        [boundingBox.right, boundingBox.bottom]
    ];

    const collision = corners.some(corner => {
        const [x, y] = positionToIndex(corner);
        return map[y] && (map[y][x] === 1 || map[y][x] === 0);
    });

    if (collision) {
        const nearCorner = corners.some(corner => {
            const [x, y] = positionToIndex(corner);
            const dx = corner[0] % 32;
            const dy = corner[1] % 32;
            return (dx < forgivenessDistance || dx > (32 - forgivenessDistance)) &&
                (dy < forgivenessDistance || dy > (32 - forgivenessDistance));
        });

        if (nearCorner) {
            return false;
        }
    }

    return collision;
};

export const isCollideWithMap = (map, position) => {
    const [x, y] = positionToIndex(position);
    return map[y][x] === 1 || map[y][x] === 0;
}

export const isCollideWithEntity = (entity, otherEntity) => {
    const [x1, y1] = entity.position.map(Math.floor);
    const [x2, y2] = otherEntity.position.map(Math.floor);
    return x1 === x2 && y1 === y2;
}