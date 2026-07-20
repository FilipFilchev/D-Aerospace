<script>
	import { onMount } from 'svelte';
	import { reveal } from '$lib/actions/reveal.js';

	let { id = 'contact' } = $props();

	// TODO(client): replace with a real form endpoint (e.g. Formspree / your API).
	const ENDPOINT = '';

	let status = $state('idle'); // idle | sending | sent | error
	let form = $state({ name: '', phone: '', email: '', country: '', message: '' });

	// ---- anti-bot: arithmetic challenge + honeypot -------------------------
	let a = $state(3);
	let b = $state(4);
	let humanAnswer = $state('');
	let botError = $state('');
	let honeypot = $state(''); // hidden from humans; bots tend to fill every field

	const newChallenge = () => {
		a = 1 + Math.floor(Math.random() * 9);
		b = 1 + Math.floor(Math.random() * 9);
		humanAnswer = '';
	};

	// randomise on the client so the numbers differ per visitor
	onMount(newChallenge);

	const isHuman = $derived(Number(humanAnswer) === a + b);

	async function handleSubmit(e) {
		e.preventDefault();
		botError = '';

		// honeypot tripped — silently accept without sending anything
		if (honeypot) {
			status = 'sent';
			return;
		}
		if (!isHuman) {
			botError = `Please answer the question: what is ${a} + ${b}?`;
			newChallenge();
			return;
		}

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
			newChallenge();
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

			<!-- honeypot: parked off-screen — invisible to people, irresistible to bots -->
			<div class="hp-field" aria-hidden="true">
				<label for="website-hp">Website</label>
				<input id="website-hp" name="website" type="text" tabindex="-1" autocomplete="off" bind:value={honeypot} />
			</div>

			<!-- human check -->
			<div class="card mt-4 flex flex-col items-start gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
				<div class="flex items-center gap-3">
					<span class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/12 text-accent">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="m9 12 2 2 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
					</span>
					<div>
						<div class="text-sm font-medium">Are you a robot?</div>
						<div class="text-xs text-muted">Quick check before we send your message.</div>
					</div>
				</div>
				<div class="flex items-center gap-3">
					<span class="font-display text-lg font-semibold whitespace-nowrap">{a} + {b} =</span>
					<input
						class="field !w-24 text-center"
						type="text"
						inputmode="numeric"
						aria-label="Answer: what is {a} plus {b}?"
						placeholder="?"
						bind:value={humanAnswer}
						required
					/>
					{#if isHuman}
						<span class="text-accent" aria-label="Verified">
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
						</span>
					{/if}
				</div>
			</div>

			<div class="mt-6 flex flex-col items-center gap-3">
				<button type="submit" class="btn btn-light px-8" disabled={status === 'sending' || !isHuman}>
					{status === 'sending' ? 'Sending…' : 'Join the party 🎉'}
				</button>
				{#if botError}
					<p class="text-sm text-accent">{botError}</p>
				{/if}
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

	/* honeypot — parked far off-screen, never shown to a real visitor */
	.hp-field {
		position: absolute !important;
		left: -9999px !important;
		top: auto;
		width: 1px;
		height: 1px;
		overflow: hidden;
	}
</style>
