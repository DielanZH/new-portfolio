'use client'
import Landing from "@/app/components/Landing";
import About from "@/app/components/About";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contact";

export default function Home() {
  return (
    <>
      <Landing />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
