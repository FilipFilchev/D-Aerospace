<script>
	import { serviceCards, serviceSteps, serviceFaqs } from '$lib/data/site.js';
	import Faq from '$lib/components/Faq.svelte';
	import ContactSection from '$lib/components/ContactSection.svelte';
	import { reveal } from '$lib/actions/reveal.js';

	const bladePath = 'M24 24 C20.6 16.8 21.8 9 27.4 4.8 C27.8 11.8 27.4 18.4 24 24 Z';
	const cardBg = (c) => (c === 'orange' ? 'var(--color-accent)' : '#2f62cc');
</script>

<svelte:head>
	<title>Services — D Aerospace</title>
	<meta name="description" content="We make things personal. From bespoke payloads to finite-element analysis and hands-on onboarding — here's how D Aerospace builds drones around you." />
</svelte:head>

<!-- HERO — real Figma header art -->
<section class="isolate relative overflow-hidden pt-32 pb-20">
	<div class="absolute inset-0 -z-10">
		<img src="/img/services/header-bg.jpg" alt="" class="h-full w-full object-cover object-center opacity-70" />
		<div class="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-ink"></div>
	</div>
	<div class="container-x py-8 text-center" use:reveal>
		<h1 class="display text-4xl tracking-[0.3em] text-white sm:text-6xl">Services</h1>
		<p class="mx-auto mt-5 max-w-2xl text-white/85">
			We make things personal. A different camera, various legs, adaptive sensors, payload boxes that
			don’t cost you flight time — here’s how a custom drone comes to life.
		</p>
	</div>
</section>

<!-- BRAND CARDS -->
<section class="pb-8">
	<div class="container-x space-y-6">
		{#each serviceCards as card, i}
			<article
				class="relative isolate overflow-hidden rounded-[26px] text-white"
				style="background:{cardBg(card.color)}"
				use:reveal={{ y: 40 }}
			>
				<!-- tri-blade watermark -->
				<svg class="pointer-events-none absolute -right-8 -top-10 h-64 w-64 opacity-[0.10]" viewBox="0 0 48 48" fill="currentColor" aria-hidden="true">
					<path d={bladePath} transform="rotate(0 24 24)" />
					<path d={bladePath} transform="rotate(120 24 24)" />
					<path d={bladePath} transform="rotate(240 24 24)" />
				</svg>

				<div class="grid items-center gap-6 p-8 sm:p-12 lg:grid-cols-2 lg:gap-10">
					<!-- text -->
					<div class={i % 2 === 1 ? 'lg:order-2' : ''}>
						<div class="display text-5xl text-black/15">{card.n}</div>
						<h2 class="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">{card.title}</h2>
						<p class="mt-5 max-w-xl leading-relaxed text-white/85">{card.body}</p>
						{#if card.cta}
							<a href={card.cta.href} class="btn btn-light mt-7">{card.cta.label}</a>
						{/if}
					</div>
					<!-- image -->
					<div class={i % 2 === 1 ? 'lg:order-1' : ''}>
						<div class="relative grid place-items-center">
							<div class="absolute h-48 w-48 rounded-full bg-black/20 blur-2xl"></div>
							<img src={card.image} alt="" class="relative z-10 w-full max-w-md drop-shadow-2xl" loading="lazy" />
						</div>
					</div>
				</div>
			</article>
		{/each}
	</div>
</section>

<!-- OUR PROCESS -->
<section class="py-20 sm:py-24">
	<div class="container-x">
		<div class="max-w-2xl" use:reveal>
			<div class="eyebrow">How we work</div>
			<h2 class="mt-3 text-3xl font-semibold sm:text-4xl">From concept to commissioning</h2>
			<p class="mt-4 text-muted">
				Every custom drone moves through five stages. Open any step to see how we do it.
			</p>
		</div>

		<!-- orange Figma layout: 2 across · full-width centre · 2 across -->
		<div class="mt-12 grid gap-5 sm:grid-cols-2">
			{#each serviceSteps as step, i}
				<a
					href="/services/{step.slug}"
					class="group relative flex flex-col overflow-hidden rounded-[26px] bg-accent p-8 text-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(234,94,30,0.7)] sm:p-9 {i === 2 ? 'sm:col-span-2 sm:items-center sm:text-center' : ''}"
					use:reveal={{ delay: (i % 2) * 90, y: 34 }}
				>
					{#if step.icon}
						<img
							src={step.icon}
							alt=""
							class="absolute bottom-5 right-6 h-20 w-20 object-contain opacity-90 transition-transform duration-500 group-hover:scale-110 sm:h-24 sm:w-24"
							loading="lazy"
						/>
					{/if}
					<h3 class="max-w-[70%] text-2xl font-semibold leading-tight sm:text-3xl {i === 2 ? 'sm:max-w-none' : ''}">{step.title}</h3>
					<p class="mt-3 max-w-[75%] flex-1 text-sm leading-relaxed text-white/85 {i === 2 ? 'sm:mx-auto sm:max-w-xl' : ''}">
						{step.summary} {step.intro[0].split('. ').slice(0, 2).join('. ')}.
					</p>
					<span class="btn btn-light mt-6 w-fit px-6 py-2 text-xs uppercase tracking-widest {i === 2 ? 'sm:mx-auto' : ''}">Learn more</span>
				</a>
			{/each}
		</div>
	</div>
</section>

<Faq items={serviceFaqs} />
<ContactSection />
