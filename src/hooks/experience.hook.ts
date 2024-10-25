import { useState } from "react";
import { toast } from "sonner";
import { getAllExperience } from "../services/Experience";

export const useGetExperience = () => {
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const handletExperience = async () => {
    setIsPending(true);
    setIsSuccess(false);
    setError(null);

    try {
      const result = await getAllExperience();
      setIsSuccess(true);
      return result;
    } catch (err: any) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setIsPending(false);
    }
  };

  return { handletExperience, isPending, isSuccess, error };
};
