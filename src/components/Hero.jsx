import pfp from "../assets/batman.jpg";
import { motion } from "framer-motion";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
} from "@tabler/icons-react";

const linkedIn_url = "https://www.linkedin.com/in/heet-jain-6895b0288";
const github_url = "https://github.com/heetjain17";
const x_url = "https://x.com/_heetjain_";

const Hero = () => {
  return (
    <section id="home" className="flex justify-center p-4 bg-black font-mono">
      {/* The main card container */}
      <div className="relative w-full max-w-2xl border border-neutral-500 rounded-2xl shadow-lg text-white p-6 sm:p-12">
        {/* Decorative corner brackets */}
        <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-neutral-500 rounded-tl-lg"></div>
        <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-neutral-500 rounded-tr-lg"></div>
        <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-neutral-500 rounded-bl-lg"></div>
        <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-neutral-500 rounded-br-lg"></div>

        {/* Socials link */}
        <div className="hidden sm:flex absolute top-6 right-6 sm:top-8 sm:right-8 items-center gap-3 sm:gap-4">
          <a href={linkedIn_url} aria-label="LinkedIn Profile" target="_blank">
            <IconBrandLinkedin className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 hover:text-white transition-colors" />
          </a>
          <a href={github_url} aria-label="GitHub Profile" target="_blank">
            <IconBrandGithub className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 hover:text-white transition-colors" />
          </a>
          <a href={x_url} aria-label="X Profile" target="_blank">
            <IconBrandX className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 hover:text-white transition-colors" />
          </a>
        </div>

        {/* Main content of the card */}
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
          {/* Profile Picture */}
          <div className="relative shrink-0">
            {/* The animated border element */}
            <motion.div
              className="absolute -inset-0.5 rounded-full"
              style={{
                background:
                  "conic-gradient(from 180deg at 50% 50%, #6b0000, #b91c1c, transparent)",
              }}
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "linear",
              }}
            />
            {/* image */}
            <img
              src={pfp}
              alt="Profile"
              className="relative w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-full "
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/128x128/0d0d0d/FFFFFF?text=404";
              }}
            />
          </div>

          {/* info section */}
          <div className="flex flex-col gap-2 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-4">
              <h1 className="text-3xl sm:text-4xl font-bold">Heet Jain</h1>
              <span className="bg-green-900/50 text-green-400 text-xs font-semibold px-3 py-1 rounded-full border border-green-700 transition-colors hover:bg-green-900/75 hover:border-green-500 cursor-pointer">
                ● Debugging
              </span>
            </div>
            <p className="text-base sm:text-md text-gray-400">
              console.log Enthusiast
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-400 hover:text-white transition-colors">
              <IconMail className="w-4 h-4" />
              <a href="mailto:heetopt@gmail.com">heetopt@gmail.com</a>
            </div>
          </div>
        </div>

        {/* Bottom text box */}
        <div className="mt-8 p-4 border border-dashed border-neutral-500 rounded-lg bg-black/50">
          <p className="text-sm sm:text-base text-gray-300">
            Full-stack developer driven by curiosity, always exploring new
            technologies and eager to learn and grow.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
