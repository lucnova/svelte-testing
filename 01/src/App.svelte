<script>
	import ContactCard from './ContactCard.svelte';

	export let name;
	export let age;

	// * REACTIVE VARIABLES: ($:) => Equivalente a los efectos de React.
	// La primer variable indicada del lado derecho es la que hará los cambios automaticamente
	$: uppercaseName = name.toUpperCase();
	// * NO es necesario instanciar con 'let' o 'const' la variable.
	//	Es un decir: "$:(Recalcula Esto) = (Cuando las Variables Topadas en Línea Cambien)"
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

<!-- PARA MANDAR PROPS: -->
<ContactCard username={name} />

<style>
	h1 {
		color: purple;
	}
</style>
