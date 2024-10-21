"use client";
import { Link } from "@nextui-org/link";
import TypewriterComponent from "typewriter-effect";

const Banner = () => {
  return (
    <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 grid-cols-1 content-center">
      <div className="details  flex-row m-auto text-center ">
        <h1 className="from-primary-500 to-secondary-500 text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-tl ">
          I am MD. AL IMRAN
        </h1>
        <h2 className="from-primary-500 to-secondary-500 text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br ">
          <TypewriterComponent
            options={{
              strings: [
                "MERN-stack web developer",
                "Experienced UI/UX Developer",
                "3+ years of coding experience",
                "Always learning new things",
                "Quick learner",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <p className="py-2">
          I am passionate about building modern web applications using advanced
          technologies like React, NextJs, MongoDB, ExpressJS and NodeJS.
        </p>
        <Link
          isExternal
          aria-label="Resume"
          className="p-2 border-3 rounded-lg border-gray text-default-foreground font-bold"
          href="https://drive.google.com/file/d/1VfIjHS5ZL0G_836nnZgB0V_eaXhU3dJX/view"
        >
          Resume
        </Link>
      </div>
      <div className="img content-center  ">
        <img
          src="https://i.ibb.co/9spF687/imran-2.png"
          className="m-auto w-full sm:w-1/2"
          alt="Md Al Imran"
        />
      </div>
    </div>
  );
};

export default Banner;
