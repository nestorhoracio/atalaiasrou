import type { Radio } from '../data/radios';
import { estaDisponible } from '../data/radios';

interface BreadcrumbItem {
	name: string;
	path: string;
}

export function breadcrumbList(site: URL, items: BreadcrumbItem[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, indice) => ({
			'@type': 'ListItem',
			position: indice + 1,
			name: item.name,
			item: new URL(item.path, site).href,
		})),
	};
}

export function radioPagePath(radio: Radio): string {
	return `/radios/${radio.id}/`;
}

function radioStationEntity(site: URL, radio: Radio) {
	return {
		'@type': 'RadioStation',
		name: radio.nombre,
		url: new URL(radioPagePath(radio), site).href,
		...(radio.logo ? { logo: new URL(radio.logo, site).href } : {}),
	};
}

export function radioStationList(site: URL, radios: Radio[]) {
	const disponibles = radios.filter(estaDisponible);

	return {
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		itemListElement: disponibles.map((radio, indice) => ({
			'@type': 'ListItem',
			position: indice + 1,
			item: radioStationEntity(site, radio),
		})),
	};
}

export function radioStation(site: URL, radio: Radio) {
	return {
		'@context': 'https://schema.org',
		...radioStationEntity(site, radio),
	};
}
