import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const posts = defineCollection({
  // Load Markdown and MDX files in the `src/content/posts/` directory.
  loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
  // Required
  schema: ({ image }) =>
    z.object({
      // Required
      title: z.string().max(60),
      publishDate: z.coerce.date(),
      // Optional
      description: z.string().max(160).optional(),
      updatedDate: z.coerce.date().optional(),
      heroImage: z
        .object({
          src: image(),
          alt: z.string().optional(),
          inferSize: z.boolean().optional(),
          width: z.number().optional(),
          height: z.number().optional(),

          color: z.string().optional()
        })
        .optional(),
      tags: z.array(z.string()).default([]),
      level: z.number().default(0),
      top: z.number().default(0),
      language: z.string().optional(),
      draft: z.boolean().default(false),
      // Integrations
      comment: z.boolean().default(true)
    })
})

export const collections = { posts }
