import { LanguageContext } from '@/contexts/LanguageContext';
import { translations } from '@/i18n';
import Image from 'next/image';
import React, { useContext } from 'react'

function Stack() {
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
    <section>
      <h1 className='text-5xl w-fit font-black'>{stack.title}</h1>

      <p className='w-fit py-5'>{stack.technologies}</p>

      {sections.map(({ title, items }) => (

        <div key={title} className=" py-10 pr-10 grid grid-cols-[1fr_2fr]">

          <h3 className='text-5xl w-fit font-bold'>{title}</h3>

          <ul className="flex flex-wrap gap-4">
            {items.map((tech) => (
              <li key={tech.name} className="flex items-center gap-2 p-2 w-1/4">

                <Image src={tech.svg} alt={tech.name} width={45} height={45} />

                <span className='text-3xl font-semibold'>{tech.name}</span>

              </li>
            ))}
          </ul>

        </div>
      ))}

    </section>
  )
}

export default Stack