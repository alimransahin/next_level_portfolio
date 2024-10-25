"use client";
import { useGetProjects } from "@/src/hooks/project.hook";
import { TProject } from "@/src/types";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import  { useEffect, useState } from "react";
import ProjectSkeleton from "./ProjectSkeleton";

const Projects = () => {
  const { handletProject } = useGetProjects();
  const [projects, setProjects] = useState<TProject[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const result = await handletProject();
      if (result) {
        setProjects(result.data);
      }
      setIsLoading(false);
    };
    fetchProjects();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto" id="projects">
      <h3
        className="text-3xl text-center py-4 bg-gradient-to-r from-primary-100 to-secondary-100 font-bold rounded-md"
        style={{ fontFamily: "Josefin Sans, sans-serif" }}
      >
        Projects
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-4">
        {isLoading
          ? Array.from({ length: 3 }).map((_, index) => (
              <ProjectSkeleton key={index} />
            ))
          : projects.map((project) => (
              <Card
                key={project._id}
                className="relative glass bg-opacity-50 p-4 transition-transform transform hover:shadow-xl"
                style={{ backdropFilter: "blur(10px)" }}
                radius="lg"
              >
                {/* Project Image */}
                <CardBody>
                  <Image
                    src={project.mainImage}
                    alt={project.name}
                    className="rounded-lg object-cover w-full max-h-72"
                    width={400}
                    height={80}
                  />
                </CardBody>

                {/* Project Info */}
                <CardBody className="py-4">
                  <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                    {project.name}
                  </h2>
                  <ul className="mt-4 list-disc pl-5">
                    {project.feature.map((feat, index) => (
                      <li
                        key={index}
                        className="text-gray-500 dark:text-gray-300"
                      >
                        {feat}
                      </li>
                    ))}
                  </ul>
                </CardBody>

                {/* Links */}
                <CardFooter className="flex justify-between mt-4">
                  <Link
                    href={project.live}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Live
                  </Link>
                  <Link
                    href={project.client}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Client
                  </Link>
                  {project.server && (
                    <Link
                      href={project.server}
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Server
                    </Link>
                  )}
                </CardFooter>

                {/* Details Button */}
                <CardFooter className="flex justify-center  mt-2">
                  <Link
                    href={`/details/${project._id}`}
                    className=" bg-gradient-to-tr from-primary to-secondary text-white px-6 py-3 rounded-lg shadow-lg hover:bg-primary-700  duration-300 font-semibold transition-all"
                  >
                    Details
                  </Link>
                </CardFooter>
              </Card>
            ))}
      </div>
    </div>
  );
};

export default Projects;
