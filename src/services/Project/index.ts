import { IProject } from "@/src/hooks/project.hook";
import axiosInstance from "@/src/lib/AxiosInstance";

export const getAllProject = async () => {
  try {
    const { data } = await axiosInstance.get(`/project`);
    return data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Failed to retrieve Project"
    );
  }
};

export const addProject = async (projectData: IProject) => {
  try {
    const { data } = await axiosInstance.post("/project/", projectData);

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
