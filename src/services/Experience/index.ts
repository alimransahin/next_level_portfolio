import axiosInstance from "@/src/lib/AxiosInstance";

export const getAllExperience = async () => {
  try {
    const { data } = await axiosInstance.get(`/experience`);
    return data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Failed to retrieve Experience"
    );
  }
};
