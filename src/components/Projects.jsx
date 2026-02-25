import { projects } from "../data/projects";
import { translations } from "../i18n/translations";
import { useLanguage } from "../context/LanguageContext";

const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language].projects;

  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-950 text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center">
          💡 <span className="text-indigo-500">{t.title}</span>
        </h2>

        <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
          {t.subtitle}
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden
                         hover:border-indigo-500/50 transition-all duration-300"
            >
              {/* Image */}
              {project.image && (
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-44 w-full object-cover
                               group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold group-hover:text-indigo-400 transition">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-3 text-sm">
                  {project.description[language]}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-6 opacity-80 group-hover:opacity-100 transition">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-indigo-400 hover:text-indigo-300"
                  >
                    {t.github} →
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-300 hover:text-white"
                    >
                      {t.demo} →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;