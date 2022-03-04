<script>
	export let name;
	export let age;

	const incrementAge = () => {
		age += 1;
	};
	const decrementAge = () => {
		age -= 1;
	};
</script>

<h1>Hello {name}, I'm {age} years old.</h1>
<button on:click={decrementAge}>- 1</button>
<button on:click={incrementAge}>+ 1</button>

<style>
	h1 {
		color: purple;
	}
</style>
