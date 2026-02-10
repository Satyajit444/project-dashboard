import { projects } from "@/app/data/project";
import Link from "next/link";

interface PageProps {
  params: { id: string };
}

export default function ProjectDetailPage({ params }: PageProps) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return (
      <main className="p-6">
        <p className="mb-4">Project not found.</p>
        <Link href="/" className="text-blue-600 underline">
          Back to dashboard
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-2xl mx-auto p-6">
      <Link href="/" className="text-blue-600 underline">
        ← Back
      </Link>

      <h2 className="text-2xl font-bold mt-4 mb-4">
        {project.projectName}
      </h2>

      <div className="space-y-2">
        <p><strong>Client:</strong> {project.clientName}</p>
        <p><strong>Status:</strong> {project.status}</p>
        <p><strong>Start Date:</strong> {project.startDate}</p>
        <p><strong>End Date:</strong> {project.endDate ?? "Ongoing"}</p>
        <p><strong>Project Owner:</strong> {project.projectOwner}</p>
      </div>
    </main>
  );
}
