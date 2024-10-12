<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import pb from '$lib/pocketbase';

	onMount(() => {
		pb.authStore.clear();
		goto('/');
	});
</script>

<svelte:head>
	<title>Logout</title>
</svelte:head>

<p class="text-center text-xl mt-8">Logging out...</p>