<script>
	import ContactCard from "./ContactCard.svelte";

	let name = "Max";
	let title = "";
	let image = "";
	let description = "";

	let isDone = false;

	const handleAddContact = (e) => {
		isDone = true;
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

<button on:click={handleAddContact}>Done</button>

<!-- {#} => BLOCK STATEMENT.  Statement que afecta a multiples líneas del HTML -->
<!--	
	Todo lo que esté entre el statement solo será visto si la condición se cumple 
-->
{#if isDone}
	<ContactCard
		userName={name}
		jobTitle={title}
		{description}
		userImage={image}
	/>
{/if}

<style>
	#form {
		width: 30rem;
		max-width: 100%;
	}
</style>
