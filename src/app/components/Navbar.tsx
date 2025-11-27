'use client'
import React, { useContext, useRef, useState } from 'react'
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

  const upRef = useRef<HTMLButtonElement>(null);

  const [menuOpen, setMenuOpen] = useState(false);

  useGSAP(() => {

    // Animación para el botón "up"

    gsap.fromTo(
      upRef.current,
      { autoAlpha: 0, scale: 0 },
      {
        autoAlpha: 1,
        scale: 1.4,
        duration: 0.8,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: document.body,
          start: "200 top", // aparece después de 200px de scroll
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

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

      {/* SCROLL TO TOP BUTTON */}

      <button ref={upRef} className='fixed bottom-4 right-4 cursor-pointer sm:hidden'
        onClick={() => gsap.to(window, { scrollTo: 0, duration: 1.2 })}>
        <Image src="/svg/up-arrow.svg" alt="Logo" width={36} height={36} />
      </button>

      <nav
        ref={headerRef}
        className="h-auto py-1 sm:py-4"
        style={{
          backgroundImage: 'url(/grid-bg.svg)',
          backgroundSize: '1080px 1080px, cover',
          backdropFilter: 'blur(3000px)',
          backgroundColor: 'rgba(255, 255, 255, 0.1)'
        }}
      >

        <div className="
        relative flex justify-center items-center list-none w-fit h-full
        sm:gap-4 sm:ml-5
        lg:gap-10 lg:mx-auto"
        >

          {links.map((link) => (
            <div
              className={`hidden sm:flex`}
              key={link.href}>
              <a
                href={link.href}
                className="font-inter sm:inline-block hover:underline transition-transform duration-200 hover:scale-102"
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

        {/*MOBILE MENU BUTTON*/}

        <div className='flex ml-3 my-1 sm:hidden'>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className='cursor-pointer h-fit'
          >
            <Image src={menuOpen ? "/svg/close-menu.svg" : "/svg/open-menu.svg"} alt="Menu" width={38} height={38} />
          </button>
        </div>

        {/* MENÚ DESPLEGABLE MOBILE */}

        <div className={`
          sm:hidden flex top-full left-0 w-full 
          backdrop-blur-md transition-all duration-300 overflow-hidden
          ${menuOpen ? "max-h-80 py-4 opacity-100" : "max-h-0 opacity-0"}
        `}>
          <ul className="flex flex-col gap-6 pl-6 pr-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-semibold text-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    setMenuOpen(false);
                    gsap.to(window, { scrollTo: link.href, duration: 1.5 });
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* LANGUAGE TOGGLE BUTTON */}

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
