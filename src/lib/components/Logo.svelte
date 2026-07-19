<script>
	// Real D Aerospace tri-blade mark. Source art is white-on-black.
	// Dark theme: mix-blend-screen drops the black backing.
	// Light theme (via .logo-mark CSS in app.css): invert + multiply shows a black mark.
	let { size = 34, withWordmark = false, class: klass = '' } = $props();
</script>

<a href="/" class="inline-flex items-center gap-3 {klass}" aria-label="D Aerospace — home">
	<img
		src="/img/logo.webp"
		alt="D Aerospace"
		width={size}
		height={size}
		class="logo-mark shrink-0 select-none object-contain"
		style="width:{size}px;height:{size}px"
		draggable="false"
	/>
	{#if withWordmark}
		<span class="display text-[1.05rem] leading-none tracking-[0.25em]">D&nbsp;AEROSPACE</span>
	{/if}
</a>
