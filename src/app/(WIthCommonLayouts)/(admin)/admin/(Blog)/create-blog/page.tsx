"use client";
import { useAddProject } from "@/src/hooks/project.hook";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

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
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"
    >
      <h3 className="text-2xl font-semibold mb-4">Project Information</h3>

      <div className="mb-4">
        <label className="block font-medium">Project Name</label>
        <input
          type="text"
          {...register("name", { required: "Project name is required" })}
          className="w-full p-2 border rounded"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block font-medium">Live URL</label>
        <input
          type="url"
          {...register("live")}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium">Client Repository URL</label>
        <input
          type="url"
          {...register("client")}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium">Server Repository URL</label>
        <input
          type="url"
          {...register("server")}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium">
          Technologies (comma-separated)
        </label>
        <input
          type="text"
          {...register("technology")}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium">Features (comma-separated)</label>
        <input
          type="text"
          {...register("feature")}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium">Main Image URL</label>
        <input
          type="url"
          {...register("mainImage")}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium">
          Others Images URL (comma-separated URLs)
        </label>
        <input
          type="text"
          {...register("images")}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium">Description</label>
        <textarea
          {...register("description")}
          className="w-full p-2 border rounded"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="btn bg-gradient-to-r from-primary to-secondary text-white w-full hover:opacity-90 transition-all py-4 rounded-lg"
      >
        {isPending ? "Logging in..." : "Login"}
      </button>
    </form>
  );
};

export default ProjectForm;
