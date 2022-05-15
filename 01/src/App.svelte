<script>
	import ContactCard from './ContactCard.svelte';

	export let name;
	export let age;

	export let jobTitle;
	export let description;

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

<!-- DATA BINDING: Por defecto  solo es una conexión de 1 lado (Salida) -->
<!-- on:input => realizado cada que se cambie el valor -->
<!-- esto emula el two way data binding -->
<!-- <input type="text" value={name} on:input={handleNameChange} /> -->

<!-- En caso de querer emular ese flow de datos de dos direcciones: -->
<!-- bind => permite el two way data binding -->
<div class="app__row">
	<div class="app__inputgroup">
		<p class="app__inputgroup__title">Contact Data</p>
		<label for="contact_name">Name:</label>
		<input name="contact_name" type="text" bind:value={name} />
		<label for="contact_jobtitle">Job Title:</label>
		<input name="contact_jobtitle" type="text" bind:value={jobTitle} />
		<label for="contact_desc">Description:</label>
		<input name="contact_desc" type="text" bind:value={description} />
	</div>
	<div class="app__actions">
		<h1>Hello {uppercaseName}, I'm {age} years old.</h1>
		<button on:click={decrementAge}>- 1</button>
		<button on:click={incrementAge}>+ 1</button>
	</div>
</div>
<!-- IMPORTANTE: Hay que ser muy especificos con la dirección del flow de datos; no abusar -->
<!-- Para forms esta bien -->

<!-- PARA MANDAR PROPS: -->
<ContactCard username={name} />

<style>
	.app__row {
		display: flex;
		flex-direction: row;
	}

	.app__inputgroup {
		padding: 16px;
		display: flex;
		flex-direction: column;
		width: 80%;
	}

	.app__inputgroup__title {
		color: purple;
		font-size: 1.82rem;
	}

	.app__inputgroup label {
		margin-top: 8px;
		margin-bottom: 8px;
		font-size: 1.32rem;
	}

	.app__inputgroup input {
		padding: 8px;
		font-size: 1.16rem;
		border-radius: 6px;
	}
	h1 {
		color: purple;
	}

	.app__actions {
		padding: 16px;
		display: flex;
		flex-direction: column;
		width: 20%;
	}

	.app__actions button {
		margin-top: 8px;
		margin-bottom: 8px;
		font-size: 1.64rem;
	}
</style>
