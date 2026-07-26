import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const esquemaNoticia = z.object({
	titulo: z.string(),
	fecha: z.coerce.date(),
	resumen: z.string(),
	imagen: z.string().optional(),
	imagenAlt: z.string().optional(),
	destacada: z.boolean().default(false),
	borrador: z.boolean().default(false),
});

const noticiasUruguay = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/noticias-uruguay' }),
	schema: esquemaNoticia,
});

const noticiasBrasil = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/noticias-brasil' }),
	schema: esquemaNoticia,
});

export const collections = {
	'noticias-uruguay': noticiasUruguay,
	'noticias-brasil': noticiasBrasil,
};
