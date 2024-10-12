<script>
	import { goto } from '$app/navigation';
	import pb from '$lib/pocketbase';

	let email = '';
	let password = '';
	let passwordConfirm = '';
	let error = '';

	async function register() {
		if (password !== passwordConfirm) {
			error = "Passwords don't match";
			return;
		}

		try {
			await pb.collection('users').create({
				email,
				password,
				passwordConfirm
			});
			goto('/login');
		} catch (err) {
			error = err.message;
		}
	}
</script>

<svelte:head>
	<title>Register</title>
</svelte:head>

<div class="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
	<h1 class="text-2xl font-bold mb-6">Register</h1>
	{#if error}
		<p class="text-red-500 mb-4">{error}</p>
	{/if}
	<form on:submit|preventDefault={register} class="space-y-4">
		<div>
			<label for="email" class="block mb-1">Email:</label>
			<input type="email" id="email" bind:value={email} required class="w-full px-3 py-2 border rounded-md" />
		</div>
		<div>
			<label for="password" class="block mb-1">Password:</label>
			<input type="password" id="password" bind:value={password} required class="w-full px-3 py-2 border rounded-md" />
		</div>
		<div>
			<label for="passwordConfirm" class="block mb-1">Confirm Password:</label>
			<input type="password" id="passwordConfirm" bind:value={passwordConfirm} required class="w-full px-3 py-2 border rounded-md" />
		</div>
		<button type="submit" class="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600">Register</button>
	</form>
	<p class="mt-4 text-center">Already have an account? <a href="/login" class="text-blue-500 hover:underline">Login</a></p>
</div>