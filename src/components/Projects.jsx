import React from "react";
import { FaGithub, FaWrench } from "react-icons/fa";
import dexcode from "../assets/dexcode.png";
import KryptoBash from "../assets/kryptobash.png";
import portfolio from "../assets/portfolio.png";
// You can replace this with your own project data
const projectsData = [
  {
    title: "DexCode",
    description:
      "An online coding platform like LeetCode, allowing users to solve programming problems and test their solutions against various test cases.",
    imageUrl: dexcode,
    githubUrl: "https://github.com/heetjain17/DexCode",
    status: "In Progress",
  },
  {
    title: "KryptoBash",
    description:
      "A web application to find, compare, and analyze real-time data for various cryptocurrencies, helping users make informed decisions.",
    imageUrl: KryptoBash,
    githubUrl: "https://github.com/heetjain17/krypto-bash",
  },
  {
    title: "Personal Portfolio",
    description:
      "This responsive portfolio website, built with React and Tailwind CSS, showcases my skills, projects, and professional journey.",
    imageUrl: portfolio,
    githubUrl: "#",
  },
  {
    title: "Coming soon",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae necessitatibus dicta quos laboriosam quo.",
    imageUrl: "https://placehold.co/600x400/0d0d0d/FFFFFF?text=Coming+soon...",
    githubUrl: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="px-4 bg-black text-white font-mono">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold underline underline-offset-8 decoration-double mb-12">
          Projects
        </h2>
        {/* Grid container for cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-[#0d0d0d] border border-neutral-800 rounded-lg overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-2"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 sm:p-6 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl flex  gap-3 font-bold mb-2">
                  {project.title}
                  {/* badges for the project which are work in progress */}
                  {project.status === "In Progress" && (
                    <span className="flex items-center gap-1.5 bg-yellow-900/50 text-yellow-400 text-xs font-semibold px-1.5 py-0.5 rounded-full border border-yellow-700">
                      <FaWrench size={12} />
                      Work In Progress
                    </span>
                  )}
                </h3>
                <p className="text-neutral-400 text-sm flex-grow mb-4">
                  {project.description}
                </p>
                {/* github button */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto self-start inline-flex items-center gap-2 px-4 py-2 bg-neutral-800/50 border border-neutral-700 rounded-md text-sm font-semibold hover:bg-neutral-700/50 transition-colors"
                >
                  <FaGithub />
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
