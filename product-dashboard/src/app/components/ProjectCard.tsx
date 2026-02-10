import Link from "next/link";
import { Project } from "../types/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/project/${project.id}`}
      className="block border rounded p-4 hover:bg-gray-50"
    >
      <h3
        className="font-semibold truncate"
        title={project.projectName}
      >
        {project.projectName}
      </h3>

      <p className="text-sm text-gray-600">
        Client: {project.clientName}
      </p>

      <p className="text-sm">
        Status: <span className="font-medium">{project.status}</span>
      </p>

      <p className="text-sm text-gray-500">
        {project.startDate} – {project.endDate ?? "Ongoing"}
      </p>
    </Link>
  );
}
