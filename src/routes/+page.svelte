<script>
	import Sprite from '$lib/components/Sprite.svelte';
	import AnimatedSprite from '$lib/components/AnimatedSprite.svelte';
	import Map from '$lib/components/Map.svelte';
	import { Stage } from '$lib/Stage.svelte';
	import { onMount } from 'svelte';
	import { spritePositions } from '$lib/spritePositions';

	let stage;

	onMount(() => {
		stage = new Stage();
	});

	const getPlayerSprite = () => {
		const player = stage.managers.entityManager.player;
		return spritePositions[player.label][player.direction][player.frame];
	};

	const getBombSprite = (bomb) => {
		return spritePositions[bomb.label][bomb.frame];
	};
</script>

<div class="container">
	{#if stage}
		<Map mapManager={stage.managers.mapManager} />
		<AnimatedSprite
			z={5}
			position={stage.managers.entityManager.player.position}
			spritePosition={getPlayerSprite()}
		/>

		{#each stage.managers.entityManager.bombs as bomb}
			<AnimatedSprite z={1} position={bomb.position} spritePosition={getBombSprite(bomb)} />
		{/each}
	{/if}
</div>

<style>
	.container {
		background-color: rgb(78, 133, 37);
		width: 620px;
		height: 620px;
		position: relative;
	}
</style>
