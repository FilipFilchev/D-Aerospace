<script>
	import { company } from '$lib/data/site.js';
	import ContactSection from '$lib/components/ContactSection.svelte';
	import { reveal } from '$lib/actions/reveal.js';

	const cards = [
		{
			label: 'Call us',
			value: company.phone,
			href: `tel:${company.phone.replace(/\s/g, '')}`,
			icon: 'M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.4 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z'
		},
		{
			label: 'Email us',
			value: company.email,
			href: `mailto:${company.email}`,
			icon: 'M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm-1.5 3 9.5 6 9.5-6'
		},
		{
			label: 'Visit us',
			value: company.address,
			href: null,
			icon: 'M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0ZM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z'
		}
	];
</script>

<svelte:head>
	<title>Contact — D Aerospace</title>
	<meta name="description" content="Get in touch with D Aerospace to request a demo, order a drone or discuss a custom build." />
</svelte:head>

<section class="isolate relative overflow-hidden pt-32 pb-12">
	<div class="absolute inset-0 -z-10 bg-gradient-to-b from-ink-2 to-ink"></div>
	<div class="container-x text-center" use:reveal>
		<div class="eyebrow">Get in touch</div>
		<h1 class="display mt-4 text-4xl sm:text-6xl">Let’s Fly Together</h1>
		<p class="mx-auto mt-5 max-w-xl text-muted">
			Whether you want a demo, a quote, or a drone built around your exact mission — we’d love to hear
			from you.
		</p>
	</div>

	<div class="container-x mt-12 grid gap-4 sm:grid-cols-3" >
		{#each cards as c, i}
			<div class="card p-7" use:reveal={{ delay: i * 80 }}>
				<span class="grid h-12 w-12 place-items-center rounded-2xl bg-accent/12 text-accent">
					<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d={c.icon} stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
				</span>
				<div class="mt-5 text-xs uppercase tracking-wider text-faint">{c.label}</div>
				{#if c.href}
					<a href={c.href} class="mt-1 block text-lg font-medium transition-colors hover:text-accent">{c.value}</a>
				{:else}
					<div class="mt-1 text-lg font-medium">{c.value}</div>
				{/if}
			</div>
		{/each}
	</div>
</section>

<ContactSection />
