'use client'
import { LanguageContext } from '@/contexts/LanguageContext';
import { translations } from '@/i18n';
import React, { useContext } from 'react';

function About() {

  const context = useContext(LanguageContext);

  if (!context) return null;

  const { language } = context;
  const about = translations[language].about;

  return (
    <section className='flex flex-col h-screen'>
      <div>
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