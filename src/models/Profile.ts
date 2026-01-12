
export enum ProfileStatus {
    COMPLETE = "complete",
    INCOMPLETE = "incomplete",
    PENDING = "pending",
}

export interface Profile {
    id: string;

    status: ProfileStatus;

    createdAt: string;
    updatedAt: string;
}
