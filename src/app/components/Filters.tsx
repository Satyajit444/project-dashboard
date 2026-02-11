"use client";

import { ProjectStatus } from "../types/project";

interface FiltersProps {
  status: ProjectStatus | "";
  search: string;
  onStatusChange: (value: ProjectStatus | "") => void;
  onSearchChange: (value: string) => void;
}

export default function Filters({
  status,
  search,
  onStatusChange,
  onSearchChange
}: FiltersProps) {
  return (
    <div className="flex gap-4 mb-6">
      <select
        value={status}
        onChange={(e) =>
          onStatusChange(e.target.value as ProjectStatus | "")
        }
        className="border rounded px-3 py-2"
      >
        <option value="">All Status</option>
        <option value="Active">Active</option>
        <option value="On Hold">On Hold</option>
        <option value="Completed">Completed</option>
      </select>

      <input
        type="text"
        placeholder="Search by project or client"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="border rounded px-3 py-2 w-full"
      />
    </div>
  );
}
