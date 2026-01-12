
export const languages = ["en", "es", "fr", "zh", "jp"] as const;
export type Language = (typeof languages)[number];
export const defaultLanguage: Language = "en";

export function isLanguage(lang: string): lang is Language {
    return languages.includes(lang as Language);
}

export async function getLanguage(): Promise<Language> {
    const { cookies } = await import("next/headers");

    const cookieStore = await cookies();
    const languageCookie = cookieStore.get('language')?.value ?? "";
    const language = isLanguage(languageCookie) ? languageCookie as Language : defaultLanguage;

    return language;
}
