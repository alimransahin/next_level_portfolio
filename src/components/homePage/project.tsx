"use client";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
const projects = [
  {
    id: "0001",
    name: "Bbookss",
    live: "https://bbookss-55d9e.web.app/",
    client: "https://github.com/alimransahin/bbookss-client",
    server: "https://github.com/alimransahin/bbookss-server",
    technology: [
      "React",
      "Tailwind",
      "ReactJs",
      "NodeJs",
      "Firebase",
      "Mongodb",
      "React Router",
      "React Tailwind",
    ],
    featcher: [
      "MongoDb CRUD operation",
      "Implement json web token to secure API",
      "Implement public and private routes",
      "Admin Dashboard, Buyer Dashboard, Seller Dashboard",
    ],
    images: [
      "https://i.ibb.co/L58vjt7/home-page-bbookss.png",
      "https://i.ibb.co/XyNtqCq/blog.png",
      "https://i.ibb.co/kQVSg0Z/buy-book.png",
      "https://i.ibb.co/t20V1wz/buyer.png",
      "https://i.ibb.co/cxtbJRF/catagory.png",
      "https://i.ibb.co/kDM7mdr/login.png",
      "https://i.ibb.co/bX4R127/seller.png",
      "https://i.ibb.co/bgSf58k/signup.png",
    ],
  },
  {
    id: "0002",
    name: "Meghna Tourist Service",
    live: "https://meghna-tourist-service.web.app/",
    client: "https://github.com/alimransahin/meghna-client",
    server: "https://github.com/alimransahin/meghna-server",
    technology: ["Tailwind", "ReactJs", "NodeJs", "Firebase", "Mongodb"],
    featcher: [
      "MongoDb CRUD operation",
      "Implement json web token to secure API",
      "Implement public and private routes.",
    ],
    images: [
      "https://i.ibb.co/RPSh58h/Home.png",
      "https://i.ibb.co/qW04k1J/add-Service.png",
      "https://i.ibb.co/VMNw5sr/blog.png",
      "https://i.ibb.co/W6DY38b/login.png",
      "https://i.ibb.co/JHzRTT7/my-review.png",
      "https://i.ibb.co/sC7xDYX/review.png",
      "https://i.ibb.co/9n2cL9Z/service.png",
    ],
  },
  {
    id: "0003",
    name: "Programming point",
    live: "https://programming-point-7871f.web.app/",
    client: "https://github.com/alimransahin/programming-point-client",
    server: "https://github.com/alimransahin/programming-point-server",
    technology: ["Tailwind", "ReactJs", "NodeJs", "Firebase"],
    featcher: [
      "Implement Public, Private routes using react router",
      "Stored all data in mongoDB",
      "Login by email, google, github using firebase",
    ],
    images: [
      "https://i.ibb.co/0hDwXdL/home.png",
      "https://i.ibb.co/QXWR10Q/blog.png",
      "https://i.ibb.co/JqGhbrT/buy-course.png",
      "https://i.ibb.co/jwzTKgn/course-details.png",
      "https://i.ibb.co/SsPmfzT/login.png",
      "https://i.ibb.co/FYMJ4DT/sign-up.png",
    ],
  },
];
const Projects = () => {
  console.log(projects);
  return (
    <div className="max-w-screen-xl mx-auto" id="projects">
      <h3
        className="text-3xl  text-center  py-4 bg-gradient-to-r from-primary-100 to-secondary-100 font-bold rounded-md"
        style={{ fontFamily: "Josefin Sans, sans-serif" }}
      >
        Projects
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-4">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="relative glass bg-opacity-50 p-4 transition-transform transform  hover:shadow-xl"
            style={{ backdropFilter: "blur(10px)" }} // Glassmorphism effect
            radius="lg"
          >
            {/* Project Image */}
            <CardBody>
              <Image
                src={project.images[0]}
                alt={project.name}
                className="rounded-lg object-cover w-full max-h-72"
                width={400} // Set a consistent width
                height={80} // Set a consistent height
                // showSkeleton
              />
            </CardBody>

            {/* Project Info */}
            <CardBody className="py-4">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                {project.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                "project.description"
              </p>
            </CardBody>

            {/* Links */}
            <CardFooter className="flex justify-between mt-4">
              <Link
                href={project.live}
                className="text-blue-600 dark:text-blue-400 hover:underline"
                // isExternal
              >
                Live
              </Link>
              <Link
                href={project.client}
                className="text-blue-600 dark:text-blue-400 hover:underline"
                // isExternal
              >
                Client
              </Link>
              {project.server && (
                <Link
                  href={project.server}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  //   isExternal
                >
                  Server
                </Link>
              )}
            </CardFooter>

            {/* Details Button */}
            <CardFooter className="flex justify-end">
              <Link
                href={`/details/${project.id}`}
                className="btn bg-primary-500 text-white hover:bg-primary-600 dark:bg-primary-400 dark:hover:bg-primary-500 transition-all"
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
