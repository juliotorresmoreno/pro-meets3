import { Organization } from "./Organization";
import { User } from "./User";

export enum MemberRole {
  OWNER = "owner",
  ADMIN = "admin",
  MEMBER = "member",
  GUEST = "guest",
}

export enum MemberStatus {
  PENDING = "pending",
  ACTIVE = "active",
  REJECTED = "rejected",
}

export interface OrganizationMember {
  id: string;
  email: string;
  role: MemberRole;
  user: User | null;
  userId: string | null;
  status: MemberStatus;
  organizationId: string;
  organization?: Organization;
  createdAt: string;
  updatedAt: string;
}
