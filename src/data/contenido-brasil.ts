export interface Foto {
	src: string;
	alt: string;
}

/**
 * TODO (prioridade alta, ver ROADMAP.md): substituir pelo texto real de
 * declaração de fé / história que o Pastor Manoel Da Luz enviar para o IMTF
 * Brasil, e por fotos/vídeos próprios das atividades (não usar imagens
 * genéricas, conforme pedido explícito do cliente).
 */
export const declaracaoDeFe =
	'Texto de exemplo: aqui vai a declaração de fé do IMTF Brasil, com o foco na pregação do evangelho e na ação social que caracteriza o ministério. Substituir pelo texto definitivo enviado pelo Pastor Manoel Da Luz.';

export const historia =
	'Texto de exemplo: aqui vai a história do projeto IMTF Brasil — como começou, marcos importantes e a obra social desenvolvida no país. Substituir pelo conteúdo real.';

export const fotos: Foto[] = [];

/** IDs de vídeo do YouTube (apenas o ID, não a URL completa). Vazio = sem vídeos ainda. */
export const videoIdsYoutube: string[] = [];
