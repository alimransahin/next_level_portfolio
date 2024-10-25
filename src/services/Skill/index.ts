import axiosInstance from "@/src/lib/AxiosInstance";

export const getAllSkill = async () => {
  try {
    const { data } = await axiosInstance.get(`/skill`);
    return data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Failed to retrieve Skill"
    );
  }
};
