import { ISkill } from "@/src/app/(WIthCommonLayouts)/(admin)/admin/(Skill)/create-skill/page";
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
export const addSkill = async (skillData: ISkill) => {
  try {
    const { data } = await axiosInstance.post("/skill/", skillData);

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
