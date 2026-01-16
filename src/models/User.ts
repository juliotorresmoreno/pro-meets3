import { Language } from "../utils/language";

export type Role = "admin" | "user";
export type UserType = "candidate" | "recruiter";

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  userType: UserType;
  isEmailVerified: boolean;
  verificationToken: string | null;
  verificationTokenExpiresAt: string | null;
  passwordResetToken: string | null;
  passwordResetTokenExpiresAt: string | null;
  language: Language;
  role: Role;
  avatarUrl?: string;
  stripeCustomerId: string;
  defaultPaymentMethodId?: string | null;
  timezone: string;
  newsletter?: boolean;
  createdAt: string;
  updatedAt: string;
};
