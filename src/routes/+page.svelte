<script>
	import Sprite from '$lib/components/Sprite.svelte';
	import { entityManager, keyboardManager } from '$lib/managers';
	import { tileMap } from '$lib/tilemap.ts';
	import { onMount } from 'svelte';

	onMount(() => {
		keyboardManager.listenToEvents();

		entityManager.update();
	});
</script>

<div>
	<Sprite name="player" spritePosition={[0, 0]} position={entityManager.entities.player.position} />
</div>
