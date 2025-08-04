'use client'
import { LanguageContext } from '@/contexts/LanguageContext';
import React, { useContext, useRef } from 'react'
import { translations } from "@/i18n";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/all';

function Landing() {
    const context = useContext(LanguageContext);
    const containerRef = useRef<HTMLDivElement>(null);

    const language = context?.language || 'es';
    const { greeting, name, specialization, description, resumeLink } =
        translations[language].landing;

    gsap.registerPlugin(useGSAP, ScrollTrigger);
    gsap.registerPlugin(SplitText)

    useGSAP(() => {
        gsap.set(containerRef.current, { opacity: 1 });

        SplitText.create(containerRef.current, {
            type: 'lines',
            linesClass: 'line',
            onSplit: (self) => {
                gsap.from(self.lines, {
                    y: 50,
                    opacity: 0,
                    stagger: 0.3,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 70%",
                        end: "bottom 35%",
                    }
                });
            }
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'bottom 55%',
                end: 'bottom 10%',
                scrub: 2,
            },
        });

        tl.fromTo(
            containerRef.current,
            { y: 0 },
            { y: -50, opacity: 0, stagger: 0.05 },
        );

    }, {
        dependencies: [language],
        revertOnUpdate: true,
    });

    return (
        <section className='mt-10' id='landing'>
            <div ref={containerRef} key={language} className='opacity-0 items-center justify-center'>
                <p className='font-semibold w-fit'>{greeting}</p>
                <h1 className='text-9xl mb-5 font-black'>{name}</h1>
                <p className='mb-7 font-semibold'>{specialization}</p>
                <div className='w-[75vw] mb-7'>
                    {description.split('\n\n').map((el, idx) => (
                        <p key={idx}
                            className='tracking-wider font-semibold'>
                            {el}
                        </p>
                    ))}
                </div>

                <a
                    href={language === 'es' ? `https://drive.google.com/file/d/1YWAiRX2PPYWi3b3rZQBm_aiG39o5EYGw/view?usp=sharing` : `https://drive.google.com/file/d/1VfC0gngFW4bKccL9Crcq9jnJnv1tXiCH/view?usp=sharing`}
                    target='_blank'
                    className='font-semibold'
                >
                    <span className="inline-block hover:bg-gradient-to-r from-sky-900 to-violet-800 bg-clip-text hover:text-transparent transition-transform duration-200 hover:scale-102">
                        {resumeLink}
                    </span>
                </a>

            </div>
        </section>
    )
}

export default Landing