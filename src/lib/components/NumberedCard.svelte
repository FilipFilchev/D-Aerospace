<script>
	import { reveal } from '$lib/actions/reveal.js';
	let { n = 1, title = '', body = '', color = '#0ab2f1', delay = 0 } = $props();
	// lime is light → use dark number text on it
	const darkNum = $derived(color.toLowerCase() === '#b5fc59');
</script>

<article class="relative rounded-[20px] bg-[#f4f4f4] p-7 pt-9 text-neutral-900 shadow-xl" use:reveal={{ y: 34, delay }}>
	<span
		class="absolute -top-4 right-6 grid h-11 w-11 place-items-center rounded-full text-lg font-bold shadow-lg"
		style="background:{color}; color:{darkNum ? '#0b0b0c' : '#fff'}"
	>
		{n}
	</span>
	<h3 class="text-xl font-bold leading-tight">{title}</h3>
	<p class="mt-3 text-sm leading-relaxed text-neutral-600">{body}</p>
</article>
