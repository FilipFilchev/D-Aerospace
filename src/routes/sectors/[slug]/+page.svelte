<script>
	import { onMount } from 'svelte';
	import ContactSection from '$lib/components/ContactSection.svelte';
	import { reveal } from '$lib/actions/reveal.js';

	let { data } = $props();
	const { sector, prev, next } = $derived(data);

	let active = $state(0);
	let blocks = $state([]);

	onMount(() => {
		const io = new IntersectionObserver(
			(entries) => {
				for (const e of entries) {
					if (e.isIntersecting) active = Number(e.target.dataset.i);
				}
			},
			{ rootMargin: '-45% 0px -45% 0px', threshold: 0 }
		);
		blocks.forEach((b) => b && io.observe(b));
		return () => io.disconnect();
	});
</script>

<svelte:head>
	<title>{sector.name} — Sectors — D Aerospace</title>
	<meta name="description" content={sector.blurb} />
</svelte:head>

<!-- BANNER HERO — compact photo band under the nav (per Figma Defense page) -->
<section class="isolate relative overflow-hidden pt-16">
	<div class="relative h-[46vh] min-h-80">
		<img src={sector.hero} alt="" class="absolute inset-0 h-full w-full object-cover object-center" />
		<div class="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/10"></div>
		<div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

		<div class="container-x relative flex h-full flex-col justify-center">
			<a href="/sectors" class="mb-4 inline-flex w-fit items-center gap-2 text-xs text-white/60 transition-colors hover:text-white" use:reveal={{ y: 0 }}>
				<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M11 6l-6 6 6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
				All sectors
			</a>
			<div class="text-[0.68rem] uppercase tracking-[0.3em] text-white/70" use:reveal={{ y: 10 }}>{sector.eyebrow}</div>
			<h1 class="mt-2 text-4xl font-semibold text-white sm:text-5xl" use:reveal={{ delay: 60 }}>{sector.name}</h1>
			<p class="mt-4 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base" use:reveal={{ delay: 120 }}>
				{sector.intro}
			</p>
		</div>
	</div>
</section>

<!-- BENEFITS — white section, label chips left / prose right (per Figma) -->
<section class="bg-ink-2 py-16 text-fg sm:py-24">
	<div class="container-x">
		<div class="grid gap-10 lg:grid-cols-[300px_1fr] lg:gap-16">
			<div class="lg:pt-1">
				<h2 class="text-2xl font-semibold leading-snug sm:text-3xl lg:sticky lg:top-28" use:reveal>
					{sector.benefitsTitle}
				</h2>
			</div>

			<div class="space-y-2">
				{#each sector.benefits as b, i}
					<div
						id="b-{i}"
						data-i={i}
						bind:this={blocks[i]}
						class="grid gap-3 rounded-2xl p-5 transition-colors duration-300 sm:grid-cols-[220px_1fr] sm:gap-8"
						class:bg-panel-2={active === i}
						use:reveal={{ y: 24 }}
					>
						<div class="text-[0.95rem] font-semibold leading-snug" class:text-accent={active === i}>
							{b.label}:
						</div>
						<p class="text-sm leading-relaxed text-muted">{b.body}</p>
					</div>
				{/each}

				<p class="px-5 pt-6 text-sm leading-relaxed text-muted" use:reveal>
					{sector.closing}
				</p>
			</div>
		</div>
	</div>
</section>

<!-- CAPABILITIES -->
<section class="py-16 sm:py-20">
	<div class="container-x" use:reveal>
		<div class="eyebrow mb-4">Capabilities</div>
		<div class="flex flex-wrap gap-2">
			{#each sector.points as p}
				<span class="rounded-full border border-line bg-panel px-4 py-2 text-sm text-muted">{p}</span>
			{/each}
		</div>
	</div>
</section>

<!-- PREV / NEXT -->
<section class="border-t border-line py-10">
	<div class="container-x grid gap-4 sm:grid-cols-2">
		<a href="/sectors/{prev.slug}" class="card group flex items-center gap-4 p-6 transition-colors hover:border-accent/40">
			<svg class="text-faint transition-colors group-hover:text-accent" width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M11 6l-6 6 6 6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>
			<div>
				<div class="text-xs uppercase tracking-wider text-faint">Previous</div>
				<div class="font-semibold">{prev.name}</div>
			</div>
		</a>
		<a href="/sectors/{next.slug}" class="card group flex items-center justify-end gap-4 p-6 text-right transition-colors hover:border-accent/40">
			<div>
				<div class="text-xs uppercase tracking-wider text-faint">Next</div>
				<div class="font-semibold">{next.name}</div>
			</div>
			<svg class="text-faint transition-colors group-hover:text-accent" width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>
		</a>
	</div>
</section>

<ContactSection />
