"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { useAddProject } from "@/src/hooks/project.hook";

interface IProject {
  name: string;
  live: string;
  client: string;
  server: string;
  technology: string;
  feature: string;
  mainImage: string;
  images: string;
  description: string;
  isDeleted: boolean;
}

const ProjectForm: React.FC = () => {
  const { handleAddProject, isPending, isSuccess } = useAddProject();
  const router = useRouter();

  useEffect(() => {
    if (isSuccess) {
      router.push("/admin/manage-project");
    }
  }, [isSuccess, router]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProject>();

  const onSubmit: SubmitHandler<IProject> = (data: IProject) => {
    const formattedData = {
      ...data,
      technology: data.technology.split(",").map((tech) => tech.trim()),
      feature: data.feature.split(",").map((feat) => feat.trim()),
      images: data.images.split(",").map((img) => img.trim()),
    };

    handleAddProject(formattedData);
  };

  return (
    <form
      className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className="text-2xl font-semibold mb-4">Project Information</h3>

      <div className="mb-4">
        <label className="block font-medium" htmlFor="name">
          Project Name
        </label>
        <input
          id="name"
          type="text"
          {...register("name", { required: "Project name is required" })}
          className="w-full p-2 border rounded"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block font-medium" htmlFor="liveurl">
          Live URL
        </label>
        <input
          id="liveurl"
          type="url"
          {...register("live")}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium" htmlFor="clientRepo">
          Client Repository URL
        </label>
        <input
          id="clientRepo"
          type="url"
          {...register("client")}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium" htmlFor=" serverRepo">
          Server Repository URL
        </label>
        <input
          id="serverRepo"
          type="url"
          {...register("server")}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium" htmlFor=" technologies">
          Technologies (comma-separated)
        </label>
        <input
          id="technologies"
          type="text"
          {...register("technology")}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium" htmlFor="features">
          Features (comma-separated)
        </label>
        <input
          id="features"
          type="text"
          {...register("feature")}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium" htmlFor="mainImage">
          Main Image URL
        </label>
        <input
          id="mainImage"
          type="url"
          {...register("mainImage")}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium" htmlFor="otherImage">
          Others Images URL (comma-separated URLs)
        </label>
        <input
          id="otherImage"
          type="text"
          {...register("images")}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium" htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          {...register("description")}
          className="w-full p-2 border rounded"
        />
      </div>

      <button
        className="btn bg-gradient-to-r from-primary to-secondary text-white w-full hover:opacity-90 transition-all py-4 rounded-lg"
        disabled={isPending}
        type="submit"
      >
        {isPending ? "Loading..." : "Add Project"}
      </button>
    </form>
  );
};

export default ProjectForm;
