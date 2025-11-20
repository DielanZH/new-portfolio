import { LanguageContext } from '@/contexts/LanguageContext';
import { translations } from '@/i18n';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import React, { useContext, useRef } from 'react'

function Stack() {

  gsap.registerPlugin(useGSAP, ScrollTrigger);

  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {

    const slideUpEl = sectionRef.current?.querySelectorAll('slide-up');

    if (slideUpEl?.length) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'bottom 80%',
        scrub: 0.5,
      },
    });

    tl.from('.slide-up', {
      opacity: 0,
      y: 10,
      ease: 'none',
      stagger: 0.4,
    });
  },
    { scope: sectionRef }
  );

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'bottom 50%',
        end: 'bottom 10%',
        scrub: 0.05,
      },
    });

    tl.to(sectionRef.current, {
      y: -100,
      opacity: 0,
    }
    );

  },
    { scope: sectionRef }
  );

  const context = useContext(LanguageContext);

  if (!context) return null;

  const { language } = context;
  const { stack } = translations[language];

  const sections = [
    { title: stack.frontend, items: stack.frontendItems },
    { title: stack.backend, items: stack.backendItems },
    { title: stack.databases, items: stack.databasesItems },
    { title: stack.tools, items: stack.toolsItems },
  ];




  return (
    <section ref={sectionRef} id='stack' >
      <h1 className='slide-up text-5xl w-fit font-black'>{stack.title}</h1>

      <p className='slide-up w-fit sm:pt-5 lg:py-5'>{stack.technologies}</p>

      {sections.map(({ title, items }) => (

        <div key={title} className="sm:py-5 lg:py-10 pr-10 grid lg:grid-cols-[1fr_2fr] sm:grid-cols-1">

          <h3 className='slide-up sm:text-4xl lg:text-5xl w-fit font-bold sm:mb-2'>{title}</h3>

          <ul className="flex flex-wrap lg:gap-2 sm:gap-x-12 sm:gap-y-4">
            {items.map((tech) => (
              <li key={tech.name || tech.svg} className="slide-up flex items-center gap-2 sm:gap-3 p-2 w-1/4">


                  <Image className={!tech.name ? 'w-full lg:max-h-10 object-contain' : ''}
                    src={tech.svg}
                    alt={tech.name || 'tech'}
                    height={37}
                    width={37}
                  />


                <span className='sm:text-2xl lg:text-3xl font-semibold'>{tech.name}</span>

              </li>
            ))}
          </ul>

        </div>
      ))}

    </section>
  )
}

export default Stack