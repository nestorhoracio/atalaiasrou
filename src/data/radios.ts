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
 * Datos reales recibidos del Pastor Manoel Da Luz (Excel "Listado-Radios-Atalaias.xlsx",
 * 2026-08-01). 18 de las 20 emisoras tienen stream HTTPS confirmado.
 *
 * `radio-atalaias-sion` y `radio-atalaias-sc` quedan con `streamUrl: null`: sus dominios
 * (radiostream321.com / radio12345.com / radiostream123.com, plataforma listen2myradio.com)
 * sirven una página HTML embebida, no el stream crudo — hace falta inspeccionar la pestaña
 * de red de un navegador real para sacar la URL directa (ver nota de hotlink/User-Agent
 * más abajo). No publicar su tarjeta como disponible hasta confirmarlo.
 */
export const radios: Radio[] = [
	{
		id: 'radio-atalaias-rou',
		nombre: 'Radio Atalaias Rou',
		streamUrl: 'https://stream.zeno.fm/v9o0lzd1poqvv',
		pais: 'UY',
		logo: '/images/radios/radio-atalaias-rou.webp',
	},
	{
		id: 'radio-atalaias-leon',
		nombre: 'Radio Atalaias Leon',
		streamUrl: 'https://stream.zeno.fm/pu6fn1xnr0hvv',
		pais: 'UY',
		logo: '/images/radios/radio-atalaias-leon.webp',
	},
	{
		id: 'radio-atalaias-gold',
		nombre: 'Radio Atalaias Gold',
		streamUrl: 'https://stream.zeno.fm/kcdtmg27kuhvv',
		pais: 'UY',
		logo: '/images/radios/radio-atalaias-gold.webp',
	},
	{
		id: 'radio-atalaias-channel',
		nombre: 'Radio Atalaias Channel',
		streamUrl: 'https://stream.zeno.fm/5z4w6tp5muhvv',
		pais: 'UY',
		logo: '/images/radios/radio-atalaias-channel.webp',
	},
	{
		id: 'radio-atalaias-ebenezer',
		nombre: 'Radio Atalaias Ebenezer',
		streamUrl: 'https://stream.zeno.fm/cbdqtlyqutnvv',
		pais: 'UY',
		logo: '/images/radios/radio-atalaias-ebenezer.webp',
	},
	{
		id: 'radio-atalaias-el-shaddai',
		nombre: 'Radio Atalaias El Shaddai',
		streamUrl: 'https://stream.zeno.fm/fnf0xody53zuv',
		pais: 'UY',
		logo: '/images/radios/radio-atalaias-el-shaddai.webp',
	},
	{
		id: 'radio-atalaias-vida',
		nombre: 'Radio Atalaias Vida',
		streamUrl: 'https://stream.zeno.fm/yhwej1kh3dwuv',
		pais: 'UY',
		logo: '/images/radios/radio-atalaias-vida.webp',
	},
	{
		id: 'radio-atalaias-inter',
		nombre: 'Radio Atalaias Inter',
		streamUrl: 'https://stream.zeno.fm/h799x3r7cxhvv',
		pais: 'UY',
		logo: '/images/radios/radio-atalaias-inter.webp',
	},
	{
		id: 'radio-atalaias-america',
		nombre: 'Radio Atalaias America',
		streamUrl: 'https://stream.zeno.fm/6uyrhgpkfyltv',
		pais: 'UY',
		logo: '/images/radios/radio-atalaias-america.webp',
	},
	{
		id: 'radio-atalaias-el-predicador',
		nombre: 'Radio Atalaias El Predicador',
		streamUrl: 'https://stream.zeno.fm/gderclzwsebvv',
		pais: 'UY',
		logo: '/images/radios/radio-atalaias-el-predicador.webp',
	},
	{
		id: 'radio-atalaias-sion',
		nombre: 'Radio Atalaias Sion',
		// URL cruda extraída del HTML de radioatalaiassion.radiostream321.com (div#urladdress
		// que su propio JS pasa directo al reproductor) y confirmada en vivo por Néstor 2026-08-01.
		streamUrl: 'https://uk7freenew.listen2myradio.com/live.mp3?typeportmount=s1_25749_stream_814607405',
		pais: 'UY',
		descripcion: 'Plataforma listen2myradio.com (no Zeno).',
		logo: '/images/radios/radio-atalaias-sion.webp',
	},
	{
		id: 'radio-atalaias-blue',
		nombre: 'Radio Atalaias Blue',
		streamUrl: 'https://261962.caster.fm/',
		pais: 'UY',
		descripcion: 'Plataforma Caster.fm (no Zeno).',
		logo: '/images/radios/radio-atalaias-blue.webp',
	},
	{
		id: 'radio-atalaias-soft',
		nombre: 'Radio Atalaias Soft',
		streamUrl: 'https://stream.zeno.fm/2gc616ztpc9uv',
		pais: 'BR',
		logo: '/images/radios/radio-atalaias-soft.webp',
	},
	{
		id: 'radio-atalaias-universo',
		nombre: 'Radio Atalaias Universo',
		streamUrl: 'https://stream.zeno.fm/tpzx2mdypuhvv',
		pais: 'BR',
		logo: '/images/radios/radio-atalaias-universo.webp',
	},
	{
		id: 'radio-atalaias-mundo',
		nombre: 'Radio Atalaias Mundo',
		streamUrl: 'https://stream.zeno.fm/n3s14cwc1rhvv',
		pais: 'BR',
		logo: '/images/radios/radio-atalaias-mundo.webp',
	},
	{
		id: 'radio-atalaias-genesis',
		nombre: 'Radio Atalaias Genesis',
		streamUrl: 'https://stream.zeno.fm/crl430sxlq5vv',
		pais: 'BR',
		logo: '/images/radios/radio-atalaias-genesis.webp',
	},
	{
		id: 'radio-atalaias-americana',
		nombre: 'Radio Atalaias Americana',
		streamUrl: 'https://stream.zeno.fm/61tbbyecxnhvv',
		pais: 'BR',
		logo: '/images/radios/radio-atalaias-americana.webp',
	},
	{
		id: 'radio-atalaias-continental',
		nombre: 'Radio Atalaias Continental',
		// Marcada "REVISAR URL" en el Excel del cliente, pero verificado en vivo
		// (2026-08-01): responde con el mismo patrón 302 -> CDN de SurferNetwork
		// que las emisoras Zeno.fm ya confirmadas. Se da por válida.
		streamUrl: 'https://stream.zeno.fm/lxcaruzt0jqtv',
		pais: 'BR',
		logo: '/images/radios/radio-atalaias-continental.webp',
	},
	{
		id: 'radio-atalaias-sc',
		nombre: 'Radio Atalaias SC',
		// URL cruda extraída del HTML de atalaiassc.radiostream321.com (mismo patrón que Sion:
		// div#urladdress que el JS del sitio pasa directo al reproductor). Verificada por acá
		// 2026-08-01: responde protocolo Shoutcast v1 (cabecera "ICY 200 OK", icy-name:"Radio
		// Atalaias SC") con audio MP3 real. La página solo expone un stream — no encontramos
		// evidencia de "3 canales" pese a la nota anterior, puede haber sido una confusión.
		streamUrl: 'https://uk3freenew.listen2myradio.com/live.mp3?typeportmount=s1_8216_stream_731028910',
		pais: 'BR',
		descripcion: 'Plataforma listen2myradio.com (no Zeno).',
		logo: '/images/radios/radio-atalaias-sc.webp',
	},
	{
		id: 'radio-atalaias-mndaluz',
		nombre: 'Radio Atalaias Mndaluz',
		streamUrl: 'https://2611962.caster.fm/',
		pais: 'BR',
		descripcion: 'Plataforma Caster.fm (no Zeno).',
		logo: '/images/radios/radio-atalaias-mndaluz.webp',
	},
];

export function esHttps(url: string | null | undefined): boolean {
	return !!url && url.startsWith('https://');
}

export function estaDisponible(radio: Radio): boolean {
	return esHttps(radio.streamUrl);
}
