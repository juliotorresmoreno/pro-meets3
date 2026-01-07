import config from "../config";
import { HTTPError } from "../types/http";
import {
  Create,
  FindManyOptions,
  FindOneOptions,
  queryBuilder,
  Update,
} from "../rest";
import { OrganizationMember } from "../models/OrganizationMember";

type GetOrganizationParams = FindOneOptions<
  OrganizationMember & { invitationToken?: string }
>;

export async function getOrganizationMembers(
  id: string,
  params: GetOrganizationParams = {},
  headers: HeadersInit = {}
): Promise<OrganizationMember[]> {
  const queryString = params ? `?${queryBuilder(params)}` : "";
  const response = await fetch(
    `${config.apiUrl}/organization-members/${id}${queryString}`,
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
    throw new Error(
      errorData.message || "Failed to fetch organization members"
    );
  }

  return response.json();
}

type GetOrganizationMembersParams = FindManyOptions<
  OrganizationMember & { invitationToken?: string }
>;

export async function getOrganizationsMembers(
  params?: GetOrganizationMembersParams | null,
  headers: HeadersInit = {}
): Promise<OrganizationMember[]> {
  const queryString = params ? `?${queryBuilder(params)}` : "";
  const response = await fetch(
    `${config.apiUrl}/organization-members${queryString}`,
    {
      method: "GET",
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  );

  if (!response.ok) {
    const errorData: HTTPError = await response.json();
    throw new Error(errorData.message || "Failed to fetch organizations");
  }

  const data = (await response.json()).data as OrganizationMember[];
  return data;
}

export async function createOrganizationMember(
  data: Omit<Create<OrganizationMember>, "status" | "userId">,
  headers: HeadersInit = {}
): Promise<OrganizationMember> {
  const response = await fetch(`${config.apiUrl}/organization-members`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(data),
    credentials: "include",
  });

  if (!response.ok) {
    const errorData: HTTPError = await response.json();
    throw new Error(
      errorData.message || "Failed to create organization member"
    );
  }

  return response.json();
}

export async function updateOrganizationMember(
  id: string,
  data: Update<OrganizationMember>,
  headers: HeadersInit = {}
): Promise<OrganizationMember> {
  const response = await fetch(`${config.apiUrl}/organization-members/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(data),
    credentials: "include",
  });

  if (!response.ok) {
    const errorData: HTTPError = await response.json();
    throw new Error(
      errorData.message || "Failed to update organization member"
    );
  }

  return response.json();
}

export async function deleteOrganizationMember(
  id: string,
  headers: HeadersInit = {}
): Promise<void> {
  const response = await fetch(`${config.apiUrl}/organization-members/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    credentials: "include",
  });

  if (!response.ok) {
    const errorData: HTTPError = await response.json();
    throw new Error(
      errorData.message || "Failed to delete organization member"
    );
  }
}
