import { useState } from "react";
import { toast } from "sonner";
import { getAllBlog } from "../services/blog";

export const useGetBlog = () => {
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const handletBlog = async () => {
    setIsPending(true);
    setIsSuccess(false);
    setError(null);

    try {
      const result = await getAllBlog();
      setIsSuccess(true);
      return result;
    } catch (err: any) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setIsPending(false);
    }
  };

  return { handletBlog, isPending, isSuccess, error };
};
