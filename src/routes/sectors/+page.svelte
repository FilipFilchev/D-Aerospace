<script>
	import { sectors } from '$lib/data/site.js';
	import ContactSection from '$lib/components/ContactSection.svelte';
	import { reveal } from '$lib/actions/reveal.js';

	const pad = (n) => String(n + 1).padStart(2, '0');
</script>

<svelte:head>
	<title>Sectors — D Aerospace</title>
	<meta name="description" content="From surveillance and agriculture to defence, oil & gas and mining — D Aerospace drones adapt to the industry you work in." />
</svelte:head>

<!-- HERO — drone in hangar (from Figma) -->
<section class="isolate relative overflow-hidden pt-32 pb-20">
	<div class="absolute inset-0 -z-10">
		<img src="/img/sectors/hangar-hero.jpg" alt="" class="h-full w-full object-cover object-center opacity-60" />
		<div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-ink"></div>
	</div>
	<div class="container-x py-10 text-center" use:reveal>
		<div class="eyebrow">Where we fly</div>
		<h1 class="display mt-4 text-4xl text-white sm:text-6xl">Sectors</h1>
		<p class="mx-auto mt-5 max-w-2xl text-white/80">
			A different camera for every field, legs for every landing, sensors that adapt to your industry.
			One platform, engineered to fit the way you work.
		</p>
	</div>
</section>

<!-- SECTOR GRID -->
<section class="pb-24">
	<div class="container-x grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each sectors as s, i}
			<a
				href="/sectors/{s.slug}"
				class="group relative flex flex-col overflow-hidden rounded-[22px] border border-line transition-all duration-500 hover:-translate-y-1 hover:border-accent/40"
				use:reveal={{ delay: (i % 3) * 90, y: 34 }}
			>
				<!-- visual -->
				<div class="relative aspect-[16/10] overflow-hidden">
					<img
						src={s.tile}
						alt="{s.name} aerial photography"
						class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
						loading="lazy"
					/>
					<div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
					<div class="absolute left-5 top-5 text-[0.65rem] uppercase tracking-[0.25em] text-white/60">{pad(i)}</div>
				</div>
				<!-- body -->
				<div class="flex flex-1 flex-col p-6">
					<h3 class="text-lg font-semibold transition-colors group-hover:text-accent">{s.name}</h3>
					<p class="mt-2 flex-1 text-sm leading-relaxed text-muted">{s.blurb}</p>
					<span class="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
						Explore sector
						<svg width="14" height="14" viewBox="0 0 24 24" fill="none" class="transition-transform group-hover:translate-x-1"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
					</span>
				</div>
			</a>
		{/each}
	</div>
</section>

<ContactSection />
