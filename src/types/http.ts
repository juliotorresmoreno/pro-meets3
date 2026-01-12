export interface HTTPError {
  message: string;
  statusCode: number;
  error?: string;
}

export interface ValidationErrorDetail<T = any> {
  property: string;
  value: T;
  target: Record<keyof T, any>;
  children: ValidationErrorDetail[];
  constraints: Record<string, string>;
}

export interface ValidationErrorResponse<T = any> {
  statusCode: number;
  message: ValidationErrorDetail<T>[];
  error: string;
}
