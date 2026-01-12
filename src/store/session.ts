import { create } from "zustand";
import { persist } from "zustand/middleware";
import CookieStorage from "@/utils/cookieStorage";

const cookieStorage = new CookieStorage();

interface SessionState {
    accessToken: string | null;
    refreshToken: string | null;

    setAccessToken: (accessToken: string | null) => void;
    setRefreshToken: (refreshToken: string | null) => void;
}

const useSessionStore = create<SessionState>()(
    persist(
        (set) => ({
            accessToken: null,
            refreshToken: null,
            setAccessToken: (accessToken: string | null) => set({ accessToken }),
            setRefreshToken: (refreshToken: string | null) => set({ refreshToken }),
        }),
        {
            name: "session",
            storage: {
                getItem: (name) => {
                    const stored = cookieStorage.getItem(name);
                    return stored ? { state: { [name]: stored }, version: 0 } : null;
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

export default useSessionStore;
