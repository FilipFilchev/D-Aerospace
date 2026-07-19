<script>
	import { products } from '$lib/data/site.js';
	import ProductBand from '$lib/components/ProductBand.svelte';
	import ContactSection from '$lib/components/ContactSection.svelte';
	import { reveal } from '$lib/actions/reveal.js';

	const features = [
		{
			title: 'Autopilot',
			body: 'Advanced flight controllers plan and fly your mission, so you can focus on the data.',
			icon: 'M12 2a5 5 0 0 1 5 5c1.7.6 3 2.3 3 4.3 0 1.4-.6 2.6-1.6 3.5.4.6.6 1.4.6 2.2a4 4 0 0 1-4 4c-.7 0-1.4-.2-2-.5a3.5 3.5 0 0 1-6-2.5M12 2a5 5 0 0 0-5 5C5.3 7.6 4 9.3 4 11.3c0 1.4.6 2.6 1.6 3.5M12 2v18'
		},
		{
			title: 'Support',
			body: 'A dedicated support system and knowledge centre — real help, whenever you need it.',
			icon: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM12 6v6l4 2'
		},
		{
			title: 'AI Vision',
			body: 'Smart, adaptive sensing that sees more — thermal, optical and beyond, per sector.',
			icon: 'M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z'
		}
	];
</script>

<svelte:head>
	<title>D Aerospace — Industrial Drones Built to Go Higher</title>
	<meta
		name="description"
		content="D Aerospace builds industrial-sized drones resistant to any weather and fit for any sector — Salvatore, Azriel and Lifter. Soaring into freedom to go higher."
	/>
</svelte:head>

<!-- ================= HERO — drones over mountains (real key art) ================= -->
<section class="isolate relative flex min-h-[100svh] items-center overflow-hidden">
	<div class="absolute inset-0 -z-10">
		<img
			src="/img/home/hero-flight.jpg"
			alt=""
			class="h-full w-full object-cover object-center"
			fetchpriority="high"
		/>
		<!-- soft filter for legibility of the centered text -->
		<div class="absolute inset-0 bg-black/45"></div>
		<div class="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-black/30"></div>
	</div>

	<div class="container-x w-full pt-28 pb-24">
		<div class="mx-auto max-w-2xl text-center">
			<div class="eyebrow reveal" use:reveal>Personalized Aerospace Solutions</div>
			<h1 class="display mt-5 text-4xl leading-[1.05] text-white sm:text-6xl lg:text-7xl" use:reveal={{ delay: 80 }}>
				D&nbsp;Aerospace
			</h1>
			<p class="mx-auto mt-6 max-w-md text-lg text-white/85" use:reveal={{ delay: 160 }}>
				Soaring into freedom to go higher. Industrial-sized drones, built to resist any weather and
				fit any sector — any need.
			</p>
			<div class="mt-9 flex flex-wrap justify-center gap-4" use:reveal={{ delay: 240 }}>
				<a href="/products" class="btn btn-accent px-7">Explore products</a>
				<a href="/contact" class="btn btn-light px-7">Request a demo</a>
			</div>
		</div>
	</div>

	<div class="absolute inset-x-0 bottom-6 flex justify-center">
		<div class="flex flex-col items-center gap-2 text-white/60">
			<span class="text-[0.65rem] uppercase tracking-[0.3em]">Scroll</span>
			<span class="h-9 w-5 rounded-full border border-white/25 p-1">
				<span class="mx-auto block h-2 w-1 animate-bounce rounded-full bg-accent"></span>
			</span>
		</div>
	</div>
</section>

