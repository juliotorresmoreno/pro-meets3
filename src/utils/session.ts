export async function getSession(): Promise<string | null> {
    const { cookies } = await import("next/headers");
    const cookieStore = await cookies();

    return cookieStore.get('accessToken')?.value ?? null;
}
