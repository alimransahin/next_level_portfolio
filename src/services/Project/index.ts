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
export const getAllActivity = async () => {
  try {
    const { data } = await axiosInstance.get(`/activity`);

    return data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Failed to retrieve activity information"
    );
  }
};
export const getCurrentUser = async (email: string) => {
  try {
    const { data } = await axiosInstance.get(`/auth/${email}`);

    return data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Failed to retrieve user information"
    );
  }
};
// export const UpdateUserProfile = async (
//   userData: FieldValues,
//   userId: string
// ) => {
//   try {
//     const { data } = await axiosInstance.put(
//       `/user/update-profile/${userId}`,
//       userData
//     );

//     return data;
//   } catch (error: any) {
//     throw new Error(error);
//   }
// };
export const UpdateUserStatus = async (action: string, userId: string) => {
  try {
    const { data } = await axiosInstance.put(`/user/update-status/${userId}`, {
      action,
    });

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
export const UpdateUserFollow = async (authId: string, userId: string) => {
  try {
    const { data } = await axiosInstance.put(`/user/follow/${authId}`, {
      userId,
    });

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
