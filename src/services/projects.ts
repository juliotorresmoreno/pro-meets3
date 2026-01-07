import config from "../config";
import { HTTPError, ValidationErrorResponse } from "../types/http";
import { Project } from "../models/Project";
import {
  Create,
  FindManyOptions,
  FindOneOptions,
  queryBuilder,
  Update,
} from "../rest";

type GetProjectParams = FindOneOptions<Project>;

export async function getProject(
  id: string,
  params: GetProjectParams = {},
  headers: HeadersInit = {}
): Promise<Project> {
  const queryString = params ? `?${queryBuilder(params)}` : "";
  const response = await fetch(
    `${config.apiUrl}/projects/${id}${queryString}`,
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
    throw new Error(errorData.message || "Failed to fetch Project");
  }

  return response.json();
}

type GetProjectsParams = FindManyOptions<Project>;

export async function getProjects(
  params?: GetProjectsParams | null,
  headers: HeadersInit = {}
): Promise<Project[]> {
  const queryString = params ? `?${queryBuilder(params)}` : "";
  const response = await fetch(`${config.apiUrl}/Projects${queryString}`, {
    method: "GET",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!response.ok) {
    const errorData: HTTPError = await response.json();
    throw new Error(errorData.message || "Failed to fetch Projects");
  }

  const data = (await response.json()).data as Project[];
  return data;
}

type CreateProjectError = ValidationErrorResponse<Project> | HTTPError;

export async function createProject(
  payload: Omit<
    Create<Project>,
    "progress" | "openPositions" | "totalPositions"
  >
): Promise<Project> {
  const response = await fetch(`${config.apiUrl}/projects`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    credentials: "include",
  });

  if (!response.ok) {
    const errorData: CreateProjectError = await response.json();
    if (typeof errorData.message === "string") {
      throw new Error(errorData.message || "Project creation failed");
    }

    if (Array.isArray(errorData.message)) {
      const errorMessages = errorData.message.map(
        (error) =>
          `${error.property}: ${Object.values(error.constraints).join(", ")}`
      );
      throw new Error(`Validation errors: ${errorMessages.join("; ")}`);
    }

    throw new Error("Project creation failed");
  }

  return response.json();
}

export async function updateProject(
  id: string,
  payload: Omit<Update<Project>, "progress" | "openPositions" | "totalPositions">
): Promise<Project> {
  const response = await fetch(`${config.apiUrl}/projects/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    credentials: "include",
  });

  if (!response.ok) {
    const errorData: HTTPError = await response.json();
    throw new Error(errorData.message || "Project update failed");
  }

  return response.json();
}

export async function deleteProject(id: number): Promise<void> {
  const response = await fetch(`${config.apiUrl}/projects/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!response.ok) {
    const errorData: HTTPError = await response.json();
    throw new Error(errorData.message || "Project deletion failed");
  }
}
