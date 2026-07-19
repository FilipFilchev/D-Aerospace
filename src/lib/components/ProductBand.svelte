<script>
	import SpecBadge from './SpecBadge.svelte';
	import { reveal } from '$lib/actions/reveal.js';

	let { product, showSchematic = true, flip = false } = $props();

	const iconFor = (label) => {
		const l = label.toLowerCase();
		if (l.includes('time')) return 'time';
		if (l.includes('range')) return 'range';
		if (l.includes('payload')) return 'payload';
		if (l.includes('controller')) return 'chip';
		if (l.includes('resist')) return 'shield';
		return 'gauge';
	};
</script>

<section id={product.slug} class="scroll-mt-24 overflow-hidden">
	<div
		class="relative isolate"
		style="background:
			radial-gradient(120% 90% at {flip ? '90%' : '10%'} 0%, color-mix(in srgb, {product.accent} 18%, transparent) 0%, transparent 55%),
			linear-gradient(180deg, var(--color-ink-2) 0%, var(--color-ink) 100%);"
	>
		<div class="container-x grid items-center gap-10 py-20 lg:grid-cols-2 lg:py-28">
			<!-- text -->
			<div class={flip ? 'lg:order-2' : ''} use:reveal>
				<h2 class="display text-4xl sm:text-5xl lg:text-6xl" style="color:{product.accent}">
					{product.name}
				</h2>
				<p class="mt-5 max-w-md text-muted">{product.summary}</p>

				<div class="mt-8 grid max-w-md grid-cols-2 gap-3">
					{#each product.specs as s}
						<SpecBadge label={s.label} value={s.value} unit={s.unit} icon={iconFor(s.label)} />
					{/each}
				</div>

				<div class="mt-8 flex flex-wrap items-center gap-3">
					{#if product.available}
						<span class="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
							<span class="h-1.5 w-1.5 rounded-full bg-accent"></span> Available now
						</span>
						<a href="/contact" class="btn btn-light">Order now</a>
					{:else}
						<span class="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted">
							In production
						</span>
						<a href="/contact" class="btn btn-ghost">Enquire</a>
					{/if}
				</div>
			</div>

			<!-- image -->
			<div class={flip ? 'lg:order-1' : ''} use:reveal={{ delay: 120 }}>
				<div class="relative grid place-items-center">
					<div
						class="absolute h-64 w-64 rounded-full blur-3xl sm:h-80 sm:w-80"
						style="background: color-mix(in srgb, {product.accent} 30%, transparent);"
					></div>
					<img
						src={product.image}
						alt="{product.name} drone"
						class="relative z-10 w-full max-w-lg drop-shadow-2xl"
						loading="lazy"
					/>
				</div>
			</div>
		</div>

		{#if showSchematic && product.drawing}
			<div class="border-t border-line/60 bg-ink/40">
				<div class="container-x py-10" use:reveal>
					<div class="mb-5 flex items-center justify-between gap-4">
						<div>
							<div class="eyebrow" style="color:{product.accent}">Technical drawings</div>
							<p class="mt-1 max-w-sm text-sm text-muted">
								Precision-engineered airframe, documented down to the last dimension.
							</p>
						</div>
						<a href="/contact" class="btn btn-ghost hidden sm:inline-flex">Request datasheet</a>
					</div>
					<div class="overflow-hidden rounded-[20px] bg-white p-4 sm:p-6">
						<img
							src={product.drawing}
							alt="{product.name} technical drawings — top, front and side views with dimensions"
							class="mx-auto w-full max-w-4xl object-contain"
							loading="lazy"
						/>
					</div>
				</div>
			</div>
		{/if}
	</div>
</section>
