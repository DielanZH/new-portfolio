import { LanguageContext } from '@/contexts/LanguageContext';
import { translations } from '@/i18n';
import React, { useContext } from 'react'

function Contact() {

  const context = useContext(LanguageContext);
  if (!context) return null;

  const { language } = context;
  const { title, emailPlaceholder, autor } = translations[language].contact;

  return (
    <div className="flex flex-col items-center justify-center mt-15 py-10">

      <h1 className='w-fit font-medium pb-3'>{title}</h1>

      <a className='text-5xl font-black pb-3' href={`mailto:${emailPlaceholder}`}>{emailPlaceholder}</a>

      <p className='text-md'>{autor}</p>
  
    </div>
  )
}

export default Contact