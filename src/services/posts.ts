import config from "../config";
import { Post } from "../models";
import {
  Create,
  FindManyOptions,
  FindOneOptions,
  queryBuilder,
  Update,
} from "../rest";
import { HTTPError, ValidationErrorResponse } from "../types";

type GetPostParams = FindOneOptions<Post>;

export async function getPost(
  id: string,
  params: GetPostParams = {},
  headers: HeadersInit = {}
): Promise<Post> {
  const queryString = params ? `?${queryBuilder(params)}` : "";
  const response = await fetch(`${config.apiUrl}/posts/${id}${queryString}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    credentials: "include",
  });

  if (!response.ok) {
    const errorData: HTTPError = await response.json();
    throw new Error(errorData.message || "Failed to fetch organization");
  }

  return response.json();
}

type GetPostsParams = FindManyOptions<Post>;

export async function getPosts(
  params?: GetPostsParams | null,
  headers: HeadersInit = {}
): Promise<Post[]> {
  const queryString = params ? `?${queryBuilder(params)}` : "";
  const response = await fetch(`${config.apiUrl}/posts${queryString}`, {
    method: "GET",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!response.ok) {
    const errorData: HTTPError = await response.json();
    throw new Error(errorData.message || "Failed to fetch posts");
  }

  const data = (await response.json()).data as Post[];
  return data;
}

type CreatePostError = ValidationErrorResponse<Post> | HTTPError;

export async function createPost(
  payload: Omit<
    Create<Post>,
    "likes" | "comments" | "shares" | "timestamp" | "user" | "liked"
  >
): Promise<Post> {
  const response = await fetch(`${config.apiUrl}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    credentials: "include",
  });

  if (!response.ok) {
    const errorData: CreatePostError = await response.json();
    if (typeof errorData.message === "string") {
      throw new Error(errorData.message || "Post creation failed");
    }

    if (Array.isArray(errorData.message)) {
      const errorMessages = errorData.message.map(
        (error) =>
          `${error.property}: ${Object.values(error.constraints).join(", ")}`
      );
      throw new Error(`Validation errors: ${errorMessages.join("; ")}`);
    }

    throw new Error("Post creation failed");
  }

  return response.json();
}

export async function updatePost(
  id: string,
  payload: Omit<
    Update<Post>,
    "likes" | "comments" | "shares" | "timestamp" | "user" | "liked"
  >
): Promise<Post> {
  const response = await fetch(`${config.apiUrl}/posts/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    credentials: "include",
  });

  if (!response.ok) {
    const errorData: HTTPError = await response.json();
    throw new Error(errorData.message || "Post update failed");
  }

  return response.json();
}

export async function deletePost(id: number): Promise<void> {
  const response = await fetch(`${config.apiUrl}/posts/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!response.ok) {
    const errorData: HTTPError = await response.json();
    throw new Error(errorData.message || "Post deletion failed");
  }
}
