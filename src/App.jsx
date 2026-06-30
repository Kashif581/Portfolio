import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Achievements from "./components/achievements/Achievements";
import Education from "./components/education/Education";
import GithubStats from "./components/github/GithubStats";
import Contact from "./components/contact/Contact";
import Footer from "./components/layout/Footer";
import SectionDivider from "./components/layout/SectionDivider";



export default function App() {
  return (
    <>
      <Navbar />

      <Hero />
      <SectionDivider />

      <Experience />
      <SectionDivider />

      <Projects />
      <SectionDivider />

      <Skills />
      <SectionDivider />

      <Achievements />
      <SectionDivider />

      <Education />
      <SectionDivider />

      <GithubStats />
      <SectionDivider />

      <Contact />
      <SectionDivider />

      <Footer />
    </>
  );
}