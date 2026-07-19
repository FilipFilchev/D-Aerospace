<script>
	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ChatButton from '$lib/components/ChatButton.svelte';

	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col bg-ink text-fg">
	<Nav />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>
<ChatButton />
