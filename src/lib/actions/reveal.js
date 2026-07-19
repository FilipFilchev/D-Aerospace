// Svelte action: Apple-style reveal — fade + directional slide + optional scale/blur.
// Initial hidden state is applied via the `.reveal` CSS class (set before paint, no flash).
// Options: { delay, y, x, scale, blur, duration, threshold, once }
//   use:reveal
//   use:reveal={{ delay: 120 }}
//   use:reveal={{ x: -40, y: 0 }}          // slide in from left
//   use:reveal={{ scale: 0.92, blur: 8 }}  // blur-up / zoom
export function reveal(node, options = {}) {
	const {
		delay = 0,
		y = 26,
		x = 0,
		scale = 1,
		blur = 0,
		duration = 800,
		threshold = 0.12,
		once = true
	} = options;

	node.classList.add('reveal');
	node.style.setProperty('--rv-y', `${y}px`);
	node.style.setProperty('--rv-x', `${x}px`);
	node.style.setProperty('--rv-scale', `${scale}`);
	node.style.setProperty('--rv-blur', `${blur}px`);
	node.style.setProperty('--rv-duration', `${duration}ms`);
	node.style.setProperty('--rv-delay', `${delay}ms`);

	if (typeof IntersectionObserver === 'undefined') {
		node.classList.add('is-visible');
		return {};
	}

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.classList.add('is-visible');
					if (once) observer.unobserve(node);
				} else if (!once) {
					node.classList.remove('is-visible');
				}
			}
		},
		{ threshold, rootMargin: '0px 0px -8% 0px' }
	);

	observer.observe(node);
	return {
		destroy() {
			observer.disconnect();
		}
	};
}

// Subtle pointer parallax for hero imagery (desktop only).
export function parallax(node, strength = 14) {
	if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) return {};
	let raf = 0;
	const onMove = (e) => {
		cancelAnimationFrame(raf);
		raf = requestAnimationFrame(() => {
			const rx = (e.clientX / window.innerWidth - 0.5) * strength;
			const ry = (e.clientY / window.innerHeight - 0.5) * strength;
			node.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
		});
	};
	window.addEventListener('pointermove', onMove, { passive: true });
	node.style.transition = 'transform 0.4s cubic-bezier(0.16,1,0.3,1)';
	return {
		destroy() {
			window.removeEventListener('pointermove', onMove);
			cancelAnimationFrame(raf);
		}
	};
}
