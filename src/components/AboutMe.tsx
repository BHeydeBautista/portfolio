"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Download, FileText } from "lucide-react";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative z-10 py-20 px-6 md:px-16 bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white font-mono overflow-hidden"
    >
      {/* Fondo decorativo animado (blur + glow) */}
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

          <div className="text-center">
            <h2 className="text-xl font-semibold text-purple-400 mb-1">
              Certificados
            </h2>
            <div className="flex gap-3 justify-center">
              <Image
                src="/img/cert1.png"
                alt="Certificado 1"
                width={48}
                height={48}
              />
              <Image
                src="/img/cert2.png"
                alt="Certificado 2"
                width={48}
                height={48}
              />
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
              href="/docs/CV_IgnacioMartinez.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 rounded bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow-lg"
            >
              <Download size={18} /> Descargar CV
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/docs/certificados.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-lg"
            >
              <FileText size={18} /> Ver certificados
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
