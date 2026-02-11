export type ProjectStatus = "Active" | "On Hold" | "Completed";

export interface Project {
  id: string;
  projectName: string;
  clientName: string;
  status: ProjectStatus;
  startDate: string;
  endDate?: string | null;
  projectOwner: string; // extra field
}
