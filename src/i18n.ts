import { getEntry } from "astro:content";
import { z } from "astro/zod";

export const LANGUAGES = ["de", "en"];
export type Lang = (typeof LANGUAGES)[number];

export const translationKey = z.enum([
  "title",
  "description",
  "est",
  "footerOS",
  "footerMade",
]);

export type TranslationKey = z.infer<typeof translationKey>;

export const useTranslations = (lang: Lang) => async (key: TranslationKey) => {
  const entry = await getEntry("i18n", lang).catch(() => ({ data: {} }));
  // Show missing translation `key` in case `data` is missing
  return entry?.data[key] ?? `${lang}.${key}`;
};
