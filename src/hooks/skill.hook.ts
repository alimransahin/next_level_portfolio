import { useState } from "react";
import { toast } from "sonner";
import { getAllSkill } from "../services/Skill";

export const useGetSkill = () => {
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const handletSkill = async () => {
    setIsPending(true);
    setIsSuccess(false);
    setError(null);

    try {
      const result = await getAllSkill();
      setIsSuccess(true);
      return result; // Return the fetched data here
    } catch (err: any) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setIsPending(false);
    }
  };

  return { handletSkill, isPending, isSuccess, error };
};
