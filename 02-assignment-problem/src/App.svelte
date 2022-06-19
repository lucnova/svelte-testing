<script>
	import CourseGoal from './CourseGoal.svelte';

	export let courseGoal;
	$: console.log(courseGoal.includes('!'));
</script>

<h1>Assignment</h1>

<p>Solve these tasks.</p>

<ol>
	<li><strike>Add an input field that allows users to enter a course goal.</strike></li>
	<li><strike>Output the user input in a h1 tag.</strike></li>
	<li><strike>Color the output red (e.g. by adding a class) if it contains at least one exclamation mark</strike>.</li>
	<li><strike>Put the h1 tag + output into a separate component to which you pass the user input</strike></li>
</ol>

<h2>Result</h2>

<div>
	<input bind:value={courseGoal} />

	<CourseGoal {courseGoal} />
</div>
