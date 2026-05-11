import { defineCollection, z } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({
		schema: docsSchema({
			extend: z.object({
				difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
				category: z.string().optional(),
			}),
		}),
	}),
};
