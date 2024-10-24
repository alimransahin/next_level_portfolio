import Footer from "@/src/components/footer";
import { Navbar } from "@/src/components/navbar";
import React from "react";

const Commonlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex flex-col h-screen">
      <main className="container mx-auto max-w-7xl flex-grow">{children}</main>
    </div>
  );
};

export default Commonlayout;
