import { LanguageContext } from '@/contexts/LanguageContext';
import React, { useContext } from 'react';
import { translations } from "@/i18n";
import Image from 'next/image';

function Projects() {

  const context = useContext(LanguageContext);
  if (!context) return null;

  const { language } = context;
  const { title, subtitle, projects } =
    translations[language].projects;

  return (
    <section>

      <div className="">

        <h2 className="text-5xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-gray-700">{subtitle}</p>


        {projects.map((project, idx) => (
          <div key={idx} className={`mb-8 flex gap-5 ${idx % 2 === 1 ? 'flex-row-reverse' : ''
            }`}>

            {project.image && (
              <div className="flex-shrink-0">
                <Image src={project.image} alt={project.name} width={600} height={600} className="mb-2" />
              </div>
            )}

            <div className={`flex-1 ${idx % 2 === 1 ? 'text-right' : 'text-left'}`}>

              <h3 className="text-xl font-bold">{project.name}</h3>

              <p className="mb-2 bg-red-600">{project.description}</p>

              <div className={`flex flex-wrap gap-2 mb-2 ${idx % 2 === 1 ? 'justify-end' : 'justify-start'}`}>
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-gray-200 px-2 py-1 rounded text-xs">{tech}</span>
                ))}
              </div>

              <div className={`flex gap-4 ${idx % 2 === 1 ? 'justify-end' : 'justify-start'}`}>

                {project.deploy && (
                  <a href={project.deploy} target="_blank" rel="noopener noreferrer" className="bg-">
                    <Image
                      src="/svg/external-link.svg"
                      alt="Deploy"
                      width={28}
                      height={28}
                      className="inline-block mt-0.5"
                    />
                  </a>
                )}

                <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-[]">
                  <Image
                    src="/svg/github.svg"
                    alt="GitHub"
                    width={30}
                    height={30}
                    className="inline-block"
                  />
                </a>

              </div>

            </div>

          </div>
        ))}
      </div>

    </section>
  )
}

export default Projects