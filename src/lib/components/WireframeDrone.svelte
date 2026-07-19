<script>
	// Top-view hexacopter schematic line drawing.
	let { class: klass = '', stroke = 'rgba(255,255,255,0.28)', accent = '#ea5e1e' } = $props();
	const arms = [0, 60, 120, 180, 240, 300];
</script>

<svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" class={klass} aria-hidden="true">
	<g transform="translate(120 120)">
		{#each arms as a}
			<g transform="rotate({a})">
				<!-- arm -->
				<line x1="0" y1="0" x2="0" y2="-92" {stroke} stroke-width="2" />
				<!-- motor -->
				<circle cx="0" cy="-92" r="9" {stroke} stroke-width="2" />
				<!-- prop -->
				<ellipse cx="0" cy="-92" rx="34" ry="7" stroke={accent} stroke-width="1.4" opacity="0.7" />
			</g>
		{/each}
		<!-- body hexagon -->
		<polygon
			points="0,-26 22.5,-13 22.5,13 0,26 -22.5,13 -22.5,-13"
			{stroke}
			stroke-width="2"
		/>
		<circle cx="0" cy="0" r="7" stroke={accent} stroke-width="2" />
		<!-- dimension ticks -->
		<line x1="-92" y1="108" x2="92" y2="108" {stroke} stroke-width="1" opacity="0.5" />
		<line x1="-92" y1="103" x2="-92" y2="113" {stroke} stroke-width="1" opacity="0.5" />
		<line x1="92" y1="103" x2="92" y2="113" {stroke} stroke-width="1" opacity="0.5" />
	</g>
</svg>