<!-- ================= FEATURE CARDS ================= -->
<section class="py-20 sm:py-24">
	<div class="container-x grid gap-5 md:grid-cols-3">
		{#each features as f, i}
			<div class="card group p-8 transition-colors hover:border-accent/40" use:reveal={{ delay: i * 90 }}>
				<div class="grid h-14 w-14 place-items-center rounded-2xl bg-accent/12 text-accent transition-transform duration-300 group-hover:scale-110">
					<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d={f.icon} stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
				</div>
				<h3 class="display mt-6 text-xl tracking-widest">{f.title}</h3>
				<p class="mt-3 text-sm leading-relaxed text-muted">{f.body}</p>
			</div>
		{/each}
	</div>
</section>

<!-- ================= TECH: PIXHAWK / HERELINK / SPECIALIZED GCS ================= -->
<section class="py-20 sm:py-24">
	<div class="container-x space-y-20">
		<!-- Pixhawk -->
		<div class="grid items-center gap-10 lg:grid-cols-2">
			<div class="relative order-2 lg:order-1" use:reveal>
				<div class="card grid aspect-[4/3] place-items-center bg-panel-2/60 p-8">
					<img src="/img/products/pixhawk.png" alt="Cube Orange Pixhawk flight controller" class="max-h-full w-auto rounded-lg" loading="lazy" />
				</div>
			</div>
			<div class="order-1 lg:order-2" use:reveal={{ delay: 100 }}>
				<div class="eyebrow">Flight controller</div>
				<h2 class="mt-3 text-3xl font-semibold sm:text-4xl">Pixhawk Flight Controller</h2>
				<p class="mt-4 max-w-md text-muted">
					Salvatore and Lifter feature an open-source Pixhawk flight controller, offering endless
					possibilities to customise your drone for your specific operation. The standard
					configuration is set up with ArduPilot software — however, upon request, we can install PX4
					instead.
				</p>
				<p class="mt-3 max-w-md text-muted">
					We offer both the Cube Orange and Cube Blue flight controllers, so you can pick the level of
					compliance and performance your mission requires.
				</p>
			</div>
		</div>

		<!-- Herelink -->
		<div class="grid items-center gap-10 lg:grid-cols-2">
			<div use:reveal>
				<div class="eyebrow">Ground station</div>
				<h2 class="mt-3 text-3xl font-semibold sm:text-4xl">Herelink ground station</h2>
				<p class="mt-4 max-w-md text-muted">
					This transmitter allows you to manually fly your drone, view a live video feed from the
					aircraft at all times, and program automated missions on a Google Maps overlay. The HereLink
					Black has the following features:
				</p>
				<ul class="mt-6 space-y-2 text-sm text-muted">
					<li class="flex gap-3"><span class="text-accent">▹</span> 3 functions in 1 unit — view live HD video, fly the aircraft, and program auto missions on a Google Maps overlay</li>
					<li class="flex gap-3"><span class="text-accent">▹</span> Touchscreen for ease of use</li>
					<li class="flex gap-3"><span class="text-accent">▹</span> QGroundControl &amp; Mission Planner installed</li>
					<li class="flex gap-3"><span class="text-accent">▹</span> Live aircraft location on a Google Maps interface</li>
					<li class="flex gap-3"><span class="text-accent">▹</span> 2 mini HDMI video ports — connect two cameras and switch between the feeds</li>
					<li class="flex gap-3"><span class="text-accent">▹</span> Flight range up to 20 km</li>
				</ul>
			</div>
			<div use:reveal={{ delay: 100 }}>
				<div class="card grid aspect-[4/3] place-items-center bg-panel-2/60 p-8">
					<img src="/img/products/herelink.png" alt="Herelink Black ground station" class="max-h-full w-auto object-contain" loading="lazy" />
				</div>
			</div>
		</div>

		<!-- Specialized GCS -->
		<div class="grid items-center gap-10 lg:grid-cols-2">
			<div class="relative order-2 lg:order-1" use:reveal>
				<div class="card grid aspect-[4/3] place-items-center bg-panel-2/60 p-8">
					<img src="/img/products/skydroid-h16.png" alt="Specialised ground control station" class="max-h-full w-auto object-contain" loading="lazy" />
				</div>
			</div>
			<div class="order-1 lg:order-2" use:reveal={{ delay: 100 }}>
				<div class="eyebrow">Professional control</div>
				<h2 class="mt-3 text-3xl font-semibold sm:text-4xl">Specialized GCS</h2>
				<p class="mt-4 max-w-md text-muted">
					A robust ground control station tailored for professionals who require advanced
					functionality and reliability. It offers seamless manual drone control, real-time HD video
					streaming, and precise mission planning. Key features include:
				</p>
				<ul class="mt-6 space-y-2 text-sm text-muted">
					<li class="flex gap-3"><span class="text-accent">▹</span> Gimbal camera control for smooth, precise adjustments during flight</li>
					<li class="flex gap-3"><span class="text-accent">▹</span> Extensive channel customisation for versatile control configurations</li>
					<li class="flex gap-3"><span class="text-accent">▹</span> Large, ultra-bright touchscreen for use in all lighting conditions</li>
					<li class="flex gap-3"><span class="text-accent">▹</span> Pre-installed drone operational software and Mission Planner</li>
					<li class="flex gap-3"><span class="text-accent">▹</span> Real-time aircraft tracking on a detailed Google Maps interface</li>
					<li class="flex gap-3"><span class="text-accent">▹</span> 10–30 km flight range for extended, reliable operations</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- ================= IRIS C2 MISSION CONTROL ================= -->
<section class="py-20 sm:py-24">
	<div class="container-x">
		<div class="mx-auto max-w-2xl text-center" use:reveal>
			<div class="eyebrow">IRIS C2 · Mission Control</div>
			<h2 class="mt-3 text-3xl font-semibold sm:text-4xl">
				Command your fleet with IRIS C2 Mission Control
			</h2>
			<p class="mt-4 text-muted">
				Our command-and-control platform — track the whole fleet on a live map, watch real-time
				telemetry and AI detections, and fly every mission from a single screen, take-off to touchdown.
			</p>
		</div>
		<div class="mt-12" use:reveal={{ delay: 120, scale: 0.96 }}>
			<!-- laptop mockup: screenshot clipped inside the MacBook screen area -->
			<div class="relative mx-auto max-w-4xl">
				<img src="/img/laptop-frame.png" alt="" class="relative z-10 w-full select-none" loading="lazy" draggable="false" />
				<div
					class="absolute z-20 grid place-items-center overflow-hidden rounded-[8px] bg-[#0e1116]"
					style="left:10%; top:1.4%; width:80%; height:93%;"
				>
					<!-- slightly over-scaled so the dashboard fills more of the screen height -->
					<img
						src="/img/iris-c2.jpg"
						alt="IRIS C2 Mission Control dashboard"
						class="max-w-none object-contain"
						style="width:114%;"
						loading="lazy"
					/>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ================= PRODUCT BANDS ================= -->
<div class="border-t border-line">
	<div class="container-x pb-20 pt-24 text-center sm:pb-24" use:reveal>
		<div class="eyebrow">The fleet</div>
		<h2 class="display mt-3 text-3xl sm:text-4xl">Our Products</h2>
	</div>
	{#each products as product, i}
		<ProductBand {product} flip={i % 2 === 1} />
	{/each}
</div>

<!-- ================= CTA ================= -->
<section class="py-20 sm:py-24">
	<div class="container-x">
		<div class="card relative overflow-hidden px-6 py-16 text-center sm:px-16" use:reveal>
			<div class="absolute inset-0 -z-10">
				<img src="/img/home/flight-photo.jpg" alt="" class="h-full w-full object-cover opacity-35" loading="lazy" />
				<div class="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/60 to-ink/40"></div>
			</div>
			<h2 class="display mx-auto max-w-2xl text-3xl leading-tight sm:text-4xl">
				Giving you freedom to fly higher
			</h2>
			<p class="mx-auto mt-4 max-w-xl text-muted">
				Empowering industries with advanced innovation and automation, where custom drone solutions
				redefine the future of flight.
			</p>
			<a href="/products" class="btn btn-accent mt-8 px-8">View products</a>
		</div>
	</div>
</section>

<ContactSection />
