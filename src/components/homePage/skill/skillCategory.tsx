"use client";

import { Card, Spacer } from "@nextui-org/react";

type SkillCategoryProps = {
  title: string;
  skills: { name: string; image: string }[];
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
            <img alt={skill.name} className="w-6 h-6" src={skill.image} />{" "}
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default SkillCategory;
