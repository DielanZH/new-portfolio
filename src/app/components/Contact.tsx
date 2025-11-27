import { LanguageContext } from '@/contexts/LanguageContext';
import { translations } from '@/i18n';
import React, { useContext } from 'react'

function Contact() {

  const context = useContext(LanguageContext);
  if (!context) return null;

  const { language } = context;
  const { title, emailPlaceholder, autor } = translations[language].contact;

  return (
    <div id='contact' className="flex flex-col items-center justify-center py-20 pb-36 sm:mt-15 sm:py-10">

      <h1 className='w-fit font-medium pb-3'>{title}</h1>

      <a href={`mailto:${emailPlaceholder}`}>

        <span className="inline-block font-black text-2xl sm:transition-transform sm:duration-200 sm:hover:scale-101
        sm:text-4xl bg-gradient-to-r from-sky-900 to-violet-800 bg-clip-text text-transparent
        lg:text-5xl lg:hover:bg-gradient-to-r lg:from-sky-900 lg:to-violet-800 lg:bg-clip-text lg:hover:text-transparent"
          style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          {emailPlaceholder}
        </span>

      </a>

      <p className='text-md pt-2 sm:pb-4'>{autor}</p>

    </div>
  )
}

export default Contact