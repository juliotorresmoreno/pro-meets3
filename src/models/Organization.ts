import { OrganizationMember } from "./OrganizationMember";
import { User } from "./User";

export enum OrganizationPlan {
  FREE = "free",
  PRO = "pro",
  ENTERPRISE = "enterprise",
}

export enum OrganizationStatus {
  ACTIVE = "active",
  SUSPENDED = "suspended",
  DELETED = "deleted",
}

export interface Organization {
  id: string;
  name: string;
  description?: string | null;
  website?: string | null;
  location?: string | null;
  phone?: string | null;
  logoUrl?: string | null;
  members: OrganizationMember[];
  current: boolean;
  plan: OrganizationPlan;
  status: OrganizationStatus;
  ownerId: string;
  owner: User;
  billingEmail?: string | null;
  createdAt: string;
  updatedAt: string;
}
