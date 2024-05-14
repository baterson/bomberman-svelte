<script>
	export let name;
	export let position;
</script>

<div class="sprite-container">
	<div class="sprite" style="background-position: {-position[0]}px {-position[1]}px;"></div>
</div>

<style>
	.sprite-container {
		display: flex;
		flex-direction: row;
	}

	.sprite {
		width: 32px;
		height: 32px;
		background-image: url('/sprites.png');
		background-size: auto;
	}
</style>
