"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Download } from "lucide-react";
import { Code2, GraduationCap, Globe } from "lucide-react";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative z-10 py-20 px-6 md:px-16 bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white font-mono overflow-hidden"
    >
      {/* Fondo decorativo animado */}
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
        {/* Perfil animado */}
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
              Mi Trayectoria
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-4">
              {/* Total Projects */}
              <a
                href="#PortfolioShowcase"
                className="group bg-slate-800 hover:bg-slate-700 transition-colors duration-300 rounded-xl p-6 shadow-lg flex flex-col items-center text-center gap-4 border border-slate-700 hover:border-purple-500"
              >
                <div className="bg-purple-500/20 p-4 rounded-full text-purple-400">
                  <Code2 size={32} />
                </div>
                <p className="text-4xl font-bold text-white">4</p>
                <p className="text-sm text-slate-400">Proyecto Totales</p>
                <p className="text-xs text-slate-500">Web & Mobile crafted</p>
              </a>

              {/* Certificates */}
              <a
                href="#PortfolioShowcase"
                className="group bg-slate-800 hover:bg-slate-700 transition-colors duration-300 rounded-xl p-6 shadow-lg flex flex-col items-center text-center gap-4 border border-slate-700 hover:border-purple-500"
              >
                <div className="bg-purple-500/20 p-4 rounded-full text-purple-400">
                  <GraduationCap size={32} />
                </div>
                <p className="text-4xl font-bold text-white">3</p>
                <p className="text-sm text-slate-400">Certificados</p>
                <p className="text-xs text-slate-500">Skills validadas</p>
              </a>

              {/* Experience */}
              <a
                href="/experience"
                className="group bg-slate-800 hover:bg-slate-700 transition-colors duration-300 rounded-xl p-6 shadow-lg flex flex-col items-center text-center gap-4 border border-slate-700 hover:border-purple-500"
              >
                <div className="bg-purple-500/20 p-4 rounded-full text-purple-400">
                  <Globe size={32} />
                </div>
                <p className="text-4xl font-bold text-white">2</p>
                <p className="text-sm text-slate-400">Años y Experiencia</p>
                <p className="text-xs text-slate-500">Viaje Continuo</p>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Descripción + botones */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-left max-w-xl"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Hola! Mi nombre es{" "}
            <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
              Bautista Heyde
            </span>
          </h1>

          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            Soy un desarrollador{" "}
            <strong className="text-white">Full-Stack</strong> con formación en
            Ingeniería Informática y una fuerte vocación por la tecnología.
            Aunque tengo una marcada inclinación hacia el
            <strong className="text-white"> Frontend </strong>, también cuento
            con experiencia en el{" "}
            <strong className="text-white"> Backend </strong>. Me apasiona crear
            experiencias digitales modernas, intuitivas y funcionales, siempre
            aprendiendo y buscando nuevos desafíos para crecer profesionalmente.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            {[
              "Full-Stack",
              "React",
              "Next.js",
              "TypeScript",
              "TailwindCSS",
              "Node.js",
              "Frontend",
              "Backend",
              "Apasionado del código",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-purple-700/40 border border-purple-500 text-sm rounded-full text-white backdrop-blur-md shadow"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4 flex-wrap">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/docs/CVBautistaHeyde.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 rounded bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow-lg"
            >
              <Download size={18} /> Descargar CV
            </motion.a>
          </div>

          {/* 📊 GitHub Stats sin ranking */}
          <div className="mt-10">
            <h2 className="text-xl font-semibold text-purple-400 mb-4 text-center">
              📈 GitHub Stats
            </h2>
            <div className="flex justify-center">
              <img
                src="https://github-readme-stats.vercel.app/api?username=BHeydeBautista&show_icons=true&theme=onedark&hide_rank=true"
                alt="Estadísticas de GitHub"
                width={500}
                height={200}
                loading="lazy"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
