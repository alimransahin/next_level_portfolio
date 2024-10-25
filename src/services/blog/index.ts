import axiosInstance from "@/src/lib/AxiosInstance";

export const getAllBlog = async () => {
  try {
    const { data } = await axiosInstance.get(`/blog`);
    return data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Failed to retrieve Project"
    );
  }
};
