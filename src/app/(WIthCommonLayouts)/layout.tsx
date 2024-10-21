import { Navbar } from "@/src/components/navbar";
import React from "react";

const Commonlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        Footer
      </footer>
    </div>
  );
};

export default Commonlayout;
