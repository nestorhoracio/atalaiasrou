export interface Radio {
	id: string;
	nombre: string;
	/** URL de streaming HTTPS (.mp3/.aac). `null` = todavía no la conseguimos. */
	streamUrl: string | null;
	pais?: 'UY' | 'BR' | 'Otro';
	descripcion?: string;
	logo?: string;
}

/**
 * TODO (prioridad alta, ver ROADMAP.md): completar las 20 emisoras con sus
 * URLs de streaming reales (HTTPS). Conseguir la URL del stream crudo de cada
 * radio suele requerir inspeccionar la pestaña de red del navegador en el
 * reproductor embebido del sitio de cada emisora — no siempre está publicada
 * como enlace directo.
 */
export const radios: Radio[] = [
	{
		id: 'radio-prueba',
		nombre: 'Radio de prueba (Radio Paradise)',
		streamUrl: 'https://stream.radioparadise.com/mp3-192',
		pais: 'Otro',
		descripcion: 'Stream de prueba genérico para validar el reproductor — NO es una radio evangélica ni contenido final del proyecto. Reemplazar por la primera emisora real. (Nota: se descartó SomaFM como fixture porque bloquea con HTTP 403 cualquier User-Agent de navegador, es decir, bloquea el hotlinking desde sitios de terceros — algo a tener en cuenta también al conseguir las URLs reales de las 20 emisoras.)',
	},
	{ id: 'radio-02', nombre: 'Radio 02', streamUrl: null }, // TODO: URL pendiente
	{ id: 'radio-03', nombre: 'Radio 03', streamUrl: null }, // TODO: URL pendiente
	{ id: 'radio-04', nombre: 'Radio 04', streamUrl: null }, // TODO: URL pendiente
	{ id: 'radio-05', nombre: 'Radio 05', streamUrl: null }, // TODO: URL pendiente
	{ id: 'radio-06', nombre: 'Radio 06', streamUrl: null }, // TODO: URL pendiente
	{ id: 'radio-07', nombre: 'Radio 07', streamUrl: null }, // TODO: URL pendiente
	{ id: 'radio-08', nombre: 'Radio 08', streamUrl: null }, // TODO: URL pendiente
	{ id: 'radio-09', nombre: 'Radio 09', streamUrl: null }, // TODO: URL pendiente
	{ id: 'radio-10', nombre: 'Radio 10', streamUrl: null }, // TODO: URL pendiente
	{ id: 'radio-11', nombre: 'Radio 11', streamUrl: null }, // TODO: URL pendiente
	{ id: 'radio-12', nombre: 'Radio 12', streamUrl: null }, // TODO: URL pendiente
	{ id: 'radio-13', nombre: 'Radio 13', streamUrl: null }, // TODO: URL pendiente
	{ id: 'radio-14', nombre: 'Radio 14', streamUrl: null }, // TODO: URL pendiente
	{ id: 'radio-15', nombre: 'Radio 15', streamUrl: null }, // TODO: URL pendiente
	{ id: 'radio-16', nombre: 'Radio 16', streamUrl: null }, // TODO: URL pendiente
	{ id: 'radio-17', nombre: 'Radio 17', streamUrl: null }, // TODO: URL pendiente
	{ id: 'radio-18', nombre: 'Radio 18', streamUrl: null }, // TODO: URL pendiente
	{ id: 'radio-19', nombre: 'Radio 19', streamUrl: null }, // TODO: URL pendiente
	{ id: 'radio-20', nombre: 'Radio 20', streamUrl: null }, // TODO: URL pendiente
];

export function esHttps(url: string | null | undefined): boolean {
	return !!url && url.startsWith('https://');
}

export function estaDisponible(radio: Radio): boolean {
	return esHttps(radio.streamUrl);
}
