
/* eslint-disable @typescript-eslint/no-explicit-any */


import Image from "next/image"
import Link from "next/link"
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"

import logo from "@/public/images/logo.png"
import profile_pic from "@/public/images/profile_pic.png"
import adefinance from "@/public/images/adefinance.png"
import aice_ui_design from "@/public/images/aice_ui_design.png"
import cbt_postman from "@/public/images/cbt_postman.png"

export default function Page() {
  return (
    <main className="px-3 md:px-16 py-8 max-w-7xl mx-auto">
      {/* ================= NAVBAR ================= */}
      <nav className="flex justify-between items-center">
        <Image src={logo} alt="Abdullah Adesina Logo" className="w-28 h-auto" />

        <div className="md:space-x-6 md:text-sm text-xs font-medium space-x-2 ">
          <Link href="#about" className="hover:text-gray-600">About</Link>
          <Link href="#projects" className="hover:text-gray-600">Projects</Link>
          <a href="https://drive.google.com/file/d/11NgF3WAqXFhk6hOW4p1RepTgsOUScvdT/view?usp=drive_link" target="_blank" className="hover:text-gray-600">Resume</a>
          <Link href="#contact" className="hover:text-gray-600">Contact</Link>
        </div>
      </nav>

      {/* ================= HERO / ABOUT ================= */}
      <section
        id="about"
        className="flex flex-col md:flex-row items-center gap-10 mt-24"
      >
        <Image
          src={profile_pic}
          alt="Abdullah Adesina"
          className="w-56 h-auto rounded-2xl"
          priority
        />

        <div className="max-w-xl space-y-4">
          <p className="text-sm font-semibold text-gray-500 uppercase">
            Fullstack and Mobile App Developer
          </p>

          <h1 className="text-3xl font-bold">
            Hi, I’m Adesina Olagunju
          </h1>

          <p className="text-gray-700 leading-relaxed">
            I’m a Full Stack & Mobile Developer with proven experience
            designing and deploying scalable web and mobile
            applications using Python, Django, Express.js, PHP Laravel, React,
            Next.js, and React Native. Adept at building responsive
            user interfaces, robust backend systems, and cloud
            integrations. Strong problem-solver with a collaborative
            mindset, eager to drive impactful digital solutions.
          </p>

          <p className="text-gray-700 leading-relaxed">
            I enjoy building impactful digital solutions that solve real-world
            problems—especially across Africa.
          </p>

          <div className="flex gap-4 pt-4">
            <a
              href="https://drive.google.com/file/d/11NgF3WAqXFhk6hOW4p1RepTgsOUScvdT/view?usp=drive_link"
              className="px-5 py-2 rounded-lg bg-black text-white text-sm font-medium hover:bg-gray-800 transition"
            >
              View Resume
            </a>

            <Link
              href="#contact"
              className="px-5 py-2 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-100 transition"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="mt-32">
        <h2 className="text-3xl font-bold">Projects</h2>
        <p className="text-gray-600 mt-2 max-w-2xl">
          Selected projects demonstrating my experience in fullstack
          development, system design, and UI/UX.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {/* ===== Project Card ===== */}
          <ProjectCard
            image={adefinance}
            title="AdeFinance"
            description="A personal finance management web app that helps users track income, expenses, and visualize financial data with interactive charts."
            stack={["Flask", "Python", "Chart.js", "SQLite", "HTML/CSS"]}
            live="https://adefinance.onrender.com/"
            github="https://github.com/daadesina/AdeFinance"
          />

          <ProjectCard
            image={aice_ui_design}
            title="AiCE – Learning Community UI Design"
            description="A modern UI/UX design for a software engineering learning community, focused on collaboration and structured learning."
            stack={["Figma"]}
            live="https://www.figma.com/design/ZRhxrKPrqrdpat9bMHXmus/AiCE"
          />

          <ProjectCard
            image={cbt_postman}
            title="CBT API"
            description="A RESTful API for computer-based examinations including authentication, timed tests, and result evaluation."
            stack={["Laravel", "PHP", "Postman"]}
            github="https://github.com/daadesina/AdeCBT.git"
          />
        </div>
      </section>
      
      {/* ================= CONTACT ================= */}
      <div className="flex justify-center">
        <section
          id="contact"
          className="mt-32 mb-20 max-w-3xl"
        >
          <h2 className="text-3xl font-bold text-center">Contact Me</h2>
          <p className="text-gray-600 mt-2 text-center">
            Interested in working together or have a question?  
            Feel free to reach out through any of the platforms below.
          </p>

          {/* Contact Cards */}
          
          <div className="grid sm:grid-cols-3 gap-6 mt-10">
            {/* Email */}
            <a
              href="mailto:daadesina1@gmail.com"
              className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition"
            >
              <FaEnvelope className="text-2xl" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-sm text-gray-600">
                  daadesina1@gmail.com
                </p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/daadesina"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition"
            >
              <FaGithub className="text-2xl" />
              <div>
                <p className="font-semibold">GitHub</p>
                <p className="text-sm text-gray-600">
                  github.com/daadesina
                </p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/daadesina/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition"
            >
              <FaLinkedin className="text-2xl" />
              <div>
                <p className="font-semibold">LinkedIn</p>
                <p className="text-sm text-gray-600">
                  linkedin.com/in/daadesina
                </p>
              </div>
            </a>
          </div>
        </section>
      </div>

    </main>
  )
}

/* ================= REUSABLE PROJECT CARD ================= */

function ProjectCard({
  image,
  title,
  description,
  stack,
  live,
  github,
}: {
  image: any 
  title: string
  description: string
  stack: string[]
  live?: string
  github?: string
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow hover:shadow-lg transition">
      <div className="relative h-48 w-full">
        <Image src={image} alt={title} fill className="object-cover rounded-t-2xl" />
      </div>

      <div className="p-5 space-y-3">
        <h3 className="text-lg font-semibold">{title}</h3>

        <p className="text-sm text-gray-600 line-clamp-3">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 text-xs">
          {stack.map((tech) => (
            <span key={tech} className="px-2 py-1 bg-gray-100 rounded">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 pt-3">
          {live && (
            <a
              href={live}
              target="_blank"
              className="flex-1 text-center text-sm px-3 py-2 rounded-lg bg-black text-white hover:bg-gray-800"
            >
              Live
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              className="flex-1 text-center text-sm px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
