"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, BadgeCheck, Atom } from "lucide-react";
import Image from "next/image";
import { projects } from "@/data/projects";
import { certificates } from "@/data/certificates";
import CertificateCard from "./CertificateCard";
import { skillCategories } from "@/data/skills";
import TechGrid from "./TechGrid";

const tabs = ["Projects", "Certificates", "Tech Stack"];

export default function PortfolioShowcase() {
  const [activeTab, setActiveTab] = useState("Certificates");

  return (
    <section
      id="portfolio"
      className="relative z-10 py-20 px-6 md:px-16 bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white font-mono overflow-hidden"
    >
      {/* Fondos animados tipo AboutMe */}
      <motion.div
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 pointer-events-none z-0"
      >
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-purple-700 opacity-30 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute top-20 right-10 w-[300px] h-[300px] bg-indigo-500 opacity-20 blur-[100px] rounded-full animate-pulse" />
      </motion.div>

      <div className="relative z-10 text-center mb-12">
        <motion.h2
          className="text-4xl font-bold text-purple-400"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Portfolio Showcase
        </motion.h2>
        <p className="text-slate-300 mt-4 text-sm md:text-base max-w-2xl mx-auto">
          Explorá mi recorrido a través de proyectos, certificaciones y stack
          tecnológico. Cada sección representa un hito en mi aprendizaje.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex items-center gap-2 px-6 py-2 rounded-xl transition-all duration-300 font-semibold border 
              ${
                activeTab === tab
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg border-purple-700"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700 border-slate-600"
              }`}
          >
            {tab === "Projects" && <Code2 size={18} />}
            {tab === "Certificates" && <BadgeCheck size={18} />}
            {tab === "Tech Stack" && <Atom size={18} />}
            {tab}
          </button>
        ))}
      </div>

      {/* Content por tab */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 relative z-10"
      >
        {activeTab === "Certificates" && (
          <>
            {certificates.map((cert, idx) => (
              <CertificateCard key={idx} {...cert} />
            ))}
          </>
        )}

        {activeTab === "Projects" && (
          <>
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800 rounded-xl border border-slate-700 hover:border-purple-500 shadow-lg overflow-hidden flex flex-col"
              >
                {/* Imagen del proyecto */}
                <div className="relative w-full h-48 sm:h-40 md:h-44">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Info del proyecto */}
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-3">
                    {project.description}
                  </p>

                  {/* Stack Icons */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    {project.stack.map((Icon, i) => (
                      <Icon key={i} size={20} className="text-purple-400" />
                    ))}
                  </div>

                  {/* Botones */}
                  <div className="mt-auto flex gap-3">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-1 text-sm bg-purple-600 hover:bg-purple-700 text-white rounded shadow"
                      >
                        Ver Proyecto
                      </a>
                    )}
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-1 text-sm bg-slate-700 hover:bg-slate-600 text-white rounded shadow"
                      >
                        Repositorio
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </>
        )}

        {activeTab === "Tech Stack" && (
          <div className="col-span-full space-y-8">
            {skillCategories.map((category, i) => (
              <TechGrid
                key={i}
                title={category.title}
                skills={category.skills}
                columns={category.columns}
              />
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
}
