'use client'
import { LanguageContext } from '@/contexts/LanguageContext';
import React, { useContext, useRef } from 'react'
import { translations } from "@/i18n";
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Landing() {
    const context = useContext(LanguageContext);
    const containerRef = useRef<HTMLDivElement>(null);

    gsap.registerPlugin(SplitText, useGSAP, ScrollTrigger);

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
                    },

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
    });

    if (!context) return null;

    const { language } = context;
    const { greeting, name, specialization, description, resumeLink } =
        translations[language].landing;

    return (
        <section>
            <div ref={containerRef} className='opacity-0 items-center justify-center'>
                <h3 className='font-semibold'>{greeting}</h3>
                <h1 className='text-9xl mb-5 font-black'>{name}</h1>
                <p className='mb-7 font-semibold'>{specialization}</p>
                <div className='mr-48 mb-7'>
                    {description.split('\n\n').map((el, idx) => (
                        <p key={idx}
                            className='tracking-wide mb-3 max-w-[75vw] font-semibold'>
                            {el}
                        </p>
                    ))}
                </div>
                <a
                    href='https://drive.google.com/file/d/1ZkWp7v0vFU0n5AX_ujMGY6xY5DhW6MhV/view'
                    target='_blank'
                    className='font-semibold'
                >
                    {resumeLink}
                </a>
            </div>
        </section>
    )
}

export default Landing