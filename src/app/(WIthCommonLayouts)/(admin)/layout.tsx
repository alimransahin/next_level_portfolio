import Footer from "@/src/components/footer";
import { Navbar } from "@/src/components/navbar";
import Sidebar from "@/src/components/sidebar";
import Link from "next/link";


const Commonlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto min-h-screen flex">
      {/* Sidebar */}
      <div className="sticky top-0 h-screen">
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm p-4 flex justify-between items-center sticky top-0">
          <Link href="/admin" className="text-2xl font-semibold text-gray-800">
            Dashboard
          </Link>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Md. Al Imran</span>
            <img
              src="https://i.ibb.co.com/Xp5qBf4/imran.jpg"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </header>

        {/* Content */}
        <main className="p-6 bg-gray-100 flex-1">{children}</main>
      </div>
    </div>
  );
};

export default Commonlayout;
