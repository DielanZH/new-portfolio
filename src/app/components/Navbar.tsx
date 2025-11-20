'use client'
import React, { useContext, useRef } from 'react'
import { translations } from "@/i18n";
import { LanguageContext } from '@/contexts/LanguageContext';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Navbar() {

  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
  const headerRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {

    const showAnim = gsap.from(headerRef.current, {
      yPercent: -100,
      paused: true,
      duration: 0.5
    }).progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        if (self.direction === -1) {
          showAnim.play();
        } else {
          showAnim.reverse();
        }
      }
    });

  }, []);

  const context = useContext(LanguageContext);
  if (!context) return null;

  const { language, toggleLanguage } = context;
  const navbar = translations[language].navbar;


  const links = [
    { href: '#home', label: navbar.home },
    { href: '#about', label: navbar.about },
    { href: '#stack', label: navbar.skills },
    { href: '#projects', label: navbar.projects },
    { href: '#contact', label: navbar.contact }
  ];

  return (
    <header className='fixed top-0 left-0 w-full z-50'>
      <nav
        ref={headerRef}
        className="h-auto py-4"
        style={{
          backgroundImage: 'url(/grid-bg.svg)',
          backgroundSize: '1080px 1080px, cover',
          backdropFilter: 'blur(2000px)',
          backgroundColor: 'rgba(255, 255, 255, 0.1)'
        }}
      >

        <div className="relative flex justify-center items-center list-none w-fit h-full
                sm:gap-4 sm:ml-5
                lg:gap-10 lg:mx-auto"
        >

          {links.map((link) => (
            <div key={link.href}>
              <a
                href={link.href}
                className="inline-block font-inter hover:underline transition-transform duration-200 hover:scale-102"
                onClick={(e) => {
                  e.preventDefault();
                  gsap.to(window, {
                    scrollTo: link.href,
                    duration: 1.5
                  });
                }}
              >
                <span className="font-semibold tracking-widest text-md">
                  {link.label}
                </span>
              </a>
            </div>
          ))}

        </div>

        <div className='absolute right-4 top-2 transition-transform duration-200 hover:scale-105'>
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label="Toggle language"
            className='cursor-pointer h-fit'
          >
            {language === 'es' ?
              <Image src="/svg/SPAIN.svg" alt="English" width={38} height={38} /> :
              <Image src="/svg/USA.svg" alt="Español" width={38} height={38} />}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
