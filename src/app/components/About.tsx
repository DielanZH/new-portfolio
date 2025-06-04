'use client'
import { LanguageContext } from '@/contexts/LanguageContext';
import { translations } from '@/i18n';

import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import React, { useContext, useRef } from 'react';

function About() {

  const containerRef = useRef<HTMLDivElement>(null);


  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      containerRef.current,
      { y: -5, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 90%',
          end: 'bottom 50%',
          scrub: 0.02,
        },
      }
    );
  });

  useGSAP(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'bottom 55%',
        end: 'bottom 10%',
        scrub: 0.02,
      },
    });

    tl.fromTo(
      containerRef.current,
      { y: 0 },
      { opacity: 0, stagger: 0.02 },
    );

  });

  const context = useContext(LanguageContext);

  if (!context) return null;

  const { language } = context;
  const about = translations[language].about;

  return (
    <section className='flex flex-col h-screen'>
      <div ref={containerRef}>
        <h1 className='text-5xl mb-5 font-black'>
          {about.title}
        </h1>

        <div className='tracking-wide mb-3 max-w-[75vw] font-semibold'>
          {about.description.split('\n\n').map((el, idx) => (
            <p key={idx}>
              {el}
            </p>
          ))}
        </div>

        <h3 className='text-3xl mb-5 font-bold'>
          {about.whyTitle}
        </h3>

        <p className='tracking-wide mb-3 max-w-[75vw] font-semibold'>
          {about.whyDescription}
        </p>
      </div>
    </section>
  )
}

export default About