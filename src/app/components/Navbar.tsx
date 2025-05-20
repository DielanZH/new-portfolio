'use client'
import React, { useContext } from 'react'
import { translations } from "@/i18n";
import { LanguageContext } from '@/contexts/LanguageContext';

function Navbar() {

  const context = useContext(LanguageContext);

  if (!context) return null;

  const { language, toggleLanguage } = context;

  const navbar = translations[language].navbar;

  const links = [
    { href: '#home', label: navbar.home },
    { href: '#about', label: navbar.about },
    { href: '#skills', label: navbar.skills },
    { href: '#projects', label: navbar.projects },
    { href: '#contact', label: navbar.contact }
  ];

  return (
    <nav>
      <div className='flex justify-center list-none gap-10'>

        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="text-sm aspect-square w-16 hover:underline">
              {link.label}
            </a>
          </li>
        ))}

        <button onClick={toggleLanguage}>
          {language}
        </button>

      </div>
      

    </nav>
  )
}

export default Navbar