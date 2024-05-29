<script>
	import AnimatedSprite from '$lib/components/AnimatedSprite.svelte';
	import Map from '$lib/components/Map.svelte';
	import { Stage } from '$lib/Stage.svelte';
	import { onMount } from 'svelte';

	let stage = $state(null);

	onMount(() => {
		stage = new Stage();
		console.log(
			'Object.values(stage.managers.entityManager.entities)',
			Object.values(stage.managers.entityManager.entities)
		);
	});

	const resetStage = () => {
		stage = new Stage();
	};
</script>

<div class="container">
	{#if stage}
		<Map mapManager={stage.mapManager} />
		{#each Object.values(stage.entityManager.entities) as entity}
			<AnimatedSprite
				layer={entity.layer}
				position={entity.position}
				spritePosition={entity.sprite}
			/>
		{/each}
	{/if}
</div>

{#if stage}
	<h1>{stage.timeManager.time}</h1>
{/if}

{#if stage && stage.shouldReset}
	{resetStage()}
{/if}

<style>
	.container {
		background-color: rgb(78, 133, 37);
		width: 620px;
		height: 620px;
		position: relative;
	}
</style>
