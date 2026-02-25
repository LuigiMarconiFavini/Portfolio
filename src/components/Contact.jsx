import { translations } from "../i18n/translations";
import { useLanguage } from "../context/LanguageContext";

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language].contact;

  return (
    <section
      id="contact"
      className="bg-gray-950 text-white min-h-[70vh] py-24 px-6"
    >
      <div className="max-w-3xl mx-auto text-center animate-fade-up">
        <h2 className="text-4xl font-bold">
          <span className="text-indigo-500">📩</span>{" "}
          <span className="text-indigo-500">{t.title}</span>
        </h2>

        <p className="text-gray-400 mt-4">
          {t.subtitle}
        </p>

        <p className="text-gray-500 mt-2 text-sm">
          📍 {t.location} · {t.availability}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=luigimarconifavini@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-600 transition"
          >
            {t.email}
          </a>

          <a
            href="https://www.linkedin.com/in/luigi-marconi-favini/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl border border-gray-700 text-gray-300 text-sm hover:text-white hover:border-gray-500 transition"
          >
            {t.linkedin}
          </a>

          <a
            href="https://www.instagram.com/luigim_favini/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl border border-gray-700 text-gray-300 text-sm hover:text-white hover:border-gray-500 transition"
          >
            {t.instagram}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;