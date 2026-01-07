import config from "../config";
import { HTTPError, ValidationErrorResponse } from "../types/http";
import { Organization } from "../models/Organization";
import {
  Create,
  FindManyOptions,
  FindOneOptions,
  queryBuilder,
  Update,
} from "../rest";

type GetOrganizationParams = FindOneOptions<Organization>;

export async function getOrganization(
  id: string,
  params: GetOrganizationParams = {},
  headers: HeadersInit = {}
): Promise<Organization> {
  const queryString = params ? `?${queryBuilder(params)}` : "";
  const response = await fetch(
    `${config.apiUrl}/organizations/${id}${queryString}`,
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
    throw new Error(errorData.message || "Failed to fetch organization");
  }

  return response.json();
}

type GetOrganizationsParams = FindManyOptions<Organization>;

export async function getOrganizations(
  params?: GetOrganizationsParams | null,
  headers: HeadersInit = {}
): Promise<Organization[]> {
  const queryString = params ? `?${queryBuilder(params)}` : "";
  const response = await fetch(`${config.apiUrl}/organizations${queryString}`, {
    method: "GET",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!response.ok) {
    const errorData: HTTPError = await response.json();
    throw new Error(errorData.message || "Failed to fetch organizations");
  }

  const data = (await response.json()).data as Organization[];
  return data;
}

type CreateOrganizationError =
  | ValidationErrorResponse<Organization>
  | HTTPError;

export async function createOrganization(
  payload: Create<Organization>
): Promise<Organization> {
  const response = await fetch(`${config.apiUrl}/organizations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    credentials: "include",
  });

  if (!response.ok) {
    const errorData: CreateOrganizationError = await response.json();
    if (typeof errorData.message === "string") {
      throw new Error(errorData.message || "Organization creation failed");
    }

    if (Array.isArray(errorData.message)) {
      const errorMessages = errorData.message.map(
        (error) =>
          `${error.property}: ${Object.values(error.constraints).join(", ")}`
      );
      throw new Error(`Validation errors: ${errorMessages.join("; ")}`);
    }

    throw new Error("Organization creation failed");
  }

  return response.json();
}

export async function updateOrganization(
  id: string,
  payload: Update<Organization>
): Promise<Organization> {
  const response = await fetch(`${config.apiUrl}/organizations/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    credentials: "include",
  });

  if (!response.ok) {
    const errorData: HTTPError = await response.json();
    throw new Error(errorData.message || "Organization update failed");
  }

  return response.json();
}

export async function deleteOrganization(id: number): Promise<void> {
  const response = await fetch(`${config.apiUrl}/organizations/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!response.ok) {
    const errorData: HTTPError = await response.json();
    throw new Error(errorData.message || "Organization deletion failed");
  }
}

interface OrganizationStatusResponse {
  projects: number;
  planning: number;
  inProgress: number;
  completed: number;
}

export async function statusOrganization(
  id: string
): Promise<OrganizationStatusResponse> {
  const response = await fetch(`${config.apiUrl}/organizations/${id}/status`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!response.ok) {
    const errorData: HTTPError = await response.json();
    throw new Error(errorData.message || "Failed to fetch organization status");
  }

  return response.json();
}
