import AboutMe from "@/src/components/homePage/about";
import Banner from "@/src/components/homePage/banner";
import Education from "@/src/components/homePage/education";
import Experience from "@/src/components/homePage/experience/experience";
import Projects from "@/src/components/homePage/project/project";
import Skills from "@/src/components/homePage/skill/skills";
import Contact from "@/src/components/homePage/contact";
import Certificates from "@/src/components/homePage/certificates";
import BlogSection from "@/src/components/homePage/blog/blog";

export default function Home() {
  return (
    <>
      <Banner />
      <AboutMe />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Certificates />
      <BlogSection />
    </>
  );
}
