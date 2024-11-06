"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useGetProjects } from "@/src/hooks/project.hook";
import { TProject } from "@/src/types";

const ProjectsPage = () => {
  const { handletProject } = useGetProjects();
  const [projects, setProjects] = useState<TProject[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchProjects = async () => {
      const result = await handletProject();

      if (result) {
        setProjects(result.data);
      }
      setIsLoading(false);
    };

    fetchProjects();
  }, []);

  const handleEdit = (id: string) => {
    router.push(`/edit-project/${id}`);
  };

  const handleDelete = (id: string) => {};

  const handleCreate = () => {
    router.push("/admin/create-project");
  };

  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">
        Project Management
      </h2>

      <div className="flex justify-end mb-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          onClick={handleCreate}
        >
          Add Project
        </button>
      </div>

      {isLoading ? (
        <p className="text-center">Loading projects...</p>
      ) : projects.length === 0 ? (
        <p className="text-center text-gray-500">No data found</p>
      ) : (
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 text-left font-semibold text-gray-600">
                Name
              </th>

              <th className="py-2 px-4 text-center font-semibold text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project._id} className="border-b border-gray-200">
                <td className="py-3 px-4">{project.name}</td>
                <td className="py-3 px-4 text-center">
                  <button
                    className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 mr-2"
                    onClick={() => handleEdit(project._id)}
                  >
                    Edit
                  </button>
                  <button
                    className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                    onClick={() => handleDelete(project._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProjectsPage;
