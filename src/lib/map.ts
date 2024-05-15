export function generateStaticMap(size) {
    const map = [];

    // Initialize the map with null values
    for (let y = 0; y < size; y++) {
        const row = [];
        for (let x = 0; x < size; x++) {
            row.push(null);
        }
        map.push(row);
    }

    // Fill the edges with Still tiles
    for (let i = 0; i < size; i++) {
        map[0][i] = 1;
        map[size - 1][i] = 1;
        map[i][0] = 1;
        map[i][size - 1] = 1;
    }

    // Randomly place Brick tiles inside the map, leaving the edges as Still tiles
    for (let y = 1; y < size - 1; y++) {
        for (let x = 1; x < size - 1; x++) {
            map[y][x] = Math.random() < 0.3 ? 0 : null; // 30% chance for Brick, 70% for empty
        }
    }

    return map;
}
