<script>
	import Sprite from '$lib/components/Sprite.svelte';
	import Map from '$lib/components/Map.svelte';
	import { Stage } from '$lib/Stage.svelte';
	import { onMount } from 'svelte';

	let stage;

	onMount(() => {
		stage = new Stage();
	});
</script>

<div class="container">
	{#if stage}
		<Map mapManager={stage.managers.mapManager} />
		<Sprite
			name="player"
			spritePosition={[0, 0]}
			position={stage.managers.entityManager.entities.player.position}
		/>
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
