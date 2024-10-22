"use client";
import React from "react";
import { Card, Spacer } from "@nextui-org/react";

type SkillCategoryProps = {
  title: string;
  skills: { name: string; imageUrl: string }[];
};

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <Card className="p-6 shadow-lg bg-gradient-to-tr from-green-50 to-white dark:from-green-900 dark:to-gray-900">
      <h3 className="text-2xl font-semibold text-green-600 dark:text-green-300">
        {title}
      </h3>
      <Spacer y={1} />
      <ul className="list-none text-gray-700 dark:text-gray-300">
        {skills.map((skill, index) => (
          <li key={index} className="text-lg flex items-center gap-2">
            <img src={skill.imageUrl} alt={skill.name} className="w-6 h-6" />{" "}
            {/* Image as icon */}
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", imageUrl: "/images/react-icon.png" },
        { name: "Next.js", imageUrl: "/images/nextjs-icon.png" },
        { name: "TypeScript", imageUrl: "/images/typescript-icon.png" },
        { name: "Tailwind CSS", imageUrl: "/images/tailwind-icon.png" },
        { name: "HTML5", imageUrl: "/images/html5-icon.png" },
        { name: "CSS3", imageUrl: "/images/css3-icon.png" },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", imageUrl: "/images/nodejs-icon.png" },
        { name: "Express", imageUrl: "/images/express-icon.png" },
        { name: "MongoDB", imageUrl: "/images/mongodb-icon.png" },
        { name: "Mongoose", imageUrl: "/images/mongoose-icon.png" },
        { name: "REST API", imageUrl: "/images/rest-api-icon.png" },
      ],
    },
    {
      title: "UI/UX Design",
      skills: [
        { name: "Figma", imageUrl: "/images/figma-icon.png" },
        { name: "Adobe XD", imageUrl: "/images/adobe-xd-icon.png" },
        { name: "Sketch", imageUrl: "/images/sketch-icon.png" },
        {
          name: "Responsive Design",
          imageUrl: "/images/responsive-design-icon.png",
        },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", imageUrl: "/images/git-icon.png" },
        { name: "Docker", imageUrl: "/images/docker-icon.png" },
        { name: "Jira", imageUrl: "/images/jira-icon.png" },
        { name: "Postman", imageUrl: "/images/postman-icon.png" },
        { name: "VS Code", imageUrl: "/images/vscode-icon.png" },
      ],
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto" id="skills">
      <h3
        className="text-3xl text-center py-4 bg-gradient-to-r from-primary-100 font-bold rounded-md"
        style={{ fontFamily: "Josefin Sans, sans-serif" }}
      >
        Skills
      </h3>
      <div className="p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <SkillCategory
            key={index}
            title={category.title}
            skills={category.skills}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
