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
<!-- esto emula el two way data binding -->
<!-- <input type="text" value={name} on:input={handleNameChange} /> -->

<!-- En caso de querer emular ese flow de datos de dos direcciones: -->
<!-- bind => permite el two way data binding -->
<input type="text" bind:value={name} />
<!-- IMPORTANTE: Hay que ser muy especificos con la dirección del flow de datos; no abusar -->
<!-- Para forms esta bien -->

<style>
	h1 {
		color: purple;
	}
</style>
