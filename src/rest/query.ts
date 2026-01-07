import { Condition } from "./condition";

export type WhereOptions<T> = {
  [K in keyof T]?: T[K] extends Array<infer U>
    ? WhereOptions<U> | null
    : Condition<T[K]> | WhereOptions<T[K]> | null;
};

export type FindOneOptions<T> = {
  select?: Partial<Record<keyof T, boolean>>;
  where?: WhereOptions<T>;
  relations?: string[];
};

export type FindManyOptions<T> = FindOneOptions<T> & {
  orderBy?: Array<{ [Key in keyof T]?: "asc" | "desc" }>;
  take?: number;
  skip?: number;
};
