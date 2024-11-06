import { Card, CardBody, CardFooter } from "@nextui-org/react";

const ProjectSkeleton = () => {
  return (
    <Card
      className="relative glass bg-opacity-50 p-4 animate-pulse"
      radius="lg"
      style={{ backdropFilter: "blur(10px)" }}
    >
      {/* Skeleton Project Image */}
      <CardBody className="h-44 bg-gray-200 rounded-lg mb-4" />

      {/* Skeleton Project Info */}
      <CardBody className="py-4">
        <div className="h-6 bg-gray-200 rounded-lg w-3/4 mb-2" />
        <div className="h-4 bg-gray-200 rounded-lg w-1/2" />
      </CardBody>

      {/* Skeleton Links */}
      <CardFooter className="flex justify-between mt-4">
        <div className="h-4 bg-gray-200 rounded w-16" />
        <div className="h-4 bg-gray-200 rounded w-16" />
        <div className="h-4 bg-gray-200 rounded w-16" />
      </CardFooter>

      {/* Skeleton Details Button */}
      <CardFooter className="flex justify-end mt-2">
        <div className="h-8 w-20 bg-primary-300 rounded-lg" />
      </CardFooter>
    </Card>
  );
};

export default ProjectSkeleton;
