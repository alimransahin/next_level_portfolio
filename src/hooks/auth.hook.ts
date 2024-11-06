import { useState } from "react";
import { toast } from "sonner";

import { loginUser } from "@/src/services/AuthService";

export interface LoginData {
  email: string;
  password: string;
}

export const useUserLogin = () => {
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const handleLogin = async (data: LoginData) => {
    setIsPending(true);
    setIsSuccess(false);
    setError(null);

    try {
      await loginUser(data);

      setIsSuccess(true);
      toast.success("Login successful");
    } catch (err: any) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setIsPending(false);
    }
  };

  return { handleLogin, isPending, isSuccess, error };
};
