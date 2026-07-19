<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import Logo from './Logo.svelte';
	import { nav, sectors } from '$lib/data/site.js';
	import { theme, initTheme, toggleTheme } from '$lib/theme.svelte.js';

	let scrolled = $state(false);
	let mobileOpen = $state(false);
	let sectorsOpen = $state(false);

	onMount(() => {
		initTheme();
		const onScroll = () => (scrolled = window.scrollY > 24);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});

	const current = $derived($page.url.pathname);
	const isActive = (href) => current === href || (href !== '/' && current.startsWith(href));
</script>

<svelte:head>
	{#if mobileOpen}
		<style>
			body {
				overflow: hidden;
			}
		</style>
	{/if}
</svelte:head>

<header
	class="fixed inset-x-0 top-0 z-50 transition-all duration-500"
	class:bg-ink={scrolled || theme.current === 'light'}
	class:backdrop-blur-md={scrolled || theme.current === 'light'}
	class:shadow-[0_1px_0_0_var(--color-line)]={scrolled || theme.current === 'light'}
	class:py-4={!scrolled}
	class:py-2={scrolled}
>
	<nav class="container-x flex items-center justify-between gap-6">
		<Logo size={30} />

		<!-- desktop links -->
		<ul class="hidden items-center gap-1 lg:flex">
			{#each nav as item}
				<li
					class="relative"
					role="none"
					onmouseenter={() => item.dropdown && (sectorsOpen = true)}
					onmouseleave={() => item.dropdown && (sectorsOpen = false)}
				>
					<a
						href={item.href}
						class="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm transition-colors duration-200"
						class:text-fg={isActive(item.href)}
						class:bg-panel-2={isActive(item.href)}
						class:text-muted={!isActive(item.href)}
					>
						<span class="hover:text-fg transition-colors">{item.label}</span>
						{#if item.dropdown}
							<svg width="11" height="11" viewBox="0 0 12 12" fill="none" class="mt-px transition-transform duration-200" class:rotate-180={sectorsOpen}>
								<path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						{/if}
					</a>

					{#if item.dropdown && sectorsOpen}
						<div class="absolute left-0 top-full pt-3">
							<div class="card grid w-[320px] grid-cols-1 gap-0.5 bg-ink-2/95 p-2 backdrop-blur-xl">
								{#each sectors as s}
									<a
										href="/sectors/{s.slug}"
										class="rounded-xl px-3 py-2 text-sm text-muted transition-colors hover:bg-panel-2 hover:text-fg"
									>
										{s.name}
									</a>
								{/each}
							</div>
						</div>
					{/if}
				</li>
			{/each}
		</ul>

		<div class="flex items-center gap-3">
			<!-- theme toggle -->
			<button
				class="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition-colors hover:text-fg"
				aria-label="Toggle light/dark theme"
				onclick={toggleTheme}
			>
				{#if theme.current === 'dark'}
					<!-- sun -->
					<svg width="17" height="17" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4.2" stroke="currentColor" stroke-width="1.7"/><path d="M12 2.5v2.4M12 19.1v2.4M2.5 12h2.4M19.1 12h2.4M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M19.1 4.9l-1.7 1.7M6.6 17.4l-1.7 1.7" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>
				{:else}
					<!-- moon -->
					<svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>
				{/if}
			</button>

			<a href="/contact" class="btn btn-accent hidden sm:inline-flex">Contact</a>
			<!-- mobile toggle -->
			<button
				class="grid h-10 w-10 place-items-center rounded-full border border-line lg:hidden"
				aria-label="Toggle menu"
				onclick={() => (mobileOpen = !mobileOpen)}
			>
				<div class="relative h-4 w-5">
					<span class="absolute left-0 h-0.5 w-5 rounded bg-fg transition-all duration-300" class:top-1.5={mobileOpen} class:rotate-45={mobileOpen} class:top-[3px]={!mobileOpen}></span>
					<span class="absolute left-0 top-1.5 h-0.5 w-5 rounded bg-fg transition-all duration-300" class:opacity-0={mobileOpen}></span>
					<span class="absolute left-0 h-0.5 w-5 rounded bg-fg transition-all duration-300" class:bottom-[3px]={!mobileOpen} class:top-1.5={mobileOpen} class:-rotate-45={mobileOpen}></span>
				</div>
			</button>
		</div>
	</nav>
</header>

<!-- mobile menu -->
{#if mobileOpen}
	<div class="fixed inset-0 z-40 bg-ink/98 backdrop-blur-xl lg:hidden">
		<div class="container-x flex h-full flex-col pt-28 pb-10">
			<ul class="flex flex-col gap-1">
				{#each nav as item}
					<li>
						<a
							href={item.href}
							class="block border-b border-line py-4 text-2xl font-medium"
							class:text-accent={isActive(item.href)}
							onclick={() => (mobileOpen = false)}
						>
							{item.label}
						</a>
					</li>
				{/each}
			</ul>
			<a href="/contact" class="btn btn-accent mt-8 w-full" onclick={() => (mobileOpen = false)}>Contact</a>
		</div>
	</div>
{/if}
