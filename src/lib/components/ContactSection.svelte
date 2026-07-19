<script>
	import { reveal } from '$lib/actions/reveal.js';

	let { id = 'contact' } = $props();

	// TODO(client): replace with a real form endpoint (e.g. Formspree / your API).
	const ENDPOINT = '';

	let status = $state('idle'); // idle | sending | sent | error
	let form = $state({ name: '', phone: '', email: '', country: '', message: '' });

	async function handleSubmit(e) {
		e.preventDefault();
		status = 'sending';
		try {
			if (ENDPOINT) {
				const res = await fetch(ENDPOINT, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
					body: JSON.stringify(form)
				});
				if (!res.ok) throw new Error('bad response');
			} else {
				// No endpoint configured yet — simulate success for the demo.
				await new Promise((r) => setTimeout(r, 650));
			}
			status = 'sent';
			form = { name: '', phone: '', email: '', country: '', message: '' };
		} catch {
			status = 'error';
		}
	}
</script>

<section {id} class="scroll-mt-24 py-24 sm:py-28">
	<div class="container-x max-w-3xl text-center" use:reveal>
		<h2 class="display text-3xl sm:text-4xl">Contact Us</h2>
		<p class="mt-4 text-lg font-semibold">Let’s talk!</p>
		<p class="mt-1 text-muted">You can drop in your details to connect &amp; request a demo.</p>
	</div>

	<form
		class="container-x mt-12 max-w-3xl"
		onsubmit={handleSubmit}
		use:reveal={{ delay: 100 }}
	>
		{#if status === 'sent'}
			<div class="card grid place-items-center gap-3 px-6 py-16 text-center">
				<div class="grid h-14 w-14 place-items-center rounded-full bg-accent/15 text-accent">
					<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
				</div>
				<h3 class="text-xl font-semibold">Thanks — we’ll be in touch! 🎉</h3>
				<p class="text-muted">Your message is on its way to our team.</p>
				<button type="button" class="btn btn-ghost mt-2" onclick={() => (status = 'idle')}>Send another</button>
			</div>
		{:else}
			<div class="grid gap-4 sm:grid-cols-2">
				<input class="field" type="text" placeholder="Name" bind:value={form.name} required />
				<input class="field" type="tel" placeholder="Phone Number" bind:value={form.phone} />
				<input class="field" type="email" placeholder="Email" bind:value={form.email} required />
				<input class="field" type="text" placeholder="Country" bind:value={form.country} />
				<textarea class="field sm:col-span-2" rows="5" placeholder="Message" bind:value={form.message}></textarea>
			</div>

			<div class="mt-6 flex flex-col items-center gap-3">
				<button type="submit" class="btn btn-light px-8" disabled={status === 'sending'}>
					{status === 'sending' ? 'Sending…' : 'Join the party 🎉'}
				</button>
				{#if status === 'error'}
					<p class="text-sm text-accent">Something went wrong — please try again or email us directly.</p>
				{/if}
			</div>
		{/if}
	</form>
</section>

<style>
	/* Dark theme: dark fields (as the original design); light theme: light-gray Figma fields */
	:global(.field) {
		width: 100%;
		border-radius: 14px;
		background: var(--color-panel);
		border: 1px solid var(--color-line);
		padding: 0.95rem 1.15rem;
		color: var(--color-fg);
		font-size: 0.95rem;
		transition: box-shadow 0.2s ease, background 0.2s ease, border-color 0.2s ease;
	}
	:global(.field::placeholder) {
		color: var(--color-faint);
	}
	:global(.field:focus) {
		outline: none;
		background: var(--color-panel-2);
		border-color: transparent;
		box-shadow: 0 0 0 2px var(--color-accent);
	}
	:global([data-theme='light'] .field) {
		background: #f4f4f4;
		border-color: transparent;
	}
	:global([data-theme='light'] .field:focus) {
		background: #ffffff;
	}
</style>
