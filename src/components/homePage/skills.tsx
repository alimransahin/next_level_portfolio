"use client";
import React from "react";
import { Card, Spacer } from "@nextui-org/react";

type SkillCategoryProps = {
  title: string;
  skills: { name: string; imageUrl: string }[];
};

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <Card className="p-6 shadow-lg bg-gradient-to-tr from-primary-200 to-primary-50 ">
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
        { name: "HTML5", imageUrl: "https://i.ibb.co.com/RgGLyhD/HTML.png" },
        { name: "CSS3", imageUrl: "https://i.ibb.co.com/0KHkCHs/CSS.png" },
        {
          name: "Bootstrap",
          imageUrl: "https://i.ibb.co.com/0q61jJg/bootstrap.png",
        },
        {
          name: "Tailwind CSS",
          imageUrl: "https://i.ibb.co.com/Cz6wqwY/tailwind.png",
        },
        { name: "React", imageUrl: "https://i.ibb.co.com/jzDSJpm/react.png" },
        {
          name: "Next.js",
          imageUrl: "https://i.ibb.co.com/1TcbwN3/nextjs.jpg",
        },
        {
          name: "JavaScript",
          imageUrl: "https://i.ibb.co.com/7kvV7Wc/javascript.png",
        },
        {
          name: "TypeScript",
          imageUrl: "https://i.ibb.co.com/JjQH21y/ts.webp",
        },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", imageUrl: "https://i.ibb.co.com/dWkgH6S/node.png" },
        {
          name: "Express",
          imageUrl: "https://i.ibb.co.com/YWWBS6q/express.png",
        },
        {
          name: "MongoDB",
          imageUrl: "https://i.ibb.co.com/7CBwBz2/mongodb.png",
        },
        {
          name: "Mongoose",
          imageUrl: "https://i.ibb.co.com/7CBwBz2/mongodb.png",
        },
        { name: "REST API", imageUrl: "https://i.ibb.co.com/SN1qHt5/rest.png" },
      ],
    },
    {
      title: "UI/UX Design",
      skills: [
        { name: "Figma", imageUrl: "https://i.ibb.co.com/23Xd2b0/figma.png" },
        { name: "Adobe XD", imageUrl: "https://i.ibb.co.com/dW5RJbG/xd.webp" },

        {
          name: "Responsive Design",
          imageUrl: "https://i.ibb.co.com/TMhM5Tw/dev.png",
        },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", imageUrl: "https://i.ibb.co.com/vX48VzV/github.png" },
        { name: "Docker", imageUrl: "https://i.ibb.co.com/3sfqhqb/Docker.png" },

        {
          name: "Postman",
          imageUrl: "https://i.ibb.co.com/pJN5QZZ/pngwing-com.png",
        },
        {
          name: "VS Code",
          imageUrl: "https://i.ibb.co.com/7bVVznQ/vscode.png",
        },
      ],
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto" id="skills">
      <h3
        className="text-3xl  text-center  py-4 bg-gradient-to-r from-primary-100 to-secondary-100 font-bold rounded-md"
        style={{ fontFamily: "Josefin Sans, sans-serif" }}
      >
        Skills
      </h3>
      <div className=" py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
