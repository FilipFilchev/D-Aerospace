<script>
	// Small dark spec pill as seen under each drone (Max Flight Time, Payload…).
	let { label = '', value = '', unit = '', icon = 'gauge' } = $props();

	const paths = {
		time: 'M12 7v5l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
		range: 'M3 12h18M12 3l9 9-9 9M12 3 3 12l9 9',
		payload: 'M4 8h16l-1.5 12H5.5L4 8Zm4 0V6a4 4 0 0 1 8 0v2',
		gauge: 'M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0-9a9 9 0 0 0-9 9 9 9 0 0 0 2 5.7M12 5a9 9 0 0 1 9 9 9 9 0 0 1-2 5.7M12 5V3',
		chip: 'M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3M6 6h12v12H6z',
		shield: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Z'
	};
</script>

<div class="flex items-center gap-3 rounded-2xl border border-line bg-panel/80 px-4 py-3 backdrop-blur-sm">
	<span class="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-accent/12 text-accent">
		<svg width="18" height="18" viewBox="0 0 24 24" fill="none">
			<path d={paths[icon] ?? paths.gauge} stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
		</svg>
	</span>
	<div class="leading-tight">
		<div class="text-[0.68rem] uppercase tracking-wider text-faint">{label}</div>
		<div class="font-display text-sm font-semibold">
			{value}<span class="ml-0.5 text-xs font-normal text-muted">{unit}</span>
		</div>
	</div>
</div>
