<script>
	import { products, productFaqs } from '$lib/data/site.js';
	import ProductBand from '$lib/components/ProductBand.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import ContactSection from '$lib/components/ContactSection.svelte';
	import { reveal } from '$lib/actions/reveal.js';

	const highlights = [
		{
			title: 'Fly easy with copilot',
			sub: 'Pixhawk-class autopilot',
			body: 'Intelligent flight assistance keeps you steady and on-path, so anyone on your team can fly with confidence.',
			image: '/img/products/pixhawk.png'
		},
		{
			title: 'Empower your vision',
			sub: 'AI smart camera',
			body: 'A smart, stabilised camera platform captures crisp optical and thermal imagery for every mission.',
			image: '/img/products/camera-zenmuse.png'
		},
		{
			title: 'Get a feel for flying',
			sub: 'Herelink GCS',
			body: 'The Herelink ground station puts live video, telemetry and full control in the palm of your hand.',
			image: '/img/products/herelink.png'
		}
	];
</script>

<svelte:head>
	<title>Products — D Aerospace</title>
	<meta name="description" content="Meet the D Aerospace fleet: Salvatore, Azriel and Lifter. Industrial drones engineered for range, payload and endurance." />
</svelte:head>

<!-- HERO — drone in neon hangar (FirstProductImage) -->
<section class="isolate relative flex min-h-[86svh] items-end overflow-hidden">
	<div class="absolute inset-0 -z-10">
		<img src="/img/products-hero-bg.jpg" alt="" class="h-full w-full object-cover object-center" fetchpriority="high" />
		<div class="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-black/40"></div>
	</div>
	<div class="container-x pb-16 pt-40 text-center" use:reveal>
		<div class="eyebrow">The fleet</div>
		<h1 class="display mt-4 text-4xl text-white sm:text-6xl">Products</h1>
		<p class="mx-auto mt-5 max-w-2xl text-white/85">
			Industrial-sized drones engineered from the frame up — resistant to weather, configurable for
			your sector, and built to outlast the biggest players in the industry.
		</p>
	</div>
</section>

<!-- HIGHLIGHTS -->
<section class="pb-8">
	<div class="container-x grid gap-5 md:grid-cols-3">
		{#each highlights as h, i}
			<div class="card group overflow-hidden transition-colors hover:border-accent/40" use:reveal={{ delay: i * 90 }}>
				<div class="grid h-44 place-items-center bg-panel-2/60 p-6">
					<img src={h.image} alt={h.sub} class="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105" loading="lazy" />
				</div>
				<div class="p-7">
					<div class="text-[0.7rem] uppercase tracking-wider text-accent">{h.sub}</div>
					<h3 class="mt-2 text-lg font-semibold">{h.title}</h3>
					<p class="mt-2 text-sm leading-relaxed text-muted">{h.body}</p>
				</div>
			</div>
		{/each}
	</div>
</section>

<!-- IN THE FIELD — AI detection in action -->
<section class="py-16">
	<div class="container-x" use:reveal>
		<div class="relative overflow-hidden rounded-[26px] border border-line">
			<img src="/img/products/boat-detect.jpg" alt="AI vision detecting boats in a marina from the air" class="h-[46vh] min-h-72 w-full object-cover object-center" loading="lazy" />
			<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
			<div class="absolute bottom-6 left-6 sm:bottom-10 sm:left-10">
				<div class="eyebrow">In the field · AI vision</div>
				<p class="display mt-2 text-2xl text-white sm:text-4xl">Built. Flown. Proven.</p>
				<p class="mt-3 max-w-md text-sm text-white/85">
					Live object detection from the air — every vessel identified and tracked in real time by
					IRIS C2.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- PRODUCT BANDS -->
<div class="border-t border-line">
	{#each products as product, i}
		<ProductBand {product} flip={i % 2 === 1} />
	{/each}
</div>

<!-- SPECIALIZED PROD IN DETAILS -->
<section class="py-16">
	<div class="container-x" use:reveal>
		<div class="mb-6 max-w-xl">
			<div class="eyebrow">Specialized prod in details</div>
			<h2 class="mt-3 text-3xl font-semibold sm:text-4xl">Payloads, engineered per sector</h2>
			<p class="mt-3 text-muted">
				Easily control all aspects of payload during flight — deliver, return, load line and more.
				Every box, camera and sensor is designed around your industry.
			</p>
		</div>
		<div class="overflow-hidden rounded-[20px] bg-white p-3">
			<img src="/img/products/payload-details.jpg" alt="Payload box detail views — connectors, release mechanism and mounting" class="w-full rounded-[12px] object-cover" loading="lazy" />
		</div>
	</div>
</section>

<!-- PRODUCTION READY -->
<section class="py-8">
	<div class="container-x" use:reveal>
		<div class="relative overflow-hidden rounded-[26px] border border-line">
			<img src="/img/products/production-ready.jpg" alt="Drone parts being assembled in production" class="h-[46vh] min-h-72 w-full object-cover" loading="lazy" />
			<div class="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent"></div>
			<div class="absolute left-6 top-1/2 max-w-sm -translate-y-1/2 sm:left-10">
				<h2 class="display text-3xl leading-tight text-white sm:text-4xl">Production<br />Ready</h2>
				<p class="mt-4 text-sm leading-relaxed text-white/85">
					Built on the success of the Salvatore platform, the parts that make up our fleet are already
					in production and ready for construction.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- SOFTWARE -->
<section class="py-20 sm:py-24">
	<div class="container-x grid items-center gap-10 lg:grid-cols-2">
		<div use:reveal>
			<div class="eyebrow">IRIS C2 · Mission Control</div>
			<h2 class="mt-3 text-3xl font-semibold sm:text-4xl">IRIS C2 Mission Control</h2>
			<p class="mt-4 max-w-md text-muted">
				Every drone is directed by IRIS C2 — our command-and-control platform. Track the fleet on a
				live map, plan waypoints, watch real-time video, telemetry and AI detections, and review every
				mission, all from a single screen built for real operators.
			</p>
			<div class="mt-8 grid grid-cols-2 gap-4 text-sm">
				<div class="card p-4">
					<div class="display text-2xl text-accent">Live</div>
					<div class="mt-1 text-muted">HD video &amp; telemetry</div>
				</div>
				<div class="card relative overflow-hidden p-4">
					<div class="display text-2xl text-accent">GCS</div>
					<div class="mt-1 text-muted">New RC ground station</div>
					<img src="/img/products/skydroid-h16.png" alt="Skydroid H16 ground station" class="absolute -bottom-2 -right-2 h-20 w-20 object-contain opacity-90" loading="lazy" />
				</div>
			</div>
		</div>
		<div use:reveal={{ delay: 120 }}>
			<div class="overflow-hidden rounded-2xl border border-line bg-[#0e1116] shadow-2xl">
				<div class="flex items-center gap-2 border-b border-line bg-panel/60 px-4 py-2.5">
					<span class="h-2.5 w-2.5 rounded-full bg-[#ff5f57]"></span>
					<span class="h-2.5 w-2.5 rounded-full bg-[#febc2e]"></span>
					<span class="h-2.5 w-2.5 rounded-full bg-[#28c840]"></span>
					<span class="ml-3 text-xs text-faint">IRIS C2 — Mission Control</span>
				</div>
				<img src="/img/iris-c2.jpg" alt="IRIS C2 Mission Control dashboard" class="w-full" loading="lazy" />
			</div>
		</div>
	</div>
</section>

<Faq items={productFaqs} />
<ContactSection />
