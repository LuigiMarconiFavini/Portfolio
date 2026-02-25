import { Github, ExternalLink } from "lucide-react";

const ProjectCard = ({ title, description, tech, github, demo }) => {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-indigo-500 transition">

        {/* imagen */}
        <img
        src={project.image}
        alt={project.title}
        className="rounded-xl mb-4 object-cover h-40 w-full"
        />

      
      {/* Title */}
      <h3 className="text-xl font-semibold text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-gray-400 text-sm">
        {description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mt-4">
        {tech.map((item) => (
          <span
            key={item}
            className="text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-300"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4 mt-6">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
          >
            <Github size={18} />
            GitHub
          </a>
        )}

        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
          >
            <ExternalLink size={18} />
            Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
