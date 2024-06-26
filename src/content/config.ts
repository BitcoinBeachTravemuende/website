import { defineCollection } from "astro:content";

import { z } from "astro/zod";

const content = z.object({
  url: z.string().url(),
  label: z.string(),
  title: z.string(),
  image: z.string(),
});

const socialCollection = defineCollection({
  type: "content",
  schema: content,
});

const powCollection = defineCollection({
  type: "content",
  schema: content,
});

export const collections = {
  social: socialCollection,
  pow: powCollection,
};
