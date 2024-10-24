// Custom hook for handling user login

import { useState } from "react";
import { toast } from "sonner";
import { loginUser } from "@/src/services/AuthService"; // Update path to match your service

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
      const result = await loginUser(data); // Calling the login function from the service

      setIsSuccess(true);
      toast.success("Login successful");
      console.log("Login result:", result);
    } catch (err: any) {
      setError(err.message);
      toast.error(err.message); // Displaying error using toast
    } finally {
      setIsPending(false); // Reset the loading state
    }
  };

  return { handleLogin, isPending, isSuccess, error };
};
