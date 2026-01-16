class CookieStorage {
    getItem(name: string): string | null {
        const regex = new RegExp("(^| )" + name + "=([^;]+)");
        const match = regex.exec(document.cookie);
        return match ? decodeURIComponent(match[2]) : null;
    }

    setItem(name: string, value: string): void {
        const isHttps = location.protocol === "https:";
        const sameSite = isHttps ? "None" : "Lax";
        const secure = isHttps ? "Secure;" : "";

        document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=31536000; SameSite=${sameSite}; ${secure}`;
    }

    removeItem(name: string): void {
        document.cookie = `${name}=; Max-Age=0; path=/`;
    }
}

export default CookieStorage;
