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
    <header>
      <nav className="h-auto py-4">
        <div className="flex justify-center items-center gap-10 list-none">
          {links.map((link) => (
            <div key={link.href}>
              <a
                href={link.href}
                className="font-inter tracking-wide text-sm hover:underline"
              >
                {link.label}
              </a>
            </div>
          ))}

          <div>
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label="Toggle language"
            >
              {language}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
