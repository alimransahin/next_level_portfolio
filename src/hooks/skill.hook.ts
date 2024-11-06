import { useState } from "react";
import { toast } from "sonner";

import { addSkill, getAllSkill } from "../services/Skill";
import { ISkill } from "../app/(WIthCommonLayouts)/(admin)/admin/(Skill)/create-skill/page";

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

      return result;
    } catch (err: any) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setIsPending(false);
    }
  };

  return { handletSkill, isPending, isSuccess, error };
};
export const useAddSkill = () => {
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const handleAddSkill = async (data: ISkill) => {
    setIsPending(true);
    setIsSuccess(false);
    setError(null);
    // console.log(data);
    try {
      await addSkill(data);

      setIsSuccess(true);
      toast.success("Skill Added successful");
    } catch (err: any) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setIsPending(false);
    }
  };

  return { handleAddSkill, isPending, isSuccess, error };
};
