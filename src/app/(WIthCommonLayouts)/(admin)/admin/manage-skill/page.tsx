"use client";

import { useGetSkill } from "@/src/hooks/skill.hook";
import { TSkill } from "@/src/types";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const SkillsPage = () => {
  const { handletSkill } = useGetSkill();
  const [data, setData] = useState<TSkill[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchSkills = async () => {
      const result = await handletSkill();
      if (result) {
        setData(result.data);
      }
      setIsLoading(false);
    };
    fetchSkills();
  }, []);

  const handleEdit = (id: string) => {
    router.push(`/edit-skill/${id}`);
  };

  const handleDelete = (id: string) => {
    console.log("Deleting skill with id:", id);
  };

  const handleCreate = () => {
    router.push("/create-skill");
  };

  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Skills Management</h2>

      <div className="flex justify-end mb-4">
        <button
          onClick={handleCreate}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Add Skill
        </button>
      </div>

      {isLoading ? (
        <p className="text-center">Loading skills...</p>
      ) : data.length === 0 ? (
        <p className="text-center text-gray-500">No data found</p>
      ) : (
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 text-left font-semibold text-gray-600">
                Skill Name
              </th>
              <th className="py-2 px-4 text-left font-semibold text-gray-600">
                Category
              </th>
              <th className="py-2 px-4 text-center font-semibold text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((skill) => (
              <tr key={skill._id} className="border-b border-gray-200">
                <td className="py-3 px-4">{skill.name}</td>
                <td className="py-3 px-4">{skill.category}</td>
                <td className="py-3 px-4 text-center">
                  <button
                    onClick={() => handleEdit(skill._id)}
                    className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(skill._id)}
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

export default SkillsPage;
