import { useState } from "react";
import { toast } from "sonner";
import { addProject, getAllProject } from "../services/Project";
import { loginUser } from "../services/AuthService";

export interface IProject {
  name: string;
  live: string;
  client: string;
  server: string;
  technology: string[];
  feature: string[];
  mainImage: string;
  images: string[];
  description: string;
  isDeleted: boolean;
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
      return result;
    } catch (err: any) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setIsPending(false);
    }
  };

  return { handletProject, isPending, isSuccess, error };
};
export const useAddProject = () => {
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const handleAddProject = async (data: IProject) => {
    setIsPending(true);
    setIsSuccess(false);
    setError(null);
    // console.log(data);
    try {
      const result = await addProject(data);

      setIsSuccess(true);
      toast.success("Project Added successful");
    } catch (err: any) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setIsPending(false);
    }
  };

  return { handleAddProject, isPending, isSuccess, error };
};
