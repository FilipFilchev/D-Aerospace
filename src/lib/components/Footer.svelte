<script>
	import Logo from './Logo.svelte';
	import { company, products } from '$lib/data/site.js';

	const year = 2026;
	const socials = [
		{ name: 'Instagram', icon: '/img/social/instagram.svg', href: company.social.instagram },
		{ name: 'YouTube', icon: '/img/social/youtube.svg', href: company.social.youtube },
		{ name: 'LinkedIn', icon: '/img/social/linkedin.svg', href: company.social.linkedin },
		{ name: 'Facebook', icon: '/img/social/facebook.svg', href: company.social.facebook }
	];

	const explore = [
		{ label: 'Home', href: '/' },
		{ label: 'Products', href: '/products' },
		{ label: 'Sectors', href: '/sectors' },
		{ label: 'Services', href: '/services' }
	];
	const companyLinks = [
		{ label: 'About', href: '/about' },
		{ label: 'Resource Library', href: '/resources' },
		{ label: 'Contact', href: '/contact' }
	];
</script>

<footer class="border-t border-line bg-ink-2">
	<div class="container-x grid grid-cols-2 gap-x-8 gap-y-12 py-16 md:grid-cols-4 lg:grid-cols-12 lg:py-20">
		<!-- brand -->
		<div class="col-span-2 lg:col-span-4">
			<Logo size={54} />
			<p class="mt-6 max-w-xs text-sm leading-relaxed text-muted">
				{company.tagline}. Elevating the drone experience for every sector and every need.
			</p>
			<div class="mt-6 flex items-center gap-3">
				{#each socials as s}
					<a
						href={s.href}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={s.name}
						title={s.name}
						class="grid h-10 w-10 place-items-center rounded-full border border-line transition-all hover:-translate-y-0.5 hover:border-accent"
					>
						<img src={s.icon} alt="" class="h-5 w-5" />
					</a>
				{/each}
			</div>
		</div>

		<!-- explore -->
		<div class="lg:col-span-2">
			<h4 class="text-sm font-semibold uppercase tracking-wider text-accent">Explore</h4>
			<ul class="mt-5 space-y-3 text-sm">
				{#each explore as l}
					<li><a href={l.href} class="link-muted">{l.label}</a></li>
				{/each}
			</ul>
		</div>

		<!-- products -->
		<div class="lg:col-span-2">
			<h4 class="text-sm font-semibold uppercase tracking-wider text-accent">Products</h4>
			<ul class="mt-5 space-y-3 text-sm">
				{#each products as p}
					<li><a href="/products#{p.slug}" class="link-muted">{p.name}</a></li>
				{/each}
			</ul>
		</div>

		<!-- company -->
		<div class="lg:col-span-2">
			<h4 class="text-sm font-semibold uppercase tracking-wider text-accent">Company</h4>
			<ul class="mt-5 space-y-3 text-sm">
				{#each companyLinks as l}
					<li><a href={l.href} class="link-muted">{l.label}</a></li>
				{/each}
			</ul>
		</div>

		<!-- contact -->
		<div class="col-span-2 lg:col-span-2">
			<h4 class="text-sm font-semibold uppercase tracking-wider text-accent">Contact</h4>
			<ul class="mt-5 space-y-4 text-sm text-muted">
				<li class="flex items-start gap-3">
					<svg class="mt-0.5 shrink-0 text-accent" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.4 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
					<a href="tel:{company.phone.replace(/\s/g, '')}" class="link-muted">{company.phone}</a>
				</li>
				<li class="flex items-start gap-3">
					<svg class="mt-0.5 shrink-0 text-accent" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" stroke="currentColor" stroke-width="1.6"/><path d="m2.5 7 9.5 6 9.5-6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
					<a href="mailto:{company.email}" class="link-muted break-all">{company.email}</a>
				</li>
				<li class="flex items-start gap-3">
					<svg class="mt-0.5 shrink-0 text-accent" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="1.6"/></svg>
					<span>{company.address}</span>
				</li>
			</ul>
		</div>
	</div>

	<div class="border-t border-line">
		<div class="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-faint sm:flex-row">
			<p>© {year} {company.name}. All rights reserved.</p>
			<p>Powered by {company.name}</p>
		</div>
	</div>
</footer>
