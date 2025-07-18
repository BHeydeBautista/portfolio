"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function SpaceHero() {
  const [mounted, setMounted] = useState(false);
  const [showStar, setShowStar] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 1280, height: 800 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const delay = setTimeout(() => setMounted(true), 1000);

    const interval = setInterval(() => {
      setShowStar(true);
      setTimeout(() => setShowStar(false), 2500);
    }, 8000);

    return () => {
      clearInterval(interval);
      clearTimeout(delay);
    };
  }, []);

  return (
    <AnimatePresence>
      {mounted && (
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative min-h-[100dvh] overflow-hidden bg-[#0b1120] text-white flex items-center justify-center"
        >
          {/* Estrella fugaz */}
          {showStar && (
            <motion.div
              initial={{
                x: windowSize.width + 100,
                y: windowSize.height * 0.000001,
              }}
              animate={{
                x: -200,
                y: windowSize.height * 0.8,
                opacity: 1,
              }}
              transition={{ duration: 2.4, ease: "easeOut" }}
              className="fixed z-50 pointer-events-none"
              style={{
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                background: "white",
                boxShadow: "0 0 120px 40px white",
                filter: "drop-shadow(0 0 90px white)",
                rotate: "45deg",
              }}
            />
          )}

          {/* Fondo estelar */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url(/img/stars.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.4,
            }}
          />

          {/* Overlay de gradiente */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/60 via-[#4338ca]/30 to-[#22d3ee]/20 z-0" />

          {/* Contenido principal */}
          <div className="relative z-20 w-full max-w-7xl px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
            {/* Texto principal */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="flex flex-col items-start text-left max-w-xl pt-[10vh] md:pt-[20vh]"
            >
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-1 font-sans">
                Full Stack
              </h1>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sans text-[#a855f7]">
                Developer
              </h2>

              {/* Animación de typing */}
              <TypeAnimation
                sequence={[
                  "Computer Science Student",
                  2000,
                  "Frontend & Backend Developer",
                  2000,
                  "React / Next / Nest / PostgreSQL",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-white text-base md:text-lg font-medium mb-4"
              />

              {/* Descripción */}
              <p className="text-sm md:text-base text-white/80 leading-relaxed mb-6 max-w-md font-medium">
                Enhancing digital experiences that are smooth, scalable, and
                made to impress.
              </p>

              {/* Tech stack badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                {["React", "Next.js", "NestJS", "PostgreSQL"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-1 rounded-full bg-white/10 text-white/80 text-sm font-medium backdrop-blur-sm border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Botones */}
              <div className="flex gap-4">
                <a
                  href="#projects"
                  className="px-5 py-2 rounded-md font-semibold text-sm bg-[#0f172a] text-white shadow-[0_0_15px_#a855f7] hover:bg-[#a855f7]/20 transition"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="px-5 py-2 rounded-md font-semibold text-sm border border-white/30 text-white/80 hover:bg-white/10 transition"
                >
                  Contact
                </a>
              </div>
            </motion.div>

            {/* Imagen flotante (astronauta) */}
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 20 }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
                repeatType: "reverse",
              }}
              className="hidden md:block pointer-events-none"
              style={{ width: "clamp(180px, 30vw, 400px)" }}
            >
              <Image
                src="/img/astronaut.png"
                alt="Astronauta flotando"
                width={400}
                height={400}
                priority
                className="drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]"
              />
            </motion.div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
