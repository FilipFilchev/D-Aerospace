<script>
	import NumberedCard from '$lib/components/NumberedCard.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import ContactSection from '$lib/components/ContactSection.svelte';
	import WireframeDrone from '$lib/components/WireframeDrone.svelte';
	import { serviceFaqs } from '$lib/data/site.js';
	import { reveal } from '$lib/actions/reveal.js';

	let { data } = $props();
	const { step, prev, next } = $derived(data);

	const themes = {
		cyan: { c: '#0ab2f1', glow: 'rgba(10,178,241,0.20)', top: '#0a1a26' },
		orange: { c: '#ea5e1e', glow: 'rgba(234,94,30,0.20)', top: '#1a1006' },
		lime: { c: '#b5fc59', glow: 'rgba(181,252,89,0.16)', top: '#0f1608' }
	};
	const t = $derived(themes[step.theme] ?? themes.cyan);
</script>

<svelte:head>
	<title>{step.title} — Services — D Aerospace</title>
	<meta name="description" content={step.summary} />
</svelte:head>

<!-- HERO -->
<section class="isolate relative overflow-hidden">
	<div class="absolute inset-0 -z-10" style="background: linear-gradient(180deg, {t.top} 0%, #0b0b0c 60%);"></div>
	<div class="absolute inset-x-0 top-0 -z-10 h-2/3 opacity-70" style="background: radial-gradient(60% 60% at 78% 12%, {t.glow}, transparent 70%);"></div>

	<div class="container-x grid items-center gap-8 pt-32 pb-16 lg:grid-cols-2">
		<div>
			<a href="/services" class="mb-6 inline-flex w-fit items-center gap-2 text-sm text-white/60 transition-colors hover:text-white" use:reveal={{ y: 0 }}>
				<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M11 6l-6 6 6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
				All services
			</a>
			<div class="eyebrow" style="color:{t.c}" use:reveal={{ y: 12 }}>Step {step.n}</div>
			<h1 class="mt-4 text-4xl font-bold leading-[1.05] sm:text-6xl" style="color:{t.c}" use:reveal={{ delay: 80 }}>
				{step.title}
			</h1>
			<div class="mt-6 space-y-4" use:reveal={{ delay: 160 }}>
				{#each step.intro as p}
					<p class="max-w-md leading-relaxed text-white/80">{p}</p>
				{/each}
			</div>
		</div>

		<div class="relative grid place-items-center" use:reveal={{ delay: 140, scale: 0.9 }}>
			<div class="absolute h-64 w-64 rounded-full blur-[80px]" style="background:{t.glow}"></div>
			{#if step.slug === 'concept-development'}
				<img src="/img/services/concept-gear.png" alt="" class="relative w-72 drop-shadow-2xl sm:w-96" />
			{:else if step.icon}
				<img src={step.icon} alt="" class="relative w-56 opacity-90 drop-shadow-2xl sm:w-72" />
			{:else}
				<WireframeDrone class="relative h-72 w-72 sm:h-96 sm:w-96" accent={t.c} stroke="rgba(255,255,255,0.35)" />
			{/if}
		</div>
	</div>
</section>

<!-- HOW WE DO IT -->
<section class="py-16 sm:py-24">
	<div class="container-x">
		<h2 class="text-3xl font-bold sm:text-4xl" style="color:{t.c}" use:reveal>How we do it</h2>
		<div class="mt-12 grid gap-6 sm:grid-cols-2">
			{#each step.cards as card, i}
				<NumberedCard n={i + 1} title={card.title} body={card.body} color={t.c} delay={(i % 2) * 90} />
			{/each}
		</div>
	</div>
</section>

<!-- PREV / NEXT -->
<section class="border-t border-line py-10">
	<div class="container-x grid gap-4 sm:grid-cols-2">
		<a href="/services/{prev.slug}" class="card group flex items-center gap-4 p-6 transition-colors hover:border-accent/40">
			<svg class="text-faint transition-colors group-hover:text-accent" width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M11 6l-6 6 6 6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>
			<div>
				<div class="text-xs uppercase tracking-wider text-faint">Previous</div>
				<div class="font-semibold">{prev.title}</div>
			</div>
		</a>
		<a href="/services/{next.slug}" class="card group flex items-center justify-end gap-4 p-6 text-right transition-colors hover:border-accent/40">
			<div>
				<div class="text-xs uppercase tracking-wider text-faint">Next</div>
				<div class="font-semibold">{next.title}</div>
			</div>
			<svg class="text-faint transition-colors group-hover:text-accent" width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>
		</a>
	</div>
</section>

<Faq items={serviceFaqs} />
<ContactSection />
