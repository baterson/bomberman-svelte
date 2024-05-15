<script>
	import Sprite from '$lib/components/Sprite.svelte';
	import Map from '$lib/components/Map.svelte';
	import { entityManager, keyboardManager } from '$lib/managers';
	import { onMount } from 'svelte';

	onMount(() => {
		keyboardManager.listenToEvents();

		entityManager.update();
	});
</script>

<div class="container">
	<Map />
	<Sprite name="player" spritePosition={[0, 0]} position={entityManager.entities.player.position} />
</div>

<style>
	.container {
		background-color: rgb(78, 133, 37);
		width: 620px;
		height: 620px;
		position: relative;
	}
</style>
