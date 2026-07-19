<script>
	import { resourceFiles, resourceCategories, resourceFormats } from '$lib/data/site.js';
	import PaperThumb from '$lib/components/PaperThumb.svelte';
	import ContactSection from '$lib/components/ContactSection.svelte';
	import { reveal } from '$lib/actions/reveal.js';

	let query = $state('');
	let category = $state('All');
	let format = $state('All');

	const filtered = $derived(
		resourceFiles.filter((r) => {
			const matchQ = r.title.toLowerCase().includes(query.trim().toLowerCase());
			const matchC = category === 'All' || r.category === category;
			const matchF = format === 'All' || r.format === format;
			return matchQ && matchC && matchF;
		})
	);

	const reset = () => {
		query = '';
		category = 'All';
		format = 'All';
	};
</script>

<svelte:head>
	<title>Resource Library — D Aerospace</title>
	<meta name="description" content="Datasheets, guides and published papers to help you get the most out of your D Aerospace drone. Search and download." />
</svelte:head>

<!-- HERO -->
<section class="isolate relative overflow-hidden pt-32 pb-10">
	<div class="absolute inset-0 -z-10 bg-gradient-to-b from-ink-2 to-ink"></div>
	<div class="container-x text-center" use:reveal>
		<h1 class="display text-4xl sm:text-6xl">Resource Library</h1>
		<p class="mx-auto mt-5 max-w-xl text-muted">
			This is our resource library — search the collection and choose a file to download.
		</p>
	</div>

	<!-- TOOLBAR -->
	<div class="container-x mt-10" use:reveal={{ delay: 100 }}>
		<div class="mx-auto flex max-w-3xl flex-col gap-3 rounded-2xl border border-line bg-panel/70 p-3 backdrop-blur sm:flex-row">
			<div class="flex flex-1 items-center gap-3 rounded-xl bg-ink px-4">
				<svg class="text-faint" width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="1.7"/><path d="m20 20-3.2-3.2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>
				<input class="w-full bg-transparent py-3 text-sm text-fg outline-none placeholder:text-faint" placeholder="Search resources…" bind:value={query} />
			</div>
			<div class="relative">
				<select class="lib-select" bind:value={category}>
					{#each resourceCategories as c}<option value={c}>{c === 'All' ? 'All categories' : c}</option>{/each}
				</select>
			</div>
			<div class="relative">
				<select class="lib-select" bind:value={format}>
					{#each resourceFormats as f}<option value={f}>{f === 'All' ? 'All formats' : f}</option>{/each}
				</select>
			</div>
		</div>
	</div>
</section>

<!-- RESULTS -->
<section class="py-12 sm:py-16">
	<div class="container-x">
		<div class="mb-8 flex items-center justify-between text-sm text-faint">
			<span>{filtered.length} {filtered.length === 1 ? 'result' : 'results'}</span>
			{#if query || category !== 'All' || format !== 'All'}
				<button class="transition-colors hover:text-fg" onclick={reset}>Clear filters</button>
			{/if}
		</div>

		{#if filtered.length}
			<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
				{#each filtered as file, i (file.title)}
					<a
						href={file.href ?? '/contact'}
						target={file.href ? '_blank' : undefined}
						rel={file.href ? 'noopener' : undefined}
						class="card group flex flex-col overflow-hidden p-0 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40"
						use:reveal={{ delay: (i % 3) * 70, y: 30 }}
					>
						{#if file.thumb}
							<div class="relative aspect-[3/4] w-full overflow-hidden rounded-t-[18px] bg-white">
								<img src={file.thumb} alt="First page of {file.title}" class="h-full w-full object-cover object-top" loading="lazy" />
								<div class="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-white to-transparent"></div>
							</div>
						{:else}
							<PaperThumb title={file.title} seed={i + 1} />
						{/if}
						<div class="flex flex-1 flex-col p-6">
							<div class="flex items-center gap-2">
								<span class="rounded-full bg-accent/12 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-accent">{file.format}</span>
								<span class="text-[0.7rem] uppercase tracking-wider text-faint">{file.category}</span>
							</div>
							<h3 class="mt-3 flex-1 text-sm font-medium leading-snug transition-colors group-hover:text-accent">{file.title}</h3>
							<div class="mt-4 flex items-center justify-between border-t border-line pt-4">
								<span class="text-xs text-faint">{file.pages} pages</span>
								<span class="inline-flex items-center gap-1.5 text-sm font-medium text-accent">
									Download
									<svg width="15" height="15" viewBox="0 0 24 24" fill="none" class="transition-transform group-hover:translate-y-0.5"><path d="M12 4v12m0 0 4-4m-4 4-4-4M5 20h14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
								</span>
							</div>
						</div>
					</a>
				{/each}
			</div>
		{:else}
			<div class="card grid place-items-center gap-3 px-6 py-20 text-center">
				<div class="grid h-14 w-14 place-items-center rounded-full bg-panel-2 text-faint">
					<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="1.7"/><path d="m20 20-3.2-3.2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>
				</div>
				<h3 class="text-lg font-semibold">No resources found</h3>
				<p class="text-muted">Try a different search or clear the filters.</p>
				<button class="btn btn-ghost mt-2" onclick={reset}>Clear filters</button>
			</div>
		{/if}
	</div>
</section>

<ContactSection />

<style>
	:global(.lib-select) {
		appearance: none;
		background: var(--color-ink);
		border: none;
		border-radius: 12px;
		color: var(--color-fg);
		font-size: 0.875rem;
		padding: 0.75rem 2.4rem 0.75rem 1rem;
		cursor: pointer;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'%3E%3Cpath d='M2.5 4.5 6 8l3.5-3.5' stroke='%239b9ba1' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
		background-repeat: no-repeat;
		background-position: right 0.9rem center;
	}
	:global(.lib-select:focus) {
		outline: 1px solid var(--color-accent);
	}
	:global(.lib-select option) {
		background: var(--color-ink-2);
	}
</style>
