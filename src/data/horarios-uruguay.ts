export interface Horario {
	actividad: string;
	dia: string;
	hora: string;
}

/**
 * TODO (prioridad media, ver ROADMAP.md): reemplazar por los horarios reales
 * de actividades y eventos de IMTF Uruguay.
 */
export const horarios: Horario[] = [
	{ actividad: 'Culto de celebración', dia: 'Domingo', hora: 'A confirmar' },
	{ actividad: 'Reunión de oración', dia: 'Miércoles', hora: 'A confirmar' },
];
