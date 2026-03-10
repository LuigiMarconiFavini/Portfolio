import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import fotoCV from "../assets/fotoCV.jpg";

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
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">

        {/* FOTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative group"
        >
          <div
            className="absolute inset-0 rounded-2xl bg-gradient-to-r 
                       from-indigo-500 to-purple-500 blur-xl opacity-30
                       group-hover:opacity-60 transition"
          ></div>

          <img
            src={fotoCV}
            alt="Luigi Marconi Favini"
            className="relative w-56 md:w-72 rounded-2xl object-cover
                       shadow-2xl transition duration-500
                       group-hover:scale-105"
          />
        </motion.div>

        {/* TEXTO */}
        <div className="max-w-2xl text-center md:text-left">

          {/* Eyebrow */}
          <p className="text-sm text-gray-500 tracking-wide uppercase">
            {language === "es" ? "Desarrollador Junior" : "Junior Developer"}
          </p>

          {/* Animated title */}
          <h1
            key={animationKey}
            className="mt-3 text-4xl md:text-6xl font-bold leading-tight
                       flex md:block justify-center gap-3 flex-wrap"
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
          <p className="mt-6 text-gray-400 max-w-xl">
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
          <div className="mt-10 flex flex-col sm:flex-row gap-4 md:justify-start justify-center">
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

      </div>
    </section>
  );
};

export default Hero;