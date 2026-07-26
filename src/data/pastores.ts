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
 * TODO (prioridad alta, ver ROADMAP.md): reemplazar por los nombres, fotos y
 * descripciones reales de los pastores mundiales, nacionales y regionales.
 * El cliente pidió explícitamente usar material fotográfico propio, no
 * imágenes genéricas — no colocar fotos de stock, dejar el placeholder de
 * silueta hasta tener la foto real.
 */
export const pastores: Pastor[] = [
	{ id: 'mundial-1', nombre: 'Nombre pendiente', nivel: 'mundial' },
	{ id: 'nacional-uy', nombre: 'Nombre pendiente', nivel: 'nacional', pais: 'Uruguay' },
	{ id: 'nacional-br', nombre: 'Nombre pendiente', nivel: 'nacional', pais: 'Brasil' },
	{ id: 'regional-1', nombre: 'Nombre pendiente', nivel: 'regional' },
	{ id: 'regional-2', nombre: 'Nombre pendiente', nivel: 'regional' },
];

export const etiquetasNivel: Record<NivelPastor, string> = {
	mundial: 'Pastor mundial',
	nacional: 'Pastor nacional',
	regional: 'Pastor regional',
};
