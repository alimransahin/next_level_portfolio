import { Card, Spacer } from "@nextui-org/react";

const SkillSkeleton: React.FC = () => {
  return (
    <Card className="p-6 shadow-lg bg-gradient-to-tr from-primary-200 to-primary-50 animate-pulse">
      <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded-md w-1/3 mb-4"></div>
      <Spacer y={1} />
      <ul className="list-none">
        {[...Array(3)].map((_, index) => (
          <li key={index} className="flex items-center gap-2 mb-2 text-lg">
            <div className="w-6 h-6 bg-gray-300 dark:bg-gray-700 rounded-full" />
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded-md w-2/3"></div>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default SkillSkeleton;
