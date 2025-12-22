"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Download, Code2, GraduationCap, Globe } from "lucide-react";
import { projects } from "@/data/projects";
import { certificates } from "@/data/certificates";
import { useTranslation } from "@/hooks/useTranslation";

export default function AboutMe() {
  const totalProjects = projects.length;
  const totalCertificates = certificates.length;
  const yearsExperience = 2;

  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="relative z-10 py-20 px-6 md:px-16 bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white font-mono overflow-hidden"
    >
      {/* Fondo decorativo */}
      <motion.div
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 pointer-events-none z-0"
      >
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-purple-700 opacity-30 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute top-20 right-10 w-[300px] h-[300px] bg-indigo-500 opacity-20 blur-[100px] rounded-full animate-pulse" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Perfil */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6"
        >
          <div className="rounded-full border-4 border-purple-500 shadow-xl overflow-hidden w-52 h-52 relative animate-float-slow">
            <Image
              src="/img/perfil.jpg"
              alt="Foto de perfil"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="text-center w-full">
            <h2 className="text-xl font-semibold text-purple-400 mb-8">
              {t("about.sectionTitle")}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-4">
              {/* Proyectos */}
              <a
                href="#PortfolioShowcase"
                className="group bg-slate-800 hover:bg-slate-700 transition-colors duration-300 rounded-xl p-6 shadow-lg flex flex-col items-center text-center gap-4 border border-slate-700 hover:border-purple-500"
              >
                <div className="bg-purple-500/20 p-4 rounded-full text-purple-400">
                  <Code2 size={32} />
                </div>
                <p className="text-4xl font-bold text-white">{totalProjects}</p>
                <p className="text-sm text-slate-400">
                  {t("about.totalProjects")}
                </p>
                <p className="text-xs text-slate-500">
                  {t("about.totalProjectsDesc")}
                </p>
              </a>

              {/* Certificados */}
              <a
                href="#PortfolioShowcase"
                className="group bg-slate-800 hover:bg-slate-700 transition-colors duration-300 rounded-xl p-6 shadow-lg flex flex-col items-center text-center gap-4 border border-slate-700 hover:border-purple-500"
              >
                <div className="bg-purple-500/20 p-4 rounded-full text-purple-400">
                  <GraduationCap size={32} />
                </div>
                <p className="text-4xl font-bold text-white">
                  {totalCertificates}
                </p>
                <p className="text-sm text-slate-400">
                  {t("about.totalCertificates")}
                </p>
                <p className="text-xs text-slate-500">
                  {t("about.totalCertificatesDesc")}
                </p>
              </a>

              {/* Experiencia */}
              <a
                href="/experience"
                className="group bg-slate-800 hover:bg-slate-700 transition-colors duration-300 rounded-xl p-6 shadow-lg flex flex-col items-center text-center gap-4 border border-slate-700 hover:border-purple-500"
              >
                <div className="bg-purple-500/20 p-4 rounded-full text-purple-400">
                  <Globe size={32} />
                </div>
                <p className="text-4xl font-bold text-white">
                  {yearsExperience}
                </p>
                <p className="text-sm text-slate-400">
                  {t("about.yearsExperience")}
                </p>
                <p className="text-xs text-slate-500">
                  {t("about.yearsExperienceDesc")}
                </p>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Descripción */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-left max-w-xl"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            {t("about.title")}{" "}
            <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
              Bautista Heyde
            </span>
          </h1>

          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            {t("about.description")}
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            {(t("about.tags", { returnObjects: true }) as string[]).map(
              (tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-purple-700/40 border border-purple-500 text-sm rounded-full text-white backdrop-blur-md shadow"
                >
                  {tag}
                </span>
              )
            )}
          </div>

          <div className="flex gap-4 flex-wrap">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/docs/CV Bautista Heyde.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 rounded bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow-lg"
            >
              <Download size={18} /> {t("about.downloadCV")}
            </motion.a>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-semibold text-purple-400 mb-4 text-center">
              {t("about.githubStats")}
            </h2>
            <div className="flex justify-center">
              <Image
                src="https://github-readme-stats.vercel.app/api?username=BHeydeBautista&show_icons=true&theme=onedark&hide_rank=true"
                alt="GitHub Stats"
                width={500}
                height={200}
                loading="lazy"
                unoptimized
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
