import { Project } from "../types/project";
import ProjectCard from "./ProjectCard";
import EmptyState from "./EmptyState";

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  if (projects.length === 0) {
    return <EmptyState message="No projects found." />;
  }

  return (
    <div className="mt-6 max-h-[60vh] overflow-y-auto pr-2">
      <div className="flex flex-col gap-4">
        {(projects || []).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
