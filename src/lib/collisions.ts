export const positionToIndex = (position) => {
    const [x, y] = position;
    return [Math.floor(x / 32), Math.floor(y / 32)]
}

export const checkMapCollision = (map, entity) => {
    const { boundingBox } = entity

    const [x1, y1] = positionToIndex([boundingBox.left, boundingBox.top]);
    const [x2, y2] = positionToIndex([boundingBox.right, boundingBox.bottom]);

    for (let y = y1; y <= y2; y++) {
        for (let x = x1; x <= x2; x++) {
            if (map[y][x] === 1 || map[y][x] === 0) {
                return true;
            }
        }
    }
    return false;
};

export const checkEntityCollision = (entity, otherEntity) => {
    const { boundingBox: bb1 } = entity
    const { boundingBox: bb2 } = otherEntity

    return !(bb1.left >= bb2.right || bb1.right <= bb2.left || bb1.top >= bb2.bottom || bb1.bottom <= bb2.top);
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