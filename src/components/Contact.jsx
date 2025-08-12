// src/components/Contact.jsx
import React from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";

const linkedIn_url = "https://www.linkedin.com/in/heet-jain-6895b0288";
const github_url = "https://github.com/heetjain17";
const x_url = "https://x.com/_heetjain_";

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 px-4 text-center font-mono">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Get In Touch
        </h2>
        <p className="text-neutral-400 mb-8 leading-relaxed">
          My inbox is always open. Whether you have a question, a project idea,
          or just want to say hello, I'll get back to you!
        </p>
        <a
          href="mailto:heetopt@gmail.com"
          className="inline-block bg-gradient-to-r from-neutral-800 to-neutral-700 text-white font-semibold px-6 py-3 rounded-lg border border-neutral-700 hover:from-neutral-700 hover:to-neutral-600 transition-all duration-300"
        >
          Say Hello
        </a>
      </div>

      {/* socials */}
      <div className="mt-16 sm:mt-20 flex justify-center gap-6">
        <a
          href={linkedIn_url}
          aria-label="LinkedIn Profile"
          className="text-neutral-500 hover:text-white transition-colors"
          target="_blank"
        >
          <IconBrandLinkedin size={24} />
        </a>
        <a
          href={github_url}
          aria-label="GitHub Profile"
          className="text-neutral-500 hover:text-white transition-colors"
          target="_blank"
        >
          <IconBrandGithub size={24} />
        </a>
        <a
          href={x_url}
          aria-label="X Profile"
          className="text-neutral-500 hover:text-white transition-colors"
          target="_blank"
        >
          <IconBrandX size={24} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
