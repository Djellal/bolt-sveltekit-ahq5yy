<script>
	import { spring } from 'svelte/motion';

	let count = 0;

	const displayed_count = spring();
	$: displayed_count.set(count);
	$: offset = modulo($displayed_count, 1);

	/**
	 * @param {number} n
	 * @param {number} m
	 */
	function modulo(n, m) {
		// handle negative numbers
		return ((n % m) + m) % m;
	}
</script>

<div class="flex border-t border-b border-black border-opacity-10 my-4">
	<button
		on:click={() => (count -= 1)}
		aria-label="Decrease the counter by one"
		class="w-8 p-0 flex items-center justify-center border-0 bg-transparent text-2xl hover:bg-gray-100"
	>
		<svg aria-hidden="true" viewBox="0 0 1 1" class="w-1/4 h-1/4">
			<path d="M0,0.5 L1,0.5" class="stroke-current stroke-2" />
		</svg>
	</button>

	<div class="w-32 h-16 overflow-hidden text-center relative">
		<div class="absolute w-full h-full" style="transform: translate(0, {100 * offset}%)">
			<strong class="absolute w-full h-full flex items-center justify-center text-4xl font-normal text-orange-500" aria-hidden="true">{Math.floor($displayed_count + 1)}</strong>
			<strong class="absolute w-full h-full flex items-center justify-center text-4xl font-normal text-orange-500">{Math.floor($displayed_count)}</strong>
		</div>
	</div>

	<button
		on:click={() => (count += 1)}
		aria-label="Increase the counter by one"
		class="w-8 p-0 flex items-center justify-center border-0 bg-transparent text-2xl hover:bg-gray-100"
	>
		<svg aria-hidden="true" viewBox="0 0 1 1" class="w-1/4 h-1/4">
			<path d="M0,0.5 L1,0.5 M0.5,0 L0.5,1" class="stroke-current stroke-2" />
		</svg>
	</button>
</div>