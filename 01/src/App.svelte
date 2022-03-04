<script>
	export let name;
	export let age;

	// * REACTIVE VARIABLES: Dollar Sign => Equivalente a los efectos de React.
	// La primer variable indicada del lado derecho es la que hará los cambios automaticamente
	$: uppercaseName = name.toUpperCase();
	$: console.log(age);

	const incrementAge = () => {
		age += 1;
	};
	const decrementAge = () => {
		age -= 1;
	};

	const handleNameChange = (e) => {
		name = e.target.value.trim();
	};
</script>

<h1>Hello {uppercaseName}, I'm {age} years old.</h1>
<button on:click={decrementAge}>- 1</button>
<button on:click={incrementAge}>+ 1</button>
<!-- DATA BINDING: Por defecto  solo es una conexión de 1 lado (Salida) -->
<!-- on:input => realizado cada que se cambie el valor -->
<input type="text" value={name} on:input={handleNameChange} />

<style>
	h1 {
		color: purple;
	}
</style>
