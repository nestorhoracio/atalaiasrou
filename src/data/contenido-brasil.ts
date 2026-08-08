export interface Foto {
	src: string;
	alt: string;
}

/**
 * TODO (prioridade alta, ver ROADMAP.md): substituir pelo texto real de
 * declaração de fé que o Pastor Manoel Da Luz enviar para o IMTF Brasil
 * (a história já chegou, ver `historia` abaixo), e por fotos/vídeos
 * próprios das atividades (não usar imagens genéricas, conforme pedido
 * explícito do cliente).
 */
export const declaracaoDeFe =
	'Texto de exemplo: aqui vai a declaração de fé do IMTF Brasil, com o foco na pregação do evangelho e na ação social que caracteriza o ministério. Substituir pelo texto definitivo enviado pelo Pastor Manoel Da Luz.';

/** Citação bíblica que abre a história (texto real enviado pelo Pastor Manoel Da Luz, 2026-08-08). */
export const versiculo = {
	referencia: 'Provérbios 18:10',
	texto: 'Torre forte é o nome do Senhor; para ela correrá o justo e estará em alto refúgio.',
};

/** História real do IMTF Brasil (texto enviado pelo Pastor Manoel Da Luz, 2026-08-08), um parágrafo por elemento. */
export const historia: string[] = [
	'A IMTF Brasil – International Missionary Training Fellowship é uma missão cristã evangélica comprometida com a proclamação do Evangelho de Jesus Cristo, o discipulado, a formação e capacitação de líderes, o fortalecimento da Igreja e o desenvolvimento de ações missionárias e sociais voltadas à transformação de vidas, famílias e comunidades.',
	'Firmada sobre os princípios eternos da Palavra de Deus, a IMTF Brasil tem como fundamento a promessa de Provérbios 18:10, reconhecendo que Jesus Cristo é a nossa Torre Forte, o refúgio seguro para todos aqueles que confiam no Senhor. Essa convicção inspira cada projeto, cada missão e cada iniciativa desenvolvida pelo ministério no Brasil e nas nações.',
	'A visão internacional da missão é conduzida pelos Pastores Fundadores Hugo & Narci Palma, a partir da sede mundial em Richmond, Virgínia, Estados Unidos, dedicando suas vidas ao avanço do Reino de Deus por meio da evangelização, do discipulado, da capacitação ministerial, da implantação de igrejas e do fortalecimento da obra missionária em diversos países.',
	'O departamento de Missões Internacionais é dirigido pelo Pastor e Evangelista Billy Roulet, Responsável Mundial de Missões, que coordena, acompanha e incentiva a expansão missionária da IMTF em diferentes continentes, promovendo a unidade, a cooperação entre os campos missionários e o cumprimento da Grande Comissão.',
	'No Brasil, a direção nacional está sob a liderança dos Pastores Manoel (Mndaluz) & Shirley da Luz, responsáveis pela administração, desenvolvimento e expansão da IMTF em território brasileiro. Seu trabalho visa fortalecer igrejas, capacitar obreiros, incentivar a plantação de novas frentes missionárias, promover conferências, treinamentos, projetos evangelísticos e ações sociais que expressem o amor de Cristo de forma prática.',
	'Como instituição cristã, a IMTF Brasil acredita que a missão da Igreja vai além da pregação do Evangelho. Por isso, desenvolve iniciativas que unem evangelização, discipulado, assistência social, apoio às famílias, formação de líderes e cooperação com igrejas e comunidades, contribuindo para o crescimento espiritual e para a transformação da sociedade.',
	'A IMTF Brasil reafirma seu compromisso de servir ao Senhor com fidelidade, integridade, excelência e amor ao próximo, permanecendo firme na missão de anunciar Jesus Cristo, formar discípulos e preparar uma geração comprometida com os valores do Reino de Deus.',
];

/** Lema de encerramento do IMTF Brasil. */
export const lema =
	'Cristo, Nossa Torre Forte. Evangelizando, discipulando, servindo e transformando vidas para a glória de Deus.';

export const fotos: Foto[] = [];

/** IDs de vídeo do YouTube (apenas o ID, não a URL completa). Vazio = sem vídeos ainda. */
export const videoIdsYoutube: string[] = [];
