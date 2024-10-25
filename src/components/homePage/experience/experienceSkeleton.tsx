import { Card, Spacer } from "@nextui-org/react";

const ExperienceSkeleton: React.FC = () => {
  return (
    <Card className="p-6 shadow-lg bg-gradient-to-tr from-primary-200 to-primary-50 animate-pulse">
      <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded-md w-1/2 mb-2"></div>
      <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded-md w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded-md w-1/4 mb-2"></div>
      <Spacer y={1} />
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded-md w-full"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded-md w-full mt-2"></div>
    </Card>
  );
};

export default ExperienceSkeleton;
