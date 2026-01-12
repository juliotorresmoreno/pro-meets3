import { create } from "zustand";
import { persist } from "zustand/middleware";
import { defaultLanguage, Language } from "@/utils/language";
import CookieStorage from "@/utils/cookieStorage";

const cookieStorage = new CookieStorage();

interface LanguageState {
    language: Language;
    setLanguage: (lang: Language) => void;
}

const useLanguageStore = create<LanguageState>()(
    persist(
        (set) => ({
            language: defaultLanguage,
            setLanguage: (lang) => {
                set({ language: lang });
                window.location.reload();
            },
        }),
        {
            name: "language",
            storage: {
                getItem: (name) => {
                    const stored = cookieStorage.getItem(name);
                    const value = name === "language" ? (stored ?? defaultLanguage) as Language : stored;
                    return value ? { state: { [name]: value }, version: 0 } : null;
                },
                setItem: (name, value) => {
                    cookieStorage.setItem(name, value.state[name] ?? "");
                    document.location.reload();
                },
                removeItem: (name) => {
                    cookieStorage.removeItem(name);
                    document.location.reload();
                },
            },
        }
    )
);

export default useLanguageStore;
