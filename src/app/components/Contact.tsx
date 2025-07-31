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

        <span className="inline-block text-5xl font-black bg-clip-text hover:bg-gradient-to-r from-sky-900 to-violet-800 hover:text-transparent transition-transform duration-200 hover:scale-101">
          {emailPlaceholder}
        </span>

      </a>

      <p className='text-md pt-2'>{autor}</p>

    </div>
  )
}

export default Contact