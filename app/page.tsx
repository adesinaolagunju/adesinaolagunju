
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"


import Image from "next/image"
import Link from "next/link"
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"

import logo from "@/public/images/logo.png"
import profile_pic from "@/public/images/profile_pic.png"
import adefinance from "@/public/images/adefinance.png"
import aice_ui_design from "@/public/images/aice_ui_design.png"
import cbt_postman from "@/public/images/cbt_postman.png"
import emergency_news from "@/public/images/emergency_news.png"
import ubuntu_library from "@/public/images/ubuntu_library.png"
import adelearning from "@/public/images/adelearning.png"

import { certificates } from "./data/certificates"
import CertificateCard from "./components/CertificateCard"
import { useState } from "react"
import CertificateModal from "./components/CertificateModal"



const VISIBLE_COUNT = 6

export default function Page() {
  const RESUME_URL = "https://drive.google.com/file/d/1tIAWFkByRi6wUzOITyk0XSh5z3p3Zsdh/view?usp=drive_link"
  

  const [selectedCertificate, setSelectedCertificate] = useState<any>(null)


  const [showAll, setShowAll] = useState(false)

  const visibleCertificates = showAll
    ? certificates
    : certificates.slice(0, VISIBLE_COUNT)
  
  return (
    <main className="px-3 md:px-16 py-8 max-w-7xl mx-auto">
      {/* ================= NAVBAR ================= */}
      <nav className="flex justify-between items-center">
        <Image src={logo} alt="Abdullah Adesina Logo" className="w-28 h-auto" />

        <div className="md:space-x-6 md:text-sm text-xs font-medium space-x-2 ">
          <Link href="#about" className="hover:text-gray-600">About</Link>
          <Link href="#projects" className="hover:text-gray-600">Projects</Link>
          <a href={RESUME_URL} target="_blank" className="hover:text-gray-600">Resume</a>
          <Link href="#contact" className="hover:text-gray-600">Contact</Link>
        </div>
      </nav>

      {/* ================= HERO / ABOUT ================= */}
      <div className="flex justify-center">
        <section
          id="about"
          className="flex flex-col w-fit md:flex-row items-center gap-10 mt-24 "
        >
          <Image
            src={profile_pic}
            alt="Abdullah Adesina"
            className="w-60 md:w-70 h-auto rounded-2xl"
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
              applications using Python, Django, Flask, Express.js, PHP Laravel, React,
              Next.js, and React Native. Adept at building responsive
              user interfaces, robust backend systems, and cloud
              integrations. Strong problem-solver with a collaborative
              mindset, eager to drive impactful digital solutions.
            </p>

            <p className="text-gray-700 leading-relaxed">
              I enjoy building impactful digital solutions that solve real-world
              problems—especially across Africa.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              {/* Resume Button */}
              <a
                href={RESUME_URL}
                target="_blank"
                className="px-5 py-2 rounded-lg bg-black text-white text-sm font-medium hover:bg-gray-800 transition"
              >
                View Resume
              </a>

              {/* Contact Button */}
              <Link
                href="#contact"
                className="px-5 py-2 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-100 transition"
              >
                Contact Me
              </Link>

              {/* Certificates Button */}
              <Link
                href="#certificates"
                className="px-5 py-2 rounded-lg bg-indigo-900 text-white text-sm font-medium hover:bg-indigo-800 transition"
              >
                View Certificates
              </Link>
            </div>

          </div>
        </section>
      </div>

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
            image={emergency_news}
            title="EmergencyNews"
            description="A full-stack global news aggregator that collects and displays real-time news from 50+ international sources using RSS feeds."
            stack={[
              "Next.js",
              "Django",
              "Celery Beat",
              "Redis",
            ]}
            live="https://emergency-news2025.vercel.app/"
            github="https://github.com/ChiAdeTech/EmergencyNews2025.git"
          />

          <ProjectCard
            image={ubuntu_library}
            title="UbuntuLibrary"
            description="An e-library platform for reading and downloading African-authored books, focused on Pan-African history, culture, and ideology."
            stack={["Next.js", "Tailwind CSS"]}
            live="https://ubuntu-library2025.vercel.app/"
            github="https://github.com/ubuntulibrary/UbuntuLibrary2025.git"
          />



          <ProjectCard
            image={adefinance}
            title="AdeFinance"
            description="A personal finance management web app that helps users track income, expenses, and visualize financial data with interactive charts."
            stack={["Flask", "Python", "Chart.js", "SQLite", "HTML/CSS"]}
            live="https://adefinance.onrender.com/"
            github="https://github.com/adesinaolagunju/AdeFinance"
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
            github="https://github.com/adesinaolagunju/AdeCBT.git"
          />

          <ProjectCard
            image={adelearning}
            title="AdeLearning"
            description="A mobile learning app built with React Native and Expo featuring user authentication and a personalized dashboard."
            stack={["React Native", "Expo"]}
            github="https://github.com/adesinaolagunju/AdeLearning.git"
          />

        </div>
      </section>


      {/* ================= CERTIFICATES ================= */}

      <section id="certificates" className="mt-32">
        <h2 className="text-3xl font-bold">Certificates</h2>
        <p className="text-gray-600 mt-2 max-w-2xl">
          Professional certifications and learning programs I’ve completed.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {visibleCertificates.map((cert) => (
            <CertificateCard
              key={cert.id}
              {...cert}
              onClick={() => setSelectedCertificate(cert)}
            />
          ))}
        </div>


        {/* Toggle Button */}
        {certificates.length > VISIBLE_COUNT && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 rounded-lg border bg-black text-white cursor-pointer text-sm font-medium hover:bg-gray-100 hover:text-black transition"
            >
              {showAll ? "Show less" : "View more certificates"}
            </button>
          </div>
        )}
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
          
          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 mt-10 ">
            {/* Email */}
            <a
              href="mailto:adesinaolagunju1@gmail.com"
              className="flex md:w-[30%] w-full flex-col items-center text-center gap-3 p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition"
            >
              <FaEnvelope className="text-2xl" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-sm text-gray-600">
                  adesinaolagunju1@gmail.com
                </p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/adesinaolagunju"
              target="_blank"
              rel="noopener noreferrer"
              className="flex md:w-[30%] w-full flex-col items-center text-center gap-3 p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition"
            >
              <FaGithub className="text-2xl" />
              <div>
                <p className="font-semibold">GitHub</p>
                <p className="text-sm text-gray-600">
                  github.com/adesinaolagunju
                </p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/adesinaolagunju/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex md:w-[30%] w-full flex-col items-center text-center gap-3 p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition"
            >
              <FaLinkedin className="text-2xl" />
              <div>
                <p className="font-semibold">LinkedIn</p>
                <p className="text-sm text-gray-600">
                  linkedin.com/in/adesinaolagunju
                </p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/2348103230934"
              target="_blank"
              rel="noopener noreferrer"
              className="flex md:w-[30%] w-full flex-col items-center text-center gap-3 p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition"
            >
              <FaWhatsapp className="text-2xl" />
              <div>
                <p className="font-semibold">WhatsApp</p>
                <p className="text-sm text-gray-600">
                  +234 810 323 0934
                </p>
              </div>
            </a>

          </div>
        </section>
      </div>

      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />


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
