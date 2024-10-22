"use client";
import React from "react";
import { Card, Spacer } from "@nextui-org/react"; // Correct imports from NextUI

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Tech Innovators",
      duration: "Jan 2022 - Present",
      description:
        "Developed and maintained the front-end functionality of multiple web applications using React, TypeScript, and Tailwind CSS.",
    },
    {
      title: "UI/UX Designer",
      company: "Design Hub",
      duration: "Feb 2020 - Dec 2021",
      description:
        "Collaborated with the development team to create responsive and user-friendly web interfaces, enhancing user experience and accessibility.",
    },
    {
      title: "Software Engineer Intern",
      company: "Startup Labs",
      duration: "Jun 2019 - Jan 2020",
      description:
        "Assisted in the development of backend services using Node.js and helped optimize database queries to improve performance.",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto" id="experience">
      <h3
        className="text-3xl text-center py-4 bg-gradient-to-r from-primary-100 font-bold rounded-md"
        style={{ fontFamily: "Josefin Sans, sans-serif" }}
      >
        Experience
      </h3>
      <div className="p-12 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiences.map((experience, index) => (
          <Card
            key={index}
            // variant="bordered"
            className="p-6 shadow-lg bg-gradient-to-tr from-blue-50 to-white dark:from-blue-900 dark:to-gray-900"
          >
            <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-300">
              {experience.title}
            </h3>
            <h4 className="text-xl text-gray-800 dark:text-gray-200">
              {experience.company}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {experience.duration}
            </p>
            <Spacer y={1} />
            <p className="text-gray-700 dark:text-gray-300">
              {experience.description}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Experience;
