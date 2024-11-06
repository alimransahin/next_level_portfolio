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
    };
  }

  return decodedToken;
};
