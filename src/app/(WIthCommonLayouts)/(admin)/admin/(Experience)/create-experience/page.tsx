"use client";
import { useAddExperience } from "@/src/hooks/experience.hook";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export interface IExperience {
  title: string;
  role: string;
  startTime: Date;
  endTime: Date;
  description: string;
  isDeleted: boolean;
}

const ExperienceForm: React.FC = () => {
  const { handleAddExperience, isPending, isSuccess } = useAddExperience();
  const router = useRouter();

  useEffect(() => {
    if (isSuccess) {
      router.push("/admin/manage-experience");
    }
  }, [isSuccess, router]);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IExperience>();

  const onSubmit: SubmitHandler<IExperience> = (data) => {
    handleAddExperience(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"
    >
      <h3 className="text-2xl font-semibold mb-4">Experience Information</h3>

      <div className="mb-4">
        <label className="block font-medium">Company</label>
        <input
          type="text"
          {...register("title", { required: "Company is required" })}
          className="w-full p-2 border rounded"
        />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block font-medium">Role</label>
        <input
          type="text"
          {...register("role", { required: "Role is required" })}
          className="w-full p-2 border rounded"
        />
        {errors.role && <p className="text-red-500">{errors.role.message}</p>}
      </div>

      <div className="mb-4 w-full">
        <label className="block font-medium">Start Time</label>
        <Controller
          control={control}
          name="startTime"
          rules={{ required: "Start time is required" }}
          render={({ field }) => (
            <DatePicker
              selected={field.value}
              onChange={(date) => field.onChange(date)}
              className="w-full p-2 border rounded"
              placeholderText="Select end date"
              wrapperClassName="w-full" // Ensure full width
            />
          )}
        />
        {errors.startTime && (
          <p className="text-red-500">{errors.startTime.message}</p>
        )}
      </div>

      {/* End Time */}
      <div className="mb-4 w-full">
        <label className="block font-medium">End Time</label>
        <Controller
          control={control}
          name="endTime"
          rules={{ required: "End time is required" }}
          render={({ field }) => (
            <DatePicker
              selected={field.value}
              onChange={(date) => field.onChange(date)}
              className="w-full p-2 border rounded"
              placeholderText="Select end date"
              wrapperClassName="w-full" // Ensure full width
            />
          )}
        />
        {errors.endTime && (
          <p className="text-red-500">{errors.endTime.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block font-medium">Description</label>
        <textarea
          {...register("description", { required: "Description is required" })}
          className="w-full p-2 border rounded"
        ></textarea>
        {errors.description && (
          <p className="text-red-500">{errors.description.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="btn bg-gradient-to-r from-primary to-secondary text-white w-full hover:opacity-90 transition-all py-4 rounded-lg"
      >
        {isPending ? "Loading..." : "Add Experience"}
      </button>
    </form>
  );
};

export default ExperienceForm;
