import { Profile } from "@/models/Profile";
import { FindOneOptions, queryBuilder } from "@/rest";
import { HTTPError } from "@/types";

const apiUrl: string = (process.env.API_URL || process.env.NEXT_PUBLIC_API_URL) || "/api";

type GetProfileParams = FindOneOptions<Profile>;

export async function getProfile(
    id: string,
    params: GetProfileParams = {},
    headers: HeadersInit = {}
): Promise<Profile> {
    const queryString = params ? `?${queryBuilder(params)}` : "";
    const response = await fetch(
        `${apiUrl}/profiles/${id}${queryString}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
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