const AboutMe = () => {
  return (
    <div className=" max-w-screen-xl mx-auto" id="contact">
      <h3
        className="text-3xl  text-center  py-4 bg-gradient-to-r from-primary-100 font-bold rounded-md"
        style={{ fontFamily: "Josefin Sans, sans-serif" }}
      >
        About Me
      </h3>
      <div
        className="my-4 flex bg-no-repeat bg-cover text-center bg-fixed"
        style={{ backgroundImage: "url(https://i.ibb.co/pPRvN5B/imran.jpg)" }}
      >
        <div className=" p-12 bg-primary-50 bg-opacity-70  text-center backdrop-blur-sm ">
          <h2 className="text-3xl font-bold ">I am Md. Al Imran</h2>
          <h3 className="text-2xl font-bold mb-4">
            From Narayanganj, Bangladesh
          </h3>
          <p
            className="text-xl w-full md:w-2/3 lg:w-1/2 mx-auto text-justify  p-4 "
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            I am a self-taught and passionate MERN stack web developer with a
            strong drive to learn and implement new technologies in real-world
            projects. I'm constantly engaged with the latest trends in the
            programming world, always expanding my skills in web development. I
            specialize in building dynamic websites with intuitive,
            user-friendly interfaces, focusing on client satisfaction. My
            expertise includes ReactJS, NextJS, Express, NodeJS, MongoDB, and
            various other tools and languages. Along with strong technical
            abilities, I possess excellent time and team management skills.
            Currently, I'm pursuing my Bachelor's Degree at a reputed university
            in Bangladesh.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
