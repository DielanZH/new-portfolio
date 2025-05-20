'use client'
import { LanguageContext } from '@/contexts/LanguageContext';
import React, { useContext } from 'react'
import { translations } from "@/i18n";

function Landing() {

    const context = useContext(LanguageContext);

    if (!context) return null;

    const { language } = context;

    const { greeting, name, specialization, description, resumeLink } =
        translations[language].landing;

    return (
        <section id='landing'>

            <div className='items-center justify-center'>

                <h3>{greeting}</h3>
                <h1 className='text-9xl mb-5'>{name}</h1>

                <p className='mb-7'>{specialization}</p>

                <div className='mr-48 mb-7'>
                    {description.split('\n\n').map((el, idx) => (
                        <p key={idx} className='mb-3 max-w-[70vw]'>
                            {el}
                        </p>
                    ))}
                </div>

                <a href='https://drive.google.com/file/d/1ZkWp7v0vFU0n5AX_ujMGY6xY5DhW6MhV/view'
                    target='_blank'
                    className=''>
                    {resumeLink}
                </a>
            </div>

        </section>
    )
}

export default Landing