"use client";
import { useAddSkill } from "@/src/hooks/skill.hook";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

export interface ISkill {
  name: string;
  image: string;
  category: string;
}

const ProjectForm: React.FC = () => {
  const { handleAddSkill, isPending, isSuccess } = useAddSkill();
  const router = useRouter();
  useEffect(() => {
    if (isSuccess) {
      router.push("/admin/manage-skill");
    }
  }, [isSuccess, router]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISkill>();

  const onSubmit: SubmitHandler<ISkill> = (data: ISkill) => {
    handleAddSkill(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"
    >
      <h3 className="text-2xl font-semibold mb-4">Skill Information</h3>

      <div className="mb-4">
        <label className="block font-medium">Skill Name</label>
        <input
          type="text"
          {...register("name", { required: "Skill name is required" })}
          className="w-full p-2 border rounded"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block font-medium">Image URL</label>
        <input
          type="url"
          {...register("image")}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium">Category</label>
        <select
          {...register("category", { required: "Category is required" })}
          defaultValue="" // Set the default value as empty
          className="w-full p-2 border rounded"
        >
          <option value="" disabled>
            Select a category
          </option>
          <option value="Frontend Development">Frontend Development</option>
          <option value="Backend Development">Backend Development</option>
          <option value="UI/UX Design">UI/UX Design</option>
          <option value="Tools & Platforms">Tools & Platforms</option>
        </select>
        {errors.category && (
          <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="btn bg-gradient-to-r from-primary to-secondary text-white w-full hover:opacity-90 transition-all py-4 rounded-lg"
      >
        {isPending ? "Skill Adding..." : "Skill Add"}
      </button>
    </form>
  );
};

export default ProjectForm;
