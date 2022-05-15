<script>
	export let username;
</script>

<div class="contactcard__container">
	<header>
		<div class="contactcard__thumb">
			<img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" alt="Avatar" />
		</div>
		<div class="contactcard__userdata">
			<h1>{username}</h1>
			<h2>Job Title</h2>
		</div>
	</header>
	<div class="contactcard__description">
		<p>A short description</p>
	</div>
</div>

<style>
	.contactcard__container {
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		max-width: 30rem;
		border-radius: 5px;
		margin: 1rem 0;
		background-color: rgba(255, 255, 255, 0.8);
	}

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 7rem;
	}

	.contactcard__thumb {
		width: 33%;
		height: 100%;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.contactcard__userdata {
		width: 67%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	h1 {
		font-size: 1.25rem;
		font-family: 'Roboto Slab', sans-serif;
		margin: 0.5rem 0;
	}

	h2 {
		font-size: 1rem;
		font-weight: normal;
		color: #5a5a5a;
		margin: 0;
		margin-bottom: 0.5rem;
	}

	.contactcard__description {
		border-top: 1px solid #ccc;
		padding: 1rem;
	}
</style>
