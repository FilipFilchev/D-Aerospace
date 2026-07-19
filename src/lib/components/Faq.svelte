<script>
	import { slide } from 'svelte/transition';
	import { reveal } from '$lib/actions/reveal.js';

	let { items = [], title = 'FAQ’s', subtitle = 'Key Questions Answered' } = $props();
	let open = $state(-1);

	const toggle = (i) => (open = open === i ? -1 : i);
</script>

<section class="py-20 sm:py-24">
	<div class="container-x max-w-4xl">
		<div use:reveal>
			<h2 class="display text-3xl sm:text-4xl">{title}</h2>
			<p class="mt-2 text-muted">{subtitle}</p>
		</div>

		<div class="mt-10 space-y-3">
			{#each items as item, i}
				<div class="card overflow-hidden" use:reveal={{ delay: i * 60 }}>
					<button
						class="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
						onclick={() => toggle(i)}
						aria-expanded={open === i}
					>
						<span class="text-[0.98rem] font-medium">{item.q}</span>
						<span
							class="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-line text-accent transition-transform duration-300"
							class:rotate-45={open === i}
						>
							<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
						</span>
					</button>
					{#if open === i}
						<div transition:slide={{ duration: 260 }} class="px-6 pb-6 text-sm leading-relaxed text-muted">
							{item.a}
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>
