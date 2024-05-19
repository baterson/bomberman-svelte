<script>
	const { spritePosition, position, z } = $props();
</script>

<div
	class="sprite"
	style="z-index: {z}; background-position: {-spritePosition[0]}px {-spritePosition[1]}px; left: {position[0]}px; top: {position[1]}px;"
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
