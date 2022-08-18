<script>
import { prevent_default } from 'svelte/internal';

	import ContactCard from "./ContactCard.svelte";

	let name = "Luc";
	let title = "";
	let image = "";
	let description = "";

	let contactData = null;
	let contacts = [];

	let formState = "empty";

	const handleAddContact = (e) => {
		if (
			name.trim().length === 0 ||
			title.trim().length === 0 ||
			image.trim().length === 0 ||
			description.trim().length === 0
		) {
			formState = "invalid";
			return;
		}
		contactData = {
			id: new Date().getSeconds(),
			name,
			title,
			image,
			description,
		};
		// * ACTUALIZAR COMO ESTADO DE REACT
		contacts = [...contacts, { ...contactData }];
		formState = "valid";
	};

	const handleDeleteFirstContact = () => {
		contacts = contacts.slice(1);
	};

	const handleDeleteLastContact = () => {
		contacts = contacts.slice(0, -1);
	};
</script>

<div id="form">
	<div class="form-control">
		<label for="userName">User Name</label>
		<input type="text" bind:value={name} id="userName" />
	</div>
	<div class="form-control">
		<label for="jobTitle">Job Title</label>
		<input type="text" bind:value={title} id="jobTitle" />
	</div>
	<div class="form-control">
		<label for="image">Image URL</label>
		<input type="text" bind:value={image} id="image" />
	</div>
	<div class="form-control">
		<label for="desc">Description</label>
		<textarea rows="3" bind:value={description} id="desc" />
	</div>
</div>

<!-- EVENT MODIFIERS -->
<!--
	Se pueden añadir modificadores de evento al lado, separando con un "|".
	Ej.
	"|once" => Se ejecutará una vez y el evento se remueve.
	"|stopPropagation" => Para evitar propagación de evento
	"|preventDefault" => Para evitar el comportamiento por defecto (submit) como e.preventDefault();
-->

<button on:click={handleAddContact}>Done</button>

<button on:click={handleDeleteFirstContact}>Delete First Contact</button>
<button on:click={handleDeleteLastContact}>Delete Last Contact</button>

<!-- {#} => BLOCK STATEMENT.  Statement que afecta a multiples líneas del HTML -->
<!--	
	Todo lo que esté entre el statement solo será visto si la condición se cumple 
-->
{#if formState === "invalid"}
	<p>Make sure all the fields are filled.</p>
{:else}
	<p>Fill in the form to proceed.</p>
{/if}

<!-- {#each} => Loop de objetos iterable  -->
<!--	
	Se puede usar un {:else}; cuando el iterable esta vacío
	Equivalente key en React: ([ID])
	{#each [LISTA] as [ITEM], [INDICE] ([IDENTIFICADOR])}
-->
{#each contacts as contact, i (contact.id)}
	<h2># {i + 1}</h2>
	<ContactCard
		userName={contact.name}
		jobTitle={contact.title}
		description={contact.description}
		userImage={contact.image}
	/>
{:else}
	<p>No contacts added as of now...</p>
{/each}

<style>
	#form {
		width: 30rem;
		max-width: 100%;
	}
</style>
