import { useState } from "react";
import { toast } from "sonner";

import { addExperience, getAllExperience } from "../services/Experience";
import { IExperience } from "../app/(WIthCommonLayouts)/(admin)/admin/(Experience)/create-experience/page";

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
export const useAddExperience = () => {
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const handleAddExperience = async (data: IExperience) => {
    setIsPending(true);
    setIsSuccess(false);
    setError(null);
    // console.log(data);
    try {
      await addExperience(data);

      setIsSuccess(true);
      toast.success("Experience Added successful");
    } catch (err: any) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setIsPending(false);
    }
  };

  return { handleAddExperience, isPending, isSuccess, error };
};
