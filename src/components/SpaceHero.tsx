"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function SpaceHero() {
  return (
    <section className="relative h-screen bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden flex items-center justify-center text-white">
      {/* Fondo estelar */}
      <div className="absolute inset-0 bg-[url('/stars.jpg')] bg-cover opacity-[0.70]" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 to-slate-900/90" />

      {/* Astronauta flotando */}
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 20 }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
          repeatType: "reverse",
        }}
        className="absolute top-24 right-2 md:right-16 w-[280px] md:w-[540px] z-20 drop-shadow-xl"
      >
        <Image
          src="/astronaut.png"
          alt="Astronauta flotando"
          width={540}
          height={540}
          priority
        />
      </motion.div>

      {/* Contenido textual */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-30 max-w-2xl text-left px-6"
      >
        <h2 className="text-xl md:text-2xl text-yellow-400 mb-2">¡Hola! Soy</h2>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Bautista Heyde
        </h1>

        {/* Animación de texto */}
        <TypeAnimation
          sequence={[
            "Full Stack Developer",
            2000,
            "Estudiante de Ingeniería en Informática",
            2000,
            "Apasionado por el diseño y la tecnología",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-lg md:text-2xl text-slate-300 font-medium block mb-6"
        />

        {/* Presentación */}
        <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-lg">
          Soy un Desarrollador Full Stack con formación en Ingeniería en
          Informática y una fuerte vocación por la tecnología. Me destaco por mi
          capacidad para trabajar en equipo, adaptarme a nuevos desafíos y
          consolidar proyectos web con compromiso, responsabilidad y entusiasmo.
        </p>
      </motion.div>
    </section>
  );
}
