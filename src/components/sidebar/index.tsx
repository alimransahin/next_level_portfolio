"use client";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { Check, ClipboardEdit, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { Skeleton } from "@nextui-org/skeleton";
import { SidebarOptions } from "./SidebarOptions";
import { adminLinks } from "./constants";
import { useUser } from "@/src/context/UserProvider";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const { user } = useUser();
  // const userId = user?._id;
  const router = useRouter();

  const handleLogout = () => {
    // Handle logout logic
    router.push("/login");
  };

  // useEffect(() => {
  //   if (user?.email) {
  //     handleGetUser({ email: user.email });
  //   }
  // }, [user?.email, handleGetUser]);

  const currentUser = user;

  // Image upload

  // const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const selectedFile = e.target.files?.[0];

  //   if (selectedFile) {
  //     await handleUpload(selectedFile); // Call the upload function directly
  //   }
  // };

  // const handleUpload = async (file: File) => {
  //   const formData = new FormData();

  //   formData.append("image", file);

  //   try {
  //     const response = await axios.post(
  //       `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,
  //       formData
  //     );
  //     const directLink = response.data.data.url;
  //     const profilePicture = { profilePicture: directLink };

  //     userId && handleUpdateProfile({ data: profilePicture, userId });
  //     handleGetUser({ email: user?.email });
  //     toast.success("Image uploaded successfully!");
  //   } catch (error) {
  //     toast.error("Error uploading image");
  //   }
  // };

  return (
    <div>
      <aside className="w-64 bg-gray-800 text-white flex flex-col justify-between h-screen">
        <div>
          <div className="my-6">
            <Link
              href="/admin"
              className="text-xl font-bold block py-2.5 px-4  hover:bg-gray-700"
            >
              Dashboard
            </Link>
          </div>
          <nav>
            <div className="mt-3 space-y-2 rounded-xl p-2">
              <SidebarOptions links={adminLinks} />
            </div>
          </nav>
        </div>
        <div className="p-6">
          <button
            onClick={handleLogout}
            className="w-full py-2 px-4 bg-red-500 hover:bg-red-600 text-white rounded"
          >
            Logout
          </button>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;

// {name: 'Md Al Imran', phone: '01517824146', address: 'Baliapara Rupganj'}
