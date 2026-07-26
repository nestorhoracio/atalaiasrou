export interface Foto {
	src: string;
	alt: string;
}

/**
 * TODO (prioridad media, ver ROADMAP.md): reemplazar por el texto real de
 * declaración de fe / historia que envíe el Pastor Manoel Da Luz para IMTF
 * Uruguay, y por fotos/videos propios de las actividades (no usar imágenes
 * genéricas, según pedido explícito del cliente).
 */
export const declaracionFe =
	'Texto de ejemplo: acá va la declaración de fe de IMTF Uruguay, con el enfoque en la predicación del evangelio y la acción social que caracteriza al ministerio. Reemplazar por el texto definitivo que envíe el Pastor Manoel Da Luz.';

export const historia =
	'Texto de ejemplo: acá va la historia del proyecto IMTF Uruguay — cómo comenzó, hitos importantes y la obra social que desarrolla en el país. Reemplazar por el contenido real.';

export const fotos: Foto[] = [];

/** IDs de video de YouTube (solo el ID, no la URL completa). Vacío = sin videos todavía. */
export const videoIdsYoutube: string[] = [];
