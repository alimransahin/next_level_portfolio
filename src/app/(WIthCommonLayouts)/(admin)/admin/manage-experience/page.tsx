"use client";

import { useGetExperience } from "@/src/hooks/experience.hook";
import { TExperience } from "@/src/types";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ExperiencePage = () => {
  const { handletExperience } = useGetExperience();
  const [experiences, setExperiences] = useState<TExperience[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchExperience = async () => {
      const result = await handletExperience();
      if (result) {
        setExperiences(result.data);
      }
      setIsLoading(false);
    };
    fetchExperience();
  }, []);

  const handleEdit = (id: string) => {
    router.push(`/edit-experience/${id}`);
  };

  const handleDelete = (id: string) => {
    console.log("Deleting experience with id:", id);
  };

  const handleCreate = () => {
    router.push("/create-experience");
  };

  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">
        Experience Management
      </h2>

      <div className="flex justify-end mb-4">
        <button
          onClick={handleCreate}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Add Experience
        </button>
      </div>

      {isLoading ? (
        <p className="text-center">Loading experiences...</p>
      ) : experiences.length === 0 ? (
        <p className="text-center text-gray-500">No data found</p>
      ) : (
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 text-left font-semibold text-gray-600">
                Role
              </th>
              <th className="py-2 px-4 text-left font-semibold text-gray-600">
                Company
              </th>
              <th className="py-2 px-4 text-left font-semibold text-gray-600">
                Duration
              </th>
              <th className="py-2 px-4 text-center font-semibold text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {experiences.map((experience) => (
              <tr key={experience._id} className="border-b border-gray-200">
                <td className="py-3 px-4">{experience.role}</td>
                <td className="py-3 px-4">{experience.title}</td>
                <td className="py-3 px-4">
                  {experience.startTime} - {experience.endTime || "Present"}
                </td>
                <td className="py-3 px-4 text-center">
                  <button
                    onClick={() => handleEdit(experience._id)}
                    className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(experience._id)}
                    className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
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

export default ExperiencePage;
