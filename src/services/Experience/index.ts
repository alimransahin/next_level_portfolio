import { IExperience } from "@/src/app/(WIthCommonLayouts)/(admin)/admin/(Experience)/create-experience/page";
import axiosInstance from "@/src/lib/AxiosInstance";

export const getAllExperience = async () => {
  try {
    const { data } = await axiosInstance.get(`/experience`);

    // console.log("data:", data);
    return data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Failed to retrieve Experience",
    );
  }
};
export const addExperience = async (experienceData: IExperience) => {
  try {
    const { data } = await axiosInstance.post("/experience/", experienceData);

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
