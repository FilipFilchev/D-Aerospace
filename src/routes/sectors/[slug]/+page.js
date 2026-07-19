import { sectors, getSector } from '$lib/data/site.js';
import { error } from '@sveltejs/kit';

export const prerender = true;

export function entries() {
	return sectors.map((s) => ({ slug: s.slug }));
}

export function load({ params }) {
	const sector = getSector(params.slug);
	if (!sector) error(404, 'Sector not found');

	const index = sectors.findIndex((s) => s.slug === params.slug);
	const prev = sectors[(index - 1 + sectors.length) % sectors.length];
	const next = sectors[(index + 1) % sectors.length];

	return { sector, index, prev, next };
}
