import Footer from "@/src/components/footer";
import { Navbar } from "@/src/components/navbar";
import React from "react";

const Commonlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Commonlayout;
