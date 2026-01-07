
export const languages = ["en", "es", "fr", "zh", "jp"] as const;
export type Language = (typeof languages)[number];
export const defaultLanguage: Language = "en";


