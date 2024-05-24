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
		console.log(
			'Object.values(stage.managers.entityManager.entities)',
			Object.values(stage.managers.entityManager.entities)
		);
	});
</script>

<div class="container">
	{#if stage}
		<Map mapManager={stage.managers.mapManager} />
		{#each Object.values(stage.managers.entityManager.entities) as entity}
			<AnimatedSprite
				layer={entity.layer}
				position={entity.position}
				spritePosition={entity.sprite}
			/>
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
