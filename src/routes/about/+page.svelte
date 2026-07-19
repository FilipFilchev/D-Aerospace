<script>
	import { about } from '$lib/data/site.js';
	import { reveal } from '$lib/actions/reveal.js';
</script>

<svelte:head>
	<title>About — D Aerospace</title>
	<meta name="description" content="D Aerospace started in 2022 with a vision of a different, enhanced drone — built to outlast and outperform the biggest players in the industry." />
</svelte:head>

<!-- HERO -->
<section class="isolate relative overflow-hidden pt-36 pb-20">
	<div class="absolute inset-x-0 top-0 -z-10 h-72" style="background: linear-gradient(180deg, #4a2f16 0%, #1a1206 40%, #0b0b0c 100%);"></div>
	<div class="container-x text-center" use:reveal>
		<h1 class="display text-4xl tracking-[0.3em] text-white sm:text-6xl">About Us</h1>
	</div>
</section>

<!-- STORY -->
<section class="pb-24">
	<div class="container-x grid gap-10 lg:grid-cols-12">
		<div class="lg:col-span-5" use:reveal>
			<h2 class="text-3xl font-semibold leading-tight sm:text-4xl">{about.heading}</h2>
			<div class="mt-8 hidden lg:block">
				<div class="card p-6">
					<div class="display text-5xl text-accent">2022</div>
					<p class="mt-2 text-sm text-muted">The year we set out to build a different kind of drone.</p>
				</div>
			</div>
		</div>
		<div class="space-y-5 lg:col-span-7" use:reveal={{ delay: 100 }}>
			{#each about.body as para}
				<p class="leading-relaxed text-muted">{para}</p>
			{/each}
		</div>
	</div>
</section>

<!-- PARTNERS -->
<section class="border-t border-line py-20">
	<div class="container-x">
		<div class="text-center" use:reveal>
			<h2 class="display text-2xl sm:text-3xl">Partners</h2>
		</div>
		<div class="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
			{#each about.partners as p, i}
				<div class="grid h-28 place-items-center rounded-[20px] bg-white px-6 py-4 transition-transform duration-300 hover:-translate-y-1" use:reveal={{ delay: i * 70 }}>
					<img src={p.logo} alt={p.name} title={p.name} class="max-h-16 w-auto max-w-full object-contain {p.invert ? 'invert' : ''}" loading="lazy" />
				</div>
			{/each}
		</div>
		<p class="mt-6 text-center text-xs text-faint">
			Supported by Bulgarian and European investment programmes.
		</p>
	</div>
</section>
