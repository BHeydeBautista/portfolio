"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { useTheme } from "next-themes";

export default function SpaceHero() {
  const { theme } = useTheme();

  const backgroundImage =
    theme === "light" ? "/img/starswhite.jpg" : "/img/stars.jpg";

  return (
    <section className="relative min-h-[100dvh] bg-gradient-to-b from-white dark:from-slate-950 to-white dark:to-slate-900 overflow-hidden flex items-center justify-center text-slate-900 dark:text-white">
      {/* Fondo estelar */}
      <div
        className="absolute inset-0 bg-cover opacity-70"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      {/* Gradiente de overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 dark:from-slate-950/80 to-white/90 dark:to-slate-900/90" />

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
        className="absolute top-[15%] right-[5%] lg:right-[10%] z-20 drop-shadow-xl"
        style={{ width: "clamp(200px, 30vw, 400px)" }}
      >
        <Image
          src="/img/astronaut.png"
          alt="Astronauta flotando"
          width={400}
          height={400}
          priority
        />
      </motion.div>

      {/* Avatar flotante */}
      <motion.div
        initial={{ y: -10 }}
        animate={{ y: 10 }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
          repeatType: "reverse",
        }}
        className="absolute top-[15%] left-[5%] lg:left-[10%] z-20 drop-shadow-xl"
        style={{ width: "clamp(140px, 20vw, 240px)" }}
      >
        <Image
          src="/img/perfil.jpg"
          alt="Avatar de Bautista"
          width={240}
          height={240}
          priority
          className="rounded-full border-4 border-yellow-400 shadow-md object-cover"
        />
      </motion.div>

      {/* Contenido textual */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-30 px-6 max-w-2xl w-full text-left flex flex-col items-start justify-center"
      >
        <h2 className="text-xl md:text-2xl text-yellow-400 mb-2">¡Hola! Soy</h2>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Bautista Heyde
        </h1>

        <TypeAnimation
          sequence={[
            "Desarrollador Full Stack",
            2000,
            "Estudiante de Ingeniería en Sistemas",
            2000,
            "Creando soluciones digitales escalables",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-lg md:text-2xl text-slate-700 dark:text-slate-300 font-medium block mb-6"
        />

        <p className="text-slate-700 dark:text-slate-300 text-base md:text-lg leading-relaxed max-w-lg">
          Soy un Desarrollador Full Stack con formación en Ingeniería en
          Informática y una fuerte vocación por la tecnología. Me destaco por mi
          capacidad para trabajar en equipo, adaptarme a nuevos desafíos y
          consolidar proyectos web con compromiso, responsabilidad y entusiasmo.
        </p>
      </motion.div>
    </section>
  );
}
