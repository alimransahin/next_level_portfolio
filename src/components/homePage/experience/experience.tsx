"use client";

import { Card, Spacer } from "@nextui-org/react";
import { useEffect, useState } from "react";

import ExperienceSkeleton from "./experienceSkeleton";

import { TExperience } from "@/src/types";
import { useGetExperience } from "@/src/hooks/experience.hook";

const Experience: React.FC = () => {
  const { handletExperience } = useGetExperience();
  const [experiences, setExperiences] = useState<TExperience[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchExperience = async () => {
      const result = await handletExperience();

      if (result) {
        setExperiences(result.data); // Ensure it sets to an empty array if data is null
      }
      setIsLoading(false);
    };

    fetchExperience();
  }, [handletExperience]);

  // Check if the experiences array is empty or null
  // if (!experiences || experiences.length === 0) {
  //   return null; // Return null to hide the section
  // }

  return (
    <div className="max-w-screen-xl mx-auto" id="experience">
      <h3
        className="text-3xl text-center py-4 bg-gradient-to-r from-primary-100 to-secondary-100 font-bold rounded-md"
        style={{ fontFamily: "Josefin Sans, sans-serif" }}
      >
        Experience
      </h3>
      <div className="py-4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading
          ? [...Array(3)].map((_, index) => <ExperienceSkeleton key={index} />)
          : experiences.map((experience, index) => (
              <Card
                key={index}
                className="p-6 shadow-lg bg-gradient-to-tr from-primary-200 to-primary-50"
              >
                <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-300">
                  {experience.role}
                </h3>
                <h4 className="text-xl text-gray-800 dark:text-gray-200">
                  {experience.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {experience.startTime} - {experience.endTime}
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
