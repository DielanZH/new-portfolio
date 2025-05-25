'use client'
import Landing from "@/app/components/Landing";
import About from "@/app/components/About";
import Stack from "@/app/components/Stack";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contact";

export default function Home() {
  return (
    <>
      <Landing />
      <About />
      <Stack />
      <Projects />
      <Contact />
    </>
  );
}
