"use client";

import { useEffect, useState } from "react";

import SkillSkeleton from "./SkillSkeleton";
import SkillCategory from "./skillCategory";

import { TSkill } from "@/src/types";
import { useGetSkill } from "@/src/hooks/skill.hook";

const Skills: React.FC = () => {
  const { handletSkill } = useGetSkill();
  const [data, setData] = useState<TSkill[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      const result = await handletSkill();

      if (result) {
        setData(result.data);
      }
      setIsLoading(false);
    };

    fetchSkills();
  }, [handletSkill]);

  const skillCategories = data.reduce<{ category: string; items: TSkill[] }[]>(
    (acc, item) => {
      const { category } = item;
      let categoryGroup = acc.find((group) => group.category === category);

      if (!categoryGroup) {
        categoryGroup = { category, items: [] };
        acc.push(categoryGroup);
      }

      categoryGroup.items.push(item);

      return acc;
    },
    [],
  );

  return (
    <div className="max-w-screen-xl mx-auto" id="skills">
      <h3
        className="text-3xl text-center py-4 bg-gradient-to-r from-primary-100 to-secondary-100 font-bold rounded-md"
        style={{ fontFamily: "Josefin Sans, sans-serif" }}
      >
        Skills
      </h3>
      <div className="py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading
          ? [...Array(3)].map((_, index) => <SkillSkeleton key={index} />)
          : skillCategories.map((category, index) => (
              <SkillCategory
                key={index}
                skills={category.items}
                title={category.category}
              />
            ))}
      </div>
    </div>
  );
};

export default Skills;
