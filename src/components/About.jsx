import { translations } from "../i18n/translations";
import { useLanguage } from "../context/LanguageContext";

const About = () => {
  const { language } = useLanguage(); // 👈 CLAVE
  const t = translations[language].about;

  return (
    <section
      id="about"
      className="min-h-screen bg-gray-950 text-white flex items-center pt-16 px-6"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          {t.title} <span className="text-indigo-500">{t.highlight}</span>
        </h2>

        <p className="text-gray-400 mt-6 leading-relaxed">
          {t.paragraph1}
        </p>

        <p className="text-gray-400 mt-4 leading-relaxed">
          {t.paragraph2}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {t.skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 text-sm rounded-full bg-gray-900 border border-gray-800 text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
