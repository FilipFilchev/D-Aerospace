<script>
	// Stylised "published paper" preview (placeholder for a real PDF thumbnail).
	let { title = '', seed = 0 } = $props();
	// deterministic pseudo-random line widths so each thumb looks a little different
	const rnd = (n) => {
		const x = Math.sin(seed * 12.9898 + n * 78.233) * 43758.5453;
		return x - Math.floor(x);
	};
	const lines = Array.from({ length: 9 }, (_, i) => 40 + rnd(i) * 52);
</script>

<div class="relative aspect-[3/4] w-full overflow-hidden rounded-t-[18px] bg-white">
	<div class="absolute inset-0 flex flex-col gap-[6px] p-5">
		<!-- title block -->
		<div class="mb-1 space-y-1.5">
			<div class="h-2 w-2/3 rounded-full bg-neutral-800"></div>
			<div class="h-2 w-1/2 rounded-full bg-neutral-800"></div>
		</div>
		<div class="mb-1 h-1.5 w-1/4 rounded-full bg-accent"></div>
		<!-- two columns of text lines -->
		<div class="grid flex-1 grid-cols-2 gap-3">
			<div class="space-y-[5px]">
				{#each lines as w}
					<div class="h-1 rounded-full bg-neutral-300" style="width:{w}%"></div>
				{/each}
			</div>
			<div class="space-y-[5px]">
				{#each lines as w}
					<div class="h-1 rounded-full bg-neutral-300" style="width:{100 - w + 40}%"></div>
				{/each}
			</div>
		</div>
	</div>
	<div class="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-white to-transparent"></div>
</div>
