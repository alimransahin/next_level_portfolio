"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

// import { Accordion, AccordionItem } from "@nextui-org/accordion";
// import { Avatar } from "@nextui-org/react";

const Education = () => {
  //   const defaultContent =
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className=" max-w-screen-xl mx-auto" id="contact">
      <h3
        className="text-3xl  text-center  py-4 bg-gradient-to-r from-primary-100 to-secondary-100 font-bold rounded-md"
        style={{ fontFamily: "Josefin Sans, sans-serif" }}
      >
        Education
      </h3>
      <div
        className="my-4 flex bg-no-repeat bg-cover text-center bg-fixed"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/YL1cHBL/green.jpg)",
        }}
      >
        <div className=" p-12 bg-primary-50 bg-opacity-70  text-center backdrop-blur-sm w-full grid grid-cols-3 gap-3">
          <Card className="">
            <CardHeader className="flex gap-3">
              <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                width={40}
              />
              <div className=" text-start">
                <p className="text-md">Green u b</p>
                <p className="text-small text-default-500">B.Sc</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>Status: Running </p>
              <p> Computer Science and Engneering </p>
              <p>October 19, 2021 - Present </p>
            </CardBody>
            <Divider />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Education;
