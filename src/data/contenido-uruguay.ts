export interface Foto {
	src: string;
	alt: string;
}

/**
 * TODO (prioridad media, ver ROADMAP.md): reemplazar por el texto real de
 * declaración de fe que envíe el Pastor Manoel Da Luz para IMTF Uruguay
 * (la historia ya llegó, ver `historia` más abajo), y por fotos/videos
 * propios de las actividades (no usar imágenes genéricas, según pedido
 * explícito del cliente).
 */
export const declaracionFe =
	'Texto de ejemplo: acá va la declaración de fe de IMTF Uruguay, con el enfoque en la predicación del evangelio y la acción social que caracteriza al ministerio. Reemplazar por el texto definitivo que envíe el Pastor Manoel Da Luz.';

/** Cita bíblica que encabeza la historia (texto real enviado por el Pastor Manoel Da Luz, 2026-08-08). */
export const versiculo = {
	referencia: 'Proverbios 18:10',
	texto: 'Torre fuerte es el nombre de Jehová; a Él correrá el justo, y será levantado.',
};

/** Historia real de IMTF Uruguay (texto enviado por el Pastor Manoel Da Luz, 2026-08-08), un párrafo por elemento. */
export const historia: string[] = [
	'IMTF Uruguay es una misión cristiana de carácter evangélico, dedicada a la proclamación del Evangelio de Jesucristo, la formación de discípulos, el fortalecimiento de la Iglesia y el desarrollo de acciones misioneras y sociales que impacten positivamente a la sociedad uruguaya.',
	'El ministerio fue establecido oficialmente en la República Oriental del Uruguay a finales de mayo de 2026, integrándose a la visión internacional de IMTF con el propósito de extender el Reino de Dios, sirviendo con excelencia, integridad y compromiso cristiano.',
	'La visión internacional de la misión es guiada por los Pastores Fundadores Hugo & Narci Palma, desde la sede mundial en Richmond, Virginia, Estados Unidos, quienes han impulsado una obra misionera comprometida con la evangelización, el discipulado, la capacitación ministerial y el servicio a las comunidades.',
	'El ministerio de Misiones Internacionales está bajo la responsabilidad del Pastor y Evangelista Billy Roulet, Responsable Mundial de Misiones, promoviendo la expansión de la obra en las diferentes naciones donde IMTF desarrolla su labor.',
	'En Uruguay, la dirección nacional está a cargo de los Pastores Manoel (Mndaluz) & Shirley da Luz, responsables por el establecimiento, desarrollo y consolidación de la misión en el país.',
	'La Coordinación General está integrada por los Pastores Leonardo & Isabela, quienes colaboran en la planificación, organización y acompañamiento de las diferentes áreas ministeriales.',
	'Inspirada en la promesa de Proverbios 18:10, IMTF Uruguay proclama que Jesucristo es la única Torre Fuerte, refugio seguro para todos aquellos que depositan su confianza en Él. Bajo este fundamento, la misión desarrolla programas de evangelización, discipulado, formación de líderes, plantación de iglesias, asistencia social, apoyo a las familias, cooperación con comunidades y proyectos de impacto espiritual y humanitario.',
	'IMTF Uruguay reafirma su compromiso de trabajar en unidad con el Cuerpo de Cristo, sirviendo a la nación con amor, responsabilidad y excelencia, llevando un mensaje de fe, esperanza y restauración a cada departamento del país y proyectándose hacia las naciones.',
];

/** Lema de cierre de IMTF Uruguay. */
export const lema =
	'Cristo, Nuestra Torre Fuerte. Una misión para evangelizar, discipular, servir y transformar vidas para la gloria de Dios.';

export const fotos: Foto[] = [];

/** IDs de video de YouTube (solo el ID, no la URL completa). Vacío = sin videos todavía. */
export const videoIdsYoutube: string[] = [];
