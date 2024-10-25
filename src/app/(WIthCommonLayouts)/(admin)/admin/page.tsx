"use client";

import { ReactNode } from "react";
import Link from "next/link";
import Sidebar from "@/src/components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="text-9xl">
      Dashboard Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Explicabo tempora amet quibusdam quasi ratione saepe mollitia aut corporis
      consectetur aperiam debitis possimus velit, corrupti magnam sint officiis
      temporibus! Nesciunt, necessitatibus.
    </p>
    // <div className="min-h-screen flex">
    //   {/* Sidebar */}
    //   <Sidebar />

    //   {/* Main content area */}
    //   <div className="flex-1 flex flex-col">
    //     {/* Header */}
    //     <header className="bg-white shadow-sm p-4 flex justify-between items-center">
    //       <Link href="/admin" className="text-2xl font-semibold text-gray-800">
    //         Dashboard
    //       </Link>
    //       <div className="flex items-center space-x-4">
    //         <span className="text-sm text-gray-600">Md. Al Imran</span>
    //         <img
    //           src="https://i.ibb.co.com/Xp5qBf4/imran.jpg"
    //           alt="Profile"
    //           className="w-10 h-10 rounded-full"
    //         />
    //       </div>
    //     </header>

    //     {/* Content */}
    //     <main className="p-6 bg-gray-100 flex-1">{children}</main>
    //   </div>
    // </div>
  );
};

export default DashboardLayout;
