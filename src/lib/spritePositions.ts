export const spritePositions = {
    player: {
        left: [[0, 0], [32, 0], [64, 0]],
        right: [
            [0, 32],
            [32, 32],
            [64, 32]
        ],
        up: [
            [96, 32],
            [128, 32],
            [162, 32]
        ],
        down: [
            [96, 0],
            [128, 0],
            [162, 0]
        ]
    },
    bomb: {
        s: [0, 192],
        m: [32, 192],
        l: [64, 192]
    },
    wall: {
        still: [96, 96],
        brick: [128, 96],
        brickExplosion: [[96, 164],]
    },
}