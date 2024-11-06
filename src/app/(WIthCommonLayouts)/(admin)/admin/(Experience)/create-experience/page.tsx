"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import DatePicker from "react-datepicker";

import { useAddExperience } from "@/src/hooks/experience.hook";
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
      className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className="text-2xl font-semibold mb-4">Experience Information</h3>

      <div className="mb-4">
        <label className="block font-medium" htmlFor="title">
          Company
        </label>
        <input
          id="title"
          type="text"
          {...register("title", { required: "Company is required" })}
          className="w-full p-2 border rounded"
        />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block font-medium" htmlFor="role">
          Role
        </label>
        <input
          id="role"
          type="text"
          {...register("role", { required: "Role is required" })}
          className="w-full p-2 border rounded"
        />
        {errors.role && <p className="text-red-500">{errors.role.message}</p>}
      </div>

      <div className="mb-4 w-full">
        <label className="block font-medium" htmlFor="startTime">
          Start Time
        </label>
        <Controller
          control={control}
          name="startTime"
          render={({ field }) => (
            <DatePicker
              className="w-full p-2 border rounded"
              placeholderText="Select start date"
              selected={field.value}
              wrapperClassName="w-full"
              onChange={(date) => field.onChange(date)}
            />
          )}
          rules={{ required: "Start time is required" }}
        />
        {errors.startTime && (
          <p className="text-red-500">{errors.startTime.message}</p>
        )}
      </div>

      <div className="mb-4 w-full">
        <label className="block font-medium" htmlFor="endTime">
          End Time
        </label>
        <Controller
          control={control}
          name="endTime"
          render={({ field }) => (
            <DatePicker
              className="w-full p-2 border rounded"
              placeholderText="Select end date"
              selected={field.value}
              wrapperClassName="w-full"
              onChange={(date) => field.onChange(date)}
            />
          )}
          rules={{ required: "End time is required" }}
        />
        {errors.endTime && (
          <p className="text-red-500">{errors.endTime.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block font-medium" htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          {...register("description", { required: "Description is required" })}
          className="w-full p-2 border rounded"
        />
        {errors.description && (
          <p className="text-red-500">{errors.description.message}</p>
        )}
      </div>

      <button
        className="btn bg-gradient-to-r from-primary to-secondary text-white w-full hover:opacity-90 transition-all py-4 rounded-lg"
        disabled={isPending}
        type="submit"
      >
        {isPending ? "Loading..." : "Add Experience"}
      </button>
    </form>
  );
};

export default ExperienceForm;
