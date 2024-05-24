export const spritePositions = {
    player_left: [[0, 0], [32, 0], [64, 0]],
    player_right: [
        [0, 32],
        [32, 32],
        [64, 32]
    ],
    player_up: [
        [96, 32],
        [128, 32],
        [162, 32]
    ],
    player_down: [
        [96, 0],
        [128, 0],
        [162, 0]
    ],
    player_dead: [[0, 64], [32, 64], [64, 64], [96, 64], [128, 64], [162, 64]],
    bomb: [[0, 96], [32, 96], [64, 96]],
    wall_still: [96, 96],
    wall_brick: [128, 96],

    explosion_end_up: [[64, 128], [228, 128], [64, 292], [228, 292]],

    explosion_center: [[64, 196], [228, 196], [64, 356], [228, 356]],

    explosion_end_down: [[64, 256], [228, 256], [64, 416], [228, 416]],

    explosion_vertical: [[64, 164], [228, 164], [64, 324], [228, 324]],

    explosion_horizontal: [[32, 196], [196, 196], [32, 356], [196, 356]],

    explosion_end_left: [[0, 196], [164, 196], [0, 356], [164, 356]],
    explosion_end_right: [[128, 196], [292, 196], [128, 356], [292, 356]],
}