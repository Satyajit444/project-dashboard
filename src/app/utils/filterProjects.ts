import { Project, ProjectStatus } from "../types/project";

interface FilterParams {
  status: ProjectStatus | "";
  search: string;
}

export function filterProjects(
  projects: Project[],
  { status, search }: FilterParams
): Project[] {
    
  const normalizedSearch = search.toLowerCase().trim();

  return projects.filter((project) => {
    const statusMatch =
      !status || project.status === status;

    const searchMatch =
      project.projectName.toLowerCase().includes(normalizedSearch) ||
      project.clientName.toLowerCase().includes(normalizedSearch);

    return statusMatch && searchMatch;
  });
}
