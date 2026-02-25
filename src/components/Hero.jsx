import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const [animationKey, setAnimationKey] = useState(0);

  // Repetir animación cada 15 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const titleWords = [
    `${t.hero.hello},`,
    t.hero.iam,
    t.hero.name,
  ];

  return (
    <section
      id="home"
      className="min-h-screen bg-gray-950 text-white flex items-center pt-16"
    >
      <div className="max-w-2xl mx-auto px-6 text-center">
        
        {/* Eyebrow */}
        <p className="text-sm text-gray-500 tracking-wide uppercase">
          {language === "es" ? "Desarrollador Junior" : "Junior Developer"}
        </p>

        {/* Animated title */}
        <h1
          key={animationKey}
          className="mt-3 text-4xl md:text-6xl font-bold leading-tight 
                     flex justify-center gap-3 flex-wrap"
        >
          {titleWords.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 0.4,
                ease: "easeOut",
              }}
              className={word === t.hero.name ? "text-indigo-500" : ""}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Description */}
        <p className="mt-6 text-gray-400 max-w-xl mx-auto">
          {language === "es"
            ? "Desarrollo aplicaciones web enfocadas en resolver problemas reales, combinando buen diseño con soluciones técnicas sólidas."
            : "I build web applications focused on solving real problems, combining good design with solid technical solutions."}
        </p>

        {/* Secondary info */}
        <p className="mt-2 text-sm text-gray-500">
          {language === "es"
            ? "Estudiante de Tecnicatura Universitaria en Programación — UTN Rosario"
            : "University Programming Technician student — UTN Rosario"}
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-indigo-500 text-white text-sm font-medium
                       hover:bg-indigo-600 transition"
          >
            {language === "es" ? "Ver proyectos" : "View projects"}
          </a>

          <a
            href="/Luigi-Marconi-Favini-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl border border-gray-700 text-gray-300 text-sm
                       hover:text-white hover:border-gray-500 transition"
          >
            {language === "es" ? "Descargar CV 📄" : "Download CV 📄"}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;