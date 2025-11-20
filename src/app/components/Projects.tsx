import React, { useRef, useContext } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { LanguageContext } from '@/contexts/LanguageContext';
import { translations } from "@/i18n";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Projects() {

  const context = useContext(LanguageContext);

  const language = context?.language || 'es';
  const { title, subtitle, projects } = translations[language].projects;

  const projectsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {

    projectsRef.current.forEach((el) => {
      if (el) {
        gsap.from(el, {
          opacity: 0,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            end: 'bottom 45%',
            toggleActions: 'play reverse play reverse',
          },
        });
      }
    });
  }, {
    dependencies: [language],
    revertOnUpdate: true,
  });

  return (
    <section id='projects'>

      <div className="sm:w-full lg:w-[87vw]">

        <h2 className="text-5xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-gray-700 mb-5">{subtitle}</p>

        {projects.map((project, idx) => (
          <div
            key={idx}
            ref={el => { projectsRef.current[idx] = el }}
            className={`sm:grid lg:flex mb-8 gap-5 ${idx % 2 === 1 ? 'flex-row-reverse' : 'flex-row'}`}
          >
            {/* Imagen */}
            {project.image && (
              <div className="sm:grid lg:flex-shrink-0">
                <Image src={project.image} alt={project.name} width={600} height={400} style={{ height: "auto" }} className="" />
              </div>
            )}

            {/* Info */}
            <div className={`sm:grid lg:flex-1 ${idx % 2 === 1 ? 'text-right' : 'text-left'}`}>

              <h3 className="text-3xl font-extrabold mb-2">{project.name}</h3>

              <p className='sm:font-semibold lg:font-normal'>{project.description}</p>

              <div className={`flex flex-wrap gap-2 py-4 mb-1 ${idx % 2 === 1 ? 'justify-end' : 'justify-start'}`}>
                {project.technologies.map((tech) => (
                  <span key={tech} style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} className="bg-gradient-to-r from-sky-900 to-violet-800 bg-clip-text text-transparent px-1 rounded sm:text-base sm:font-semibold lg:text-base lg:font-xs">{tech}</span>
                ))}
              </div>

              <div className={`flex gap-4 ${idx % 2 === 1 ? 'justify-end' : 'justify-start'}`}>
                {project.deploy && (
                  <a href={project.deploy} target="_blank" rel="noopener noreferrer">
                    <Image src="/svg/external-link.svg" alt="Deploy" width={28} height={28} style={{ height: "auto" }} className="inline-block mt-0.5 transition-transform duration-200 hover:scale-102" />
                  </a>
                )}
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Image src="/svg/github.svg" alt="GitHub" width={30} height={30} className="inline-block transition-transform duration-200 hover:scale-102" />
                </a>
              </div>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Projects;