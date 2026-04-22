import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Blog
const blog = defineCollection({ 
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog"}),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

// Exporting `collections`
export const collections = { blog };
