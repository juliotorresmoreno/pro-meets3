import config from "../config";
import { HTTPError, ValidationErrorResponse } from "../types/http";
import {
  Create,
  FindManyOptions,
  FindOneOptions,
  queryBuilder,
  Update,
} from "../rest";
import { Job } from "../models/Job";

type GetJobParams = FindOneOptions<Job>;

export async function getJob(
  id: string,
  params: GetJobParams = {},
  headers: HeadersInit = {}
): Promise<Job> {
  const queryString = params ? `?${queryBuilder(params)}` : "";
  const response = await fetch(`${config.apiUrl}/jobs/${id}${queryString}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    credentials: "include",
  });

  if (!response.ok) {
    const errorData: HTTPError = await response.json();
    throw new Error(errorData.message || "Failed to fetch job");
  }

  return response.json();
}

type GetJobsParams = FindManyOptions<Job>;

export async function getJobs(
  params?: GetJobsParams | null,
  headers: HeadersInit = {}
): Promise<Job[]> {
  const queryString = params ? `?${queryBuilder(params)}` : "";
  const response = await fetch(`${config.apiUrl}/jobs${queryString}`, {
    method: "GET",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!response.ok) {
    const errorData: HTTPError = await response.json();
    throw new Error(errorData.message || "Failed to fetch jobs");
  }

  const data = (await response.json()).data as Job[];
  return data;
}

type CreateJobError = ValidationErrorResponse<Job> | HTTPError;

export async function createJob(payload: Create<Job>): Promise<Job> {
  const response = await fetch(`${config.apiUrl}/jobs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    credentials: "include",
  });

  if (!response.ok) {
    const errorData: CreateJobError = await response.json();
    if (typeof errorData.message === "string") {
      throw new Error(errorData.message || "Job creation failed");
    }

    if (Array.isArray(errorData.message)) {
      const errorMessages = errorData.message.map(
        (error) =>
          `${error.property}: ${Object.values(error.constraints).join(", ")}`
      );
      throw new Error(`Validation errors: ${errorMessages.join("; ")}`);
    }

    throw new Error("Job creation failed");
  }

  return response.json();
}

export async function updateJob(
  id: string,
  payload: Update<Job>
): Promise<Job> {
  const response = await fetch(`${config.apiUrl}/jobs/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    credentials: "include",
  });

  if (!response.ok) {
    const errorData: HTTPError = await response.json();
    throw new Error(errorData.message || "Job update failed");
  }

  return response.json();
}

export async function deleteJob(id: string): Promise<void> {
  const response = await fetch(`${config.apiUrl}/jobs/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!response.ok) {
    const errorData: HTTPError = await response.json();
    throw new Error(errorData.message || "Job deletion failed");
  }
}
