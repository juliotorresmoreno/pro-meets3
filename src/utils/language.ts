
export const languages = ["en", "es", "fr", "zh", "jp"] as const;
export type Language = (typeof languages)[number];
export const defaultLanguage: Language = "en";

export function isLanguage(lang: string): lang is Language {
    return languages.includes(lang as Language);
}