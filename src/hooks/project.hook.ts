import { useState } from "react";
import { toast } from "sonner";
import { getAllProject } from "../services/Project";

export interface LoginData {
  email: string;
  password: string;
}

export const useGetProjects = () => {
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const handletProject = async () => {
    setIsPending(true);
    setIsSuccess(false);
    setError(null);

    try {
      const result = await getAllProject();
      setIsSuccess(true);
      return result; // Return the fetched data here
    } catch (err: any) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setIsPending(false);
    }
  };

  return { handletProject, isPending, isSuccess, error };
};
