import { projects } from "@/app/data/project";
import Link from "next/link";

interface PageProps {
  params: { id: string };
}

export default function ProjectDetailPage({ params }: PageProps) {
  const project = projects?.find((p) => p.id === params.id);

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
      <Link
        href="/"
        className="inline-flex items-center text-sm text-blue-600 hover:underline mb-4"
      >
        ← Back to Dashboard
      </Link>

      <div className="bg-white border rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold mb-4">{project.projectName}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-500">Client</p>
            <p className="font-medium">{project.clientName}</p>
          </div>

          <div>
            <p className="text-gray-500">Status</p>
            <span
              className={`inline-block px-2 py-1 rounded text-xs font-medium
                ${
                  project.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : project.status === "On Hold"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-gray-100 text-gray-700"
                }
              `}
             >
              {project.status}
            </span>
          </div>

          <div>
            <p className="text-gray-500">Start Date</p>
            <p className="font-medium">{project.startDate}</p>
          </div>

          <div>
            <p className="text-gray-500">End Date</p>
            <p className="font-medium">{project.endDate ?? "Ongoing"}</p>
          </div>

          <div className="sm:col-span-2">
            <p className="text-gray-500">Project Owner</p>
            <p className="font-medium">{project.projectOwner}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
