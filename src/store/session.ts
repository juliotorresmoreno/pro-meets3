import { create } from "zustand";
import { persist } from "zustand/middleware";
import CookieStorage from "@/utils/cookieStorage";

const cookieStorage = new CookieStorage();

interface SessionState {
    token: string | null;
}

const useSessionStore = create<SessionState>()(
    persist(
        (set) => ({
            token: null,
            setToken: (token: string | null) => set({ token }),
        }),
        {
            name: "session",
            storage: {
                getItem: (name) => {
                    const stored = cookieStorage.getItem(name);
                    return stored ? { state: { [name]: stored }, version: 0 } : null;
                },
                setItem: (name, value) => {
                    const key = name as keyof typeof value.state;
                    cookieStorage.setItem(name, value.state[key] ?? "");
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

export default useSessionStore;
