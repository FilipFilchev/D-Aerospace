<script>
	import { fly, scale } from 'svelte/transition';
	import { company } from '$lib/data/site.js';

	let open = $state(false);
	const tel = company.phone.replace(/\s/g, '');
</script>

<div class="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
	{#if open}
		<div
			class="w-72 overflow-hidden rounded-2xl border border-line bg-ink-2/95 shadow-2xl backdrop-blur-xl"
			transition:fly={{ y: 12, duration: 220 }}
		>
			<div class="bg-gradient-to-br from-accent to-accent-strong p-5 text-white">
				<div class="text-sm font-semibold">Chat with D Aerospace</div>
				<p class="mt-1 text-xs text-white/85">We usually reply within a business day.</p>
			</div>
			<div class="p-2">
				<a href="mailto:{company.email}" class="flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition-colors hover:bg-panel-2">
					<span class="grid h-9 w-9 place-items-center rounded-lg bg-accent/15 text-accent">
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm-.5 2 8.5 6 8.5-6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
					</span>
					<span><span class="block font-medium text-fg">Email us</span><span class="text-xs text-faint">{company.email}</span></span>
				</a>
				<a href="tel:{tel}" class="flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition-colors hover:bg-panel-2">
					<span class="grid h-9 w-9 place-items-center rounded-lg bg-accent/15 text-accent">
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.4 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
					</span>
					<span><span class="block font-medium text-fg">Call us</span><span class="text-xs text-faint">{company.phone}</span></span>
				</a>
				<a href="/contact" onclick={() => (open = false)} class="flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition-colors hover:bg-panel-2">
					<span class="grid h-9 w-9 place-items-center rounded-lg bg-accent/15 text-accent">
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
					</span>
					<span><span class="block font-medium text-fg">Request a demo</span><span class="text-xs text-faint">Open the contact form</span></span>
				</a>
			</div>
		</div>
	{/if}

	<button
		onclick={() => (open = !open)}
		aria-label={open ? 'Close chat' : 'Open chat'}
		class="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-accent to-accent-strong text-white shadow-[0_12px_34px_-8px_rgba(234,94,30,0.7)] transition-transform hover:scale-105 active:scale-95"
	>
		{#if open}
			<svg in:scale={{ duration: 150 }} width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="m6 6 12 12M18 6 6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
		{:else}
			<svg in:scale={{ duration: 150 }} width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>
		{/if}
	</button>
</div>
