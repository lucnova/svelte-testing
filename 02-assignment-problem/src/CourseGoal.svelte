<script>
	export let courseGoal;
</script>

<div>
	<h1 class:goal_highlight={courseGoal.includes('!')}>{courseGoal}</h1>
</div>

<style>
	.goal_highlight {
		color: red;
	}
</style>
