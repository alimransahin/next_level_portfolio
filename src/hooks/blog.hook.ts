import { useState } from "react";
import { toast } from "sonner";

import { addBlog, getAllBlog } from "../services/Blog";

export interface IBlog {
  title: string;
  author: string;
  content: string;
  tags: string[];
  imageUrl: string;
}

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
export const useAddBlog = () => {
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const handleAddBlog = async (data: IBlog) => {
    setIsPending(true);
    setIsSuccess(false);
    setError(null);
    // console.log(data);
    try {
      await addBlog(data);

      setIsSuccess(true);
      toast.success("Blog Added successful");
    } catch (err: any) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setIsPending(false);
    }
  };

  return { handleAddBlog, isPending, isSuccess, error };
};
