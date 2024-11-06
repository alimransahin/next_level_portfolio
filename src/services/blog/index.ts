import { IBlog } from "@/src/hooks/blog.hook";
import axiosInstance from "@/src/lib/AxiosInstance";

export const getAllBlog = async () => {
  try {
    const { data } = await axiosInstance.get(`/blog`);

    return data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to retrieve blog");
  }
};
export const addBlog = async (blogData: IBlog) => {
  try {
    const { data } = await axiosInstance.post("/blog", blogData);

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
