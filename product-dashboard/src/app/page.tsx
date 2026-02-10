"use client";

import { useEffect, useMemo, useState } from "react";
import { projects } from "./data/project";
import { filterProjects } from "./utils/filterProjects";
import { ProjectStatus } from "./types/project";
import Filters from "./components/Filters";
import EmptyState from "./components/EmptyState";
import ProjectList from "./components/ProjectList";
import { useDebounce } from "./hooks/useDebounce";

export default function DashboardPage() {
  const [status, setStatus] = useState<ProjectStatus | "">("");
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 500);

  
  const filteredProjects = useMemo(
    () => filterProjects(projects, { status, search: debouncedSearch }),
    [status, debouncedSearch],
  );
  
  if (projects.length === 0) {
    return <EmptyState message="No projects available." />;
  }

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Project Dashboard</h1>

      <Filters
        status={status}
        search={search}
        onStatusChange={setStatus}
        onSearchChange={setSearch}
      />

      <ProjectList projects={filteredProjects} />
    </main>
  );
}
