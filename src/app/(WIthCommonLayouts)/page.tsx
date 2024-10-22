import AboutMe from "@/src/components/homePage/about";
import Banner from "@/src/components/homePage/banner";
import Education from "@/src/components/homePage/education";
import Experience from "@/src/components/homePage/experience";
import Skills from "@/src/components/homePage/skills";

export default function Home() {
  return (
    <>
      <Banner />
      <AboutMe />
      <Experience />
      <Education />
      <Skills />
    </>
  );
}
