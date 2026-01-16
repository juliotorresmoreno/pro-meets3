import { Profile } from "@/models/Profile";
import { FindOneOptions, queryBuilder } from "@/rest";
import { HTTPError } from "@/types";
import { getSession } from "@/utils/session";

const apiUrl: string = (process.env.API_URL || process.env.NEXT_PUBLIC_API_URL) || "/api";

type GetProfileParams = FindOneOptions<Profile>;

export async function getProfile(
    id: string,
    params: GetProfileParams = {},
    headers: HeadersInit = {}
): Promise<Profile> {
    const token = await getSession();
    const queryString = params ? `?${queryBuilder(params)}` : "";

    const response = await fetch(
        `${apiUrl}/profile/${id}${queryString}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token ? `Bearer ${token}` : "",
                ...headers,
            },
            credentials: "include",
        }
    );

    if (!response.ok) {
        const errorData: HTTPError = await response.json();
        throw new Error(errorData.message || "Failed to fetch Profile");
    }

    return response.json();
}