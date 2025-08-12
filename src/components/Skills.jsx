// src/components/Skills.jsx
import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaFigma,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

const RestApiIcon = () => (
  <span className="text-sm font-bold tracking-tighter">REST</span>
);

const skills = [
  { name: "HTML", icon: <FaHtml5 size={18} /> },
  { name: "CSS", icon: <FaCss3Alt size={18} /> },
  { name: "JavaScript", icon: <IoLogoJavascript size={18} /> },
  { name: "Python", icon: <FaPython size={18} /> },
  { name: "React", icon: <FaReact size={18} /> },
  { name: "Node.js", icon: <FaNodeJs size={18} /> },
  { name: "Express.js", icon: <SiExpress size={18} /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={18} /> },
  { name: "MongoDB", icon: <SiMongodb size={18} /> },
  { name: "Prisma", icon: <SiPrisma size={18} /> },
  { name: "Git", icon: <FaGitAlt size={18} /> },
  { name: "GitHub", icon: <FaGithub size={18} /> },
  { name: "Docker", icon: <FaDocker size={18} /> },
  { name: "TypeScript", icon: <SiTypescript size={18} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={18} /> },
  { name: "Figma", icon: <FaFigma size={18} /> },
  { name: "Vite", icon: <SiVite size={18} /> },
  { name: "REST API", icon: <RestApiIcon /> },
];

const Skills = () => {
  return (
    <section id="skills" className="px-4 bg-black text-white font-mono">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold underline underline-offset-8 decoration-double mb-6 sm:mb-8">
          Skills
        </h2>
        {/* container for the badges */}
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group flex items-center gap-2 bg-[#0d0d0d] border border-neutral-800 rounded-md px-3 py-1.5 transition-colors duration-300 hover:bg-neutral-700/50 cursor-pointer"
            >
              <div className="text-neutral-400 transition-colors duration-300 group-hover:text-white">
                {skill.icon}
              </div>
              <p className="text-xs font-semibold text-neutral-300">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
