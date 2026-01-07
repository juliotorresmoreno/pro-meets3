export type Op =
  | "eq"
  | "not"
  | "gt"
  | "gte"
  | "lt"
  | "lte"
  | "like"
  | "ilike"
  | "notIn";

export type BetweenCondition<T> = {
  value: [T, T];
  op?: "between";
};

export function Between<T>(value: [T, T]): BetweenCondition<T> {
  return { value, op: "between" };
}

export type InCondition<T> = {
  value: Array<T>;
  op?: "in";
};

export function In<T>(value: Array<T>): InCondition<T> {
  return { value, op: "in" };
}

export type EqualCondition<T> = {
  value: T;
  op?: "eq";
};

export function Equal<T>(value: T): EqualCondition<T> {
  return { value, op: "eq" };
}

export type NotEqualCondition<T> = {
  value: T;
  op?: "not";
};

export function NotEqual<T>(value: T): NotEqualCondition<T> {
  return { value, op: "not" };
}

export type GreaterThanCondition<T> = {
  value: T;
  op?: "gt";
};

export function GreaterThan<T>(value: T): GreaterThanCondition<T> {
  return { value, op: "gt" };
}

export type GreaterThanOrEqualCondition<T> = {
  value: T;
  op?: "gte";
};

export function GreaterThanOrEqual<T>(
  value: T
): GreaterThanOrEqualCondition<T> {
  return { value, op: "gte" };
}

export type LessThanCondition<T> = {
  value: T;
  op?: "lt";
};

export function LessThan<T>(value: T): LessThanCondition<T> {
  return { value, op: "lt" };
}

export type LessThanOrEqualCondition<T> = {
  value: T;
  op?: "lte";
};

export function LessThanOrEqual<T>(value: T): LessThanOrEqualCondition<T> {
  return { value, op: "lte" };
}

export type LikeCondition<T> = {
  value: T;
  op?: "like";
};

export function Like<T>(value: T): LikeCondition<T> {
  return { value, op: "like" };
}

export type ILikeCondition<T> = {
  value: T;
  op?: "ilike";
};

export function ILike<T>(value: T): ILikeCondition<T> {
  return { value, op: "ilike" };
}

export type NotInCondition<T> = {
  value: Array<T>;
  op?: "notIn";
};

export type Condition<T> =
  | EqualCondition<T>
  | NotEqualCondition<T>
  | GreaterThanCondition<T>
  | GreaterThanOrEqualCondition<T>
  | LessThanCondition<T>
  | LessThanOrEqualCondition<T>
  | LikeCondition<T>
  | ILikeCondition<T>
  | NotInCondition<T>
  | BetweenCondition<T>
  | InCondition<T>;
