<script>
	import { spritePositions } from '$lib/spritePositions';

	const { entity, time } = $props();
	let frame = $state(0);
	let lastFrameTime = $state(0);
	const frameDuration = 0.1;
	console.log('entity.frame', entity.frame);
	const sprite = spritePositions[entity.label];
	const _sp = $derived(sprite[entity.direction][entity.frame]);

	console.log('sp', _sp);
</script>

<div
	class="sprite"
	style="background-position: {-_sp[0]}px {-_sp[1]}px; left: {entity.position[0]}px; top: {entity
		.position[1]}px;"
></div>

<style>
	.sprite {
		position: absolute;
		width: 32px;
		height: 32px;
		background-image: url('/sprites.png');
		background-size: auto;
	}
</style>
