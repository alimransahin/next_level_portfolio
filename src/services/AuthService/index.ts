"use server";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import axiosInstance from "@/src/lib/AxiosInstance";
import { LoginData } from "@/src/hooks/auth.hook";

export const loginUser = async (userData: LoginData) => {
  try {
    const { data } = await axiosInstance.post("/auth/login", userData);

    if (data.success) {
      cookies().set("accessToken", data?.data?.accessToken);
      cookies().set("refreshToken", data?.data?.refreshToken);
    }

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const logOut = () => {
  cookies().delete("accessToken");
  cookies().delete("refreshToken");
};

// export const changePassword = async (userData: FieldValues) => {
//   try {
//     const { data } = await axiosInstance.post("/auth/password", userData);

//     return data;
//   } catch (error: any) {
//     throw new Error(error);
//   }
// };

// export const forgetPassword = async (userData: FieldValues) => {
//   try {
//     const { data } = await axiosInstance.post(
//       "/auth/forget-password",
//       userData
//     );

//     return data;
//   } catch (error: any) {
//     throw new Error(error);
//   }
// };

// export const resetPassword = async (userData: FieldValues) => {
//   try {
//     const { data } = await axiosInstance.post("/auth/reset-password", userData);

//     return data;
//   } catch (error: any) {
//     throw new Error(error);
//   }
// };

export const getAllUser = async () => {
  try {
    const { data } = await axiosInstance.get(`/user`);
    return data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Failed to retrieve user information"
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

export const getActiveUser = async () => {
  const accessToken = cookies().get("accessToken")?.value;
  let decodedToken;

  if (accessToken) {
    decodedToken = await jwtDecode(accessToken);

    return {
      _id: decodedToken._id,
      name: decodedToken.name,
      email: decodedToken.email,
      role: decodedToken.role,
      isBlock: decodedToken.isBlock,
    };
  }

  return decodedToken;
};
