import { LanguageContext } from '@/contexts/LanguageContext';
import { translations } from '@/i18n';
import React, { useContext } from 'react'

function Contact() {

  const context = useContext(LanguageContext);
  if (!context) return null;

  const { language } = context;
  const { title, emailPlaceholder, autor } = translations[language].contact;

  return (
    <div id='contact' className="flex flex-col items-center justify-center mt-15 py-10">

      <h1 className='w-fit font-medium pb-3'>{title}</h1>

      <a href={`mailto:${emailPlaceholder}`}>

        <span className="inline-block font-black transition-transform duration-200 hover:scale-101
        lg:text-5xl lg:hover:bg-gradient-to-r lg:from-sky-900 lg:to-violet-800 lg:bg-clip-text lg:hover:text-transparent
        sm:text-4xl sm:bg-gradient-to-r sm:from-sky-900 sm:to-violet-800 sm:bg-clip-text sm:text-transparent"
          style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          {emailPlaceholder}
        </span>

      </a>

      <p className='text-md pt-2 sm:pb-4'>{autor}</p>

    </div>
  )
}

export default Contact