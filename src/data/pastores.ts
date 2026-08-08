export type NivelPastor = 'mundial' | 'nacional' | 'regional';

export interface Pastor {
	id: string;
	nombre: string;
	nivel: NivelPastor;
	pais?: string;
	/** Ruta a la foto real del pastor. `undefined` = mostrar silueta placeholder. */
	foto?: string;
	descripcion?: string;
}

/**
 * TODO (ver ROADMAP.md): faltan los 2 pastores regionales. El cliente pidió
 * explícitamente usar material fotográfico propio, no imágenes genéricas —
 * no colocar fotos de stock, dejar el placeholder de silueta hasta tener la
 * foto real.
 *
 * Manoel Nunes da Luz y Shirley Rivero da Luz son los pastores nacionales
 * del proyecto en general (no de un país en particular) — confirmado por
 * Néstor el 2026-08-01. El Excel del cliente los había etiquetado "Pastor
 * Nacional Brasil", pero eso era un error de esa planilla: no hay un
 * pastor nacional separado por país.
 */
export const pastores: Pastor[] = [
	{
		id: 'mundial-1',
		nombre: 'Hugo y Narci Palma',
		nivel: 'mundial',
		foto: '/images/pastores/hugo-narci-palma.webp',
	},
	{
		id: 'nacional-1',
		nombre: 'Manoel Nunes da Luz y Shirley Rivero da Luz',
		nivel: 'nacional',
		foto: '/images/pastores/manoel-shirley.webp',
		descripcion: 'Fundador del proyecto y Dirección nacional.',
	},
	{ id: 'regional-1', nombre: 'Nombre pendiente', nivel: 'regional' },
	{ id: 'regional-2', nombre: 'Nombre pendiente', nivel: 'regional' },
];

export const etiquetasNivel: Record<NivelPastor, string> = {
	mundial: 'Pastor mundial',
	nacional: 'Pastor nacional',
	regional: 'Pastor regional',
};
