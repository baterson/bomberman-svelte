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
</script>

<div class="container">
	{#if stage}
		<Map mapManager={stage.managers.mapManager} />
		<AnimatedSprite
			z={5}
			position={stage.managers.entityManager.player.position}
			spritePosition={stage.managers.entityManager.player.sprite}
		/>

		{#each stage.managers.entityManager.bombs as bomb}
			<AnimatedSprite z={1} position={bomb.position} spritePosition={bomb.sprite} />
		{/each}
	{/if}
</div>

{#if stage}
	<h1>{stage.managers.timeManager.timeInSeconds}</h1>
{/if}

<style>
	.container {
		background-color: rgb(78, 133, 37);
		width: 620px;
		height: 620px;
		position: relative;
	}
</style>
