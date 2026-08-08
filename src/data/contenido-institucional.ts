/**
 * Contenido institucional general de "Proyecto Atalaias Rou" (el ministerio
 * completo, no específico de IMTF Uruguay ni IMTF Brasil). Adaptado para web
 * a partir del informe institucional que envió el Pastor Manoel Da Luz
 * (2026-08-01) — reescrito en párrafos cortos, no es una copia literal del
 * PDF. Deliberadamente NO incluye los datos bancarios/de donación del
 * informe original: ver ROADMAP.md antes de publicar cualquier dato de pago.
 *
 * La declaración de fe / historia específica de IMTF Uruguay y de IMTF
 * Brasil vive aparte, en contenido-uruguay.ts / contenido-brasil.ts. La
 * historia ya llegó (2026-08-08); la declaración de fe sigue pendiente.
 */

export const presentacion =
	'Atalaias Rou es un ministerio de comunicación cristiana con sede en Uruguay, dedicado a proclamar el Evangelio a través de las tecnologías de comunicación contemporáneas. Integra radios por Internet, plataformas digitales, producción audiovisual y apoyo a la obra misionera internacional, con el propósito de alcanzar vidas, fortalecer iglesias y servir al Reino de Dios.';

export const historia =
	'El proyecto nació como respuesta al llamado de usar los medios digitales como herramienta de evangelización, en una época donde millones de personas buscan respuestas en Internet. Con oración, esfuerzo y el apoyo de hermanos y colaboradores, fue creciendo hasta integrar una red de emisoras cristianas con programación en español y portugués, y continúa expandiéndose en Uruguay, Brasil y otros países de América Latina.';

export const mision =
	'Predicar el Evangelio de Jesucristo mediante medios digitales, fortaleciendo la fe de los creyentes y llevando esperanza a través de una programación cristiana permanente.';

export const vision =
	'Ser una referencia internacional en comunicación cristiana, estableciendo una red de emisoras, ministerios y misioneros comprometidos con la expansión del Reino de Dios.';

export const valores: string[] = [
	'Fidelidad a las Escrituras',
	'Amor por las almas',
	'Integridad',
	'Servicio',
	'Transparencia',
	'Unidad del Cuerpo de Cristo',
	'Excelencia',
	'Compromiso con la Gran Comisión',
];

export interface AreaTrabajo {
	titulo: string;
	descripcion: string;
}

export const areasTrabajo: AreaTrabajo[] = [
	{ titulo: 'Comunicación', descripcion: 'Producción y transmisión de programación cristiana.' },
	{ titulo: 'Evangelización', descripcion: 'Difusión permanente del mensaje de salvación.' },
	{ titulo: 'Misiones', descripcion: 'Apoyo a iglesias y proyectos misioneros nacionales e internacionales.' },
	{ titulo: 'Capacitación', descripcion: 'Formación de colaboradores en radio, comunicación y evangelización digital.' },
	{
		titulo: 'Producción multimedia',
		descripcion: 'Diseño gráfico, videos, transmisiones en vivo y contenidos para redes sociales.',
	},
];

export const proyectosVinculados =
	'Como parte de su expansión internacional, el ministerio impulsa el Proyecto IMTF Uruguay y el Proyecto IMTF Brasil: campañas evangelísticas, apertura de nuevas congregaciones, formación de líderes, cooperación entre iglesias y expansión de la comunicación cristiana en Sudamérica.';

export interface RolOrganigrama {
	rol: string;
	nombre: string;
}

export const organigrama: RolOrganigrama[] = [
	{ rol: 'Fundador del proyecto', nombre: 'Manoel Nunes da Luz y esposa Shirley Rivero da Luz' },
	{ rol: 'Coordinador general', nombre: 'Leonardo y su esposa Isabella' },
	{ rol: 'Dirección nacional', nombre: 'Shirley Rivero da Luz' },
	{ rol: 'Equipo', nombre: 'Operadores de radio, productores, diseñadores, colaboradores, intercesores y voluntarios' },
];

export interface CitaBiblica {
	referencia: string;
	texto: string;
}

export const fundamentoBiblico: CitaBiblica[] = [
	{ referencia: 'Marcos 16:15', texto: 'Id por todo el mundo y predicad el evangelio a toda criatura.' },
	{
		referencia: 'Hechos 1:8',
		texto: 'Y me seréis testigos en Jerusalén, en toda Judea, en Samaria, y hasta lo último de la tierra.',
	},
	{ referencia: 'Romanos 10:13', texto: 'Porque todo aquel que invocare el nombre del Señor, será salvo.' },
];

export const lema = {
	es: 'Siempre en la Sintonía con Dios',
	pt: 'A Sintonia entre Deus e você',
};
