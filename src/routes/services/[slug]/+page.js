import { serviceSteps, getServiceStep } from '$lib/data/site.js';
import { error } from '@sveltejs/kit';

export const prerender = true;

export function entries() {
	return serviceSteps.map((s) => ({ slug: s.slug }));
}

export function load({ params }) {
	const step = getServiceStep(params.slug);
	if (!step) error(404, 'Service not found');

	const index = serviceSteps.findIndex((s) => s.slug === params.slug);
	const prev = serviceSteps[(index - 1 + serviceSteps.length) % serviceSteps.length];
	const next = serviceSteps[(index + 1) % serviceSteps.length];
	return { step, index, prev, next };
}
