import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import LanguageToggle from "../i18n/LanguageToggle";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].navbar;

  const links = [
    { name: t.home, href: "#home" },
    { name: t.about, href: "#about" },
    { name: t.projects, href: "#projects" },
    { name: t.contact, href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur border-b border-gray-800">
      <div className="relative max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <a
          href="#home"
          className="text-lg font-semibold text-white tracking-wide"
        >
          Luigi Marconi Favini
        </a>

        {/* Desktop nav centrado */}
        <nav className="hidden md:flex gap-8 absolute left-1/2 -translate-x-1/2">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-gray-300 hover:text-white transition"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <LanguageToggle />
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-300"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-gray-950 border-t border-gray-800">
          <nav className="flex flex-col px-6 py-4 gap-4">
            <LanguageToggle />

            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-gray-300 hover:text-white transition"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;