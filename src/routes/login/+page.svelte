<script>
	import { goto } from '$app/navigation';
	import pb from '$lib/pocketbase';

	let email = '';
	let password = '';
	let error = '';

	async function login() {
		try {
			await pb.collection('users').authWithPassword(email, password);
			goto('/');
		} catch (err) {
			error = err.message;
		}
	}
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<div class="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
	<h1 class="text-2xl font-bold mb-6">Login</h1>
	{#if error}
		<p class="text-red-500 mb-4">{error}</p>
	{/if}
	<form on:submit|preventDefault={login} class="space-y-4">
		<div>
			<label for="email" class="block mb-1">Email:</label>
			<input type="email" id="email" bind:value={email} required class="w-full px-3 py-2 border rounded-md" />
		</div>
		<div>
			<label for="password" class="block mb-1">Password:</label>
			<input type="password" id="password" bind:value={password} required class="w-full px-3 py-2 border rounded-md" />
		</div>
		<button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Login</button>
	</form>
	<p class="mt-4 text-center">Don't have an account? <a href="/register" class="text-blue-500 hover:underline">Register</a></p>
</div>