import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    slug: z.string(),
    description: z.string().optional().default(""),
    tags: z.array(z.string()).default([]),
    series: z.string().optional(),
    series_order: z.number().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { posts };
