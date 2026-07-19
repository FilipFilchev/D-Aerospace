// Global theme state (Svelte 5 runes module).
export const theme = $state({ current: 'dark' });

export function initTheme() {
	if (typeof document === 'undefined') return;
	theme.current = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
}

export function toggleTheme() {
	theme.current = theme.current === 'dark' ? 'light' : 'dark';
	if (typeof document !== 'undefined') {
		if (theme.current === 'light') document.documentElement.setAttribute('data-theme', 'light');
		else document.documentElement.removeAttribute('data-theme');
		try {
			localStorage.setItem('theme', theme.current);
		} catch {}
	}
}
