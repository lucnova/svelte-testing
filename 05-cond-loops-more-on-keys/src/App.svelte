<script>
	let passwords = [];
	let pswd = "";

	const handleAddPassword = () => {
		passwords = [...passwords, pswd];
	};

	const handleRemovePass = (passIndex) => {
		passwords = passwords.filter((p, i) => passIndex !== i );
	};
</script>

<h1>Assignment</h1>

<div>
	<p>1)</p>
	<input type="password" bind:value={pswd} />
	{#if pswd.length < 5}
		<p>Too short</p>
	{:else if pswd.length > 10}
		<p>Too long</p>
	{:else}
		<p>{pswd}</p>
	{/if}

	<button on:click={handleAddPassword}>Add Password</button>
</div>

<div>
	<p>Passwords:</p>

	<ul>
		{#each passwords as pass, i (pass + i)}
			<li on:click={handleRemovePass(i)}>{pass}</li>
		{/each}
	</ul>
</div>

<div>
	<p>Solve these tasks.</p>
	<ol>
		<li>
			Add a password input field and save the user input in a variable.
		</li>
		<li>
			Output "Too short" if the password is shorter than 5 characters and
			"Too long" if it's longer than 10.
		</li>
		<li>
			Output the password in a paragraph tag if it's between these
			boundaries.
		</li>
		<li>Add a button and let the user add the passwords to an array.</li>
		<li>
			Output the array values (= passwords) in a unordered list (ul tag).
		</li>
		<li>Bonus: If a password is clicked, remove it from the list.</li>
	</ol>
</div>
