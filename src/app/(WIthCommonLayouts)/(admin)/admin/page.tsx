"use client";

import { Rocket } from "lucide-react";

const DashboardLayout = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-primary-700 to-secondary-600 text-white">
      <div className="text-center max-w-xl mx-4 p-10 bg-white bg-opacity-20 backdrop-blur-md rounded-xl shadow-lg">
        <div className="flex flex-col items-center space-y-4">
          <Rocket className="text-6xl text-yellow-300 animate-pulse" />
          <h1 className="text-4xl font-extrabold text-gray-100">
            Welcome to Your Dashboard!
          </h1>
          <p className="text-lg text-gray-200 max-w-md">
            Discover, manage, and showcase your skills, projects, and
            experiences. Customize your portfolio with a few clicks and track
            your professional growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
