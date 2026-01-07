import { Organization } from "./Organization";
import { Project } from "./Project";

export enum JobType {
  FULL_TIME = "full_time",
  PART_TIME = "part_time",
  CONTRACT = "contract",
  TEMPORARY = "temporary",
  INTERN = "intern",
}

export enum JobStatus {
  OPEN = "open",
  CLOSED = "closed",
  PAUSED = "paused",
}

export enum ContractType {
  PERMANENT = "permanent",
  TEMPORARY = "temporary",
  FREELANCE = "freelance",
  INTERN = "intern",
}

export enum EducationLevel {
  NONE = "NONE",
  HIGH_SCHOOL = "HIGH_SCHOOL",
  ASSOCIATE = "ASSOCIATE",
  BACHELOR = "BACHELOR",
  MASTER = "MASTER",
  DOCTORATE = "DOCTORATE",
}

export interface Job {
  id: string;
  title: string;
  description?: string;
  status?: JobStatus;
  type: JobType;
  contractType: ContractType;
  salaryMin?: number;
  salaryMax?: number;
  location?: string;
  postedAt?: string;
  isActive: boolean;
  recruiterFee?: number;
  experienceRequired?: string;
  educationLevel?: EducationLevel;
  skillsRequired?: string;
  benefits?: string;
  organizationId: string;
  organization?: Organization;
  projectId?: string;
  project?: Project;
}
