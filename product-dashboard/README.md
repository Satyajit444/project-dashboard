# Project Dashboard (Next.js + TypeScript)

A simple internal **Project Dashboard** built using **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

The application lists projects, allows client-side filtering, and displays project details while handling common edge cases.

---

## Tech Stack

- Next.js (App Router)
- TypeScript
- React Hooks
- Tailwind CSS
- Client-side mock data

No backend or external state management library is used.

---

## Features

### Project List View
- Project name
- Client name
- Status (Active, On Hold, Completed)
- Start and end dates

### Client-side Filtering
- Filter by status
- Search by project name or client name
- Filters work correctly in combination

### Project Detail Page
- Dynamic routing using project ID
- Extra field added: **Project Owner**

### Edge Case Handling
- No projects available
- No results after filtering
- Long project names
- Missing optional fields (e.g., end date)

---

## Folder Structure

src/
├── app/
│   ├── page.tsx
│   ├── project/
│   │   └── [id]/
│   │       └── page.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── Filters.tsx
│   ├── ProjectList.tsx
│   ├── ProjectCard.tsx
│   └── EmptyState.tsx
├── data/
│   └── projects.ts
├── types/
│   └── project.ts
├── utils/
│   └── filterProjects.ts


---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/Satyajit444/project-dashboard.git
cd project-dashboard

### 1. Clone the Repository
```bash

npm install

### 3. Run the Development Server
```bash

npm run dev

The application will be available at: http://localhost:3000



## Assumptions Made

- The data source is static and provided via mock data
- Project IDs are unique and string-based
- Filtering is entirely client-side
- No authentication or role-based access is required
- UI focus is on usability and readability, not advanced styling

---

## Trade-offs

- No backend integration (intentionally excluded as per requirements)
- No global state management library (React hooks are sufficient for the current scope)
- No pagination due to the small dataset size
- Minimal UI styling to keep the focus on logic and structure

These trade-offs were made to keep the solution simple, readable, and easy to explain.

---

## AI Usage Disclosure

### Tools Used
- ChatGPT
- Perplexity Ai

### Used For
- Reviewing folder structure ideas
- Improving code readability and naming
- Identifying edge cases
- Adding simple UI using tailwind

### What Was Changed or Rejected
- Simplified some AI-suggested abstractions to avoid over-engineering
- Rewrote generated code to ensure full understanding
- Avoided unnecessary libraries or advanced patterns

### What I Don’t Fully Agree With
- It suggested optimizations were intentionally skipped to keep the codebase straightforward and aligned with the assignment scope
