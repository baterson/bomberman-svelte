<script>
	import { spritePositions } from '$lib/spritePositions';
	import Sprite from '$lib/components/Sprite.svelte';

	const { mapManager } = $props();

	const tileSize = 32;
</script>

{#each mapManager.map as row, y}
	{#each row as cell, x}
		{#if cell === 1}
			<Sprite
				name="still"
				position={[x * tileSize, y * tileSize]}
				spritePosition={spritePositions.wall.still}
			/>
		{/if}
		{#if cell === 0}
			<Sprite
				name="brick"
				position={[x * tileSize, y * tileSize]}
				spritePosition={spritePositions.wall.brick}
			/>
		{/if}
	{/each}
{/each}
