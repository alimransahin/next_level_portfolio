"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { SidebarOptions } from "./SidebarOptions";
import { adminLinks } from "./constants";

import { logOut } from "@/src/services/AuthService";

const Sidebar = () => {
  const router = useRouter();

  const handleLogout = () => {
    logOut();
    router.push("/");
  };

  return (
    <div>
      <aside className="w-64 bg-gray-800 text-white flex flex-col justify-between h-screen sticky">
        <div>
          <div className="my-6">
            <Link
              className="text-xl font-bold block py-2.5 px-4 hover:bg-gray-700"
              href="/admin"
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
            className="w-full py-2 px-4 bg-red-500 hover:bg-red-600 text-white rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
