import { z } from 'astro/zod'



const lang = z.enum(['de', 'en'])
export type Lang = z.infer<typeof lang>

const translations = z.record(lang, z.string())

const oTranslations = translations.optional()

const project = z.object({
  headline: z.string(),
  description: z.string().optional(),
  link: z.object({
    url: z.string().url(),
    label: z.string()
  }),
  image: z.string()
})

export type Project = z.infer<typeof project>

export const projects = project.array()

export type Projects = z.infer<typeof projects>
