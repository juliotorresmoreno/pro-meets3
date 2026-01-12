class CookieStorage {
    getItem(name: string): string | null {
        const regex = new RegExp("(^| )" + name + "=([^;]+)");
        const match = regex.exec(document.cookie);
        return match ? decodeURIComponent(match[2]) : null;
    }

    setItem(name: string, value: string): void {
        const secureFlag = location.protocol === "https:" ? "Secure;" : "";
        document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=31536000; SameSite=None; ${secureFlag}`;
    }

    removeItem(name: string): void {
        document.cookie = `${name}=; Max-Age=0; path=/`;
    }
}

export default CookieStorage;
