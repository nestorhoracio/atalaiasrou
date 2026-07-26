export interface Horario {
	atividade: string;
	dia: string;
	hora: string;
}

/**
 * TODO (prioridade média, ver ROADMAP.md): substituir pelos horários reais
 * de atividades e eventos do IMTF Brasil.
 */
export const horarios: Horario[] = [
	{ atividade: 'Culto de celebração', dia: 'Domingo', hora: 'A confirmar' },
	{ atividade: 'Reunião de oração', dia: 'Quarta-feira', hora: 'A confirmar' },
];
