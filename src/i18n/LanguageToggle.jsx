import { useLanguage } from "../context/LanguageContext";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();
  const isSpanish = language === "es";

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-sm text-gray-300 border border-gray-700 px-3 py-1 rounded-lg hover:text-white hover:border-gray-500 transition"
    >
      <img
        src={isSpanish ? "/argentina.jpeg" : "/estados-unidos.jpeg"}
        alt={isSpanish ? "Español" : "English"}
        className="w-4 h-4 rounded-sm"
      />
      <span>{isSpanish ? "EN" : "ES"}</span>
    </button>
  );
};

export default LanguageToggle;
