export const spritePositions = {
    player: {
        left: [[64, 0], [32, 0], [0, 0]],
        right: [
            [0, 96],
            [32, 96],
            [64, 96]
        ],
        up: [
            [0, 128],
            [32, 128],
            [64, 128]
        ],
        down: [
            [0, 160],
            [32, 160],
            [64, 160]
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