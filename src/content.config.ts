import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const articleSchema = z.object({
  title: z.string(),
  description: z.string(),
  published: z.coerce.date(),
  updated: z.coerce.date().optional(),
  tags: z.array(z.string()).default([]),
  featured: z.boolean().default(false),
});

const posts = defineCollection({
  loader: glob({ base: "./src/content/posts", pattern: "**/*.{md,mdx}" }),
  schema: articleSchema,
});

const drafts = defineCollection({
  loader: glob({ base: "./drafts", pattern: "**/*.{md,mdx}" }),
  schema: articleSchema,
});

export const collections = { posts, drafts };
