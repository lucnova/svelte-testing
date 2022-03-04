<script>
	export let name;
	export let age;

	// * Reactive Variables: Dollar Sign => Equivalente a los efectos de React.
	$: uppercaseName = name.toUpperCase();
	$: console.log(name);

	const incrementAge = () => {
		age += 1;
	};
	const decrementAge = () => {
		age -= 1;
	};
</script>

<h1>Hello {uppercaseName}, I'm {age} years old.</h1>
<button on:click={decrementAge}>- 1</button>
<button on:click={incrementAge}>+ 1</button>

<style>
	h1 {
		color: purple;
	}
</style>
