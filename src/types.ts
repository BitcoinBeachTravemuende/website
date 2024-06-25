import { z } from "astro/zod";

const lang = z.enum(["de", "en"]);
export type Lang = z.infer<typeof lang>;

const project = z.object({
  headline: z.string(),
  description: z.string().optional(),
  link: z.object({
    url: z.string().url(),
    label: z.string(),
  }),
  image: z.string(),
});
export type Project = z.infer<typeof project>;

export const projects = project.array();
export type Projects = z.infer<typeof projects>;

// structure of social as same as project
export type Social = z.infer<typeof project>;
export const social = project.array();
