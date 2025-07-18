"use client";
import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GalacticButton from "./GalacticButton";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";

export default function Intro() {
  const [showIntro, setShowIntro] = useState(true);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showIntro ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showIntro]);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.section
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-[9999] bg-[#0b1120] text-white font-sans flex flex-col items-center justify-center text-center overflow-hidden"
        >
          {/* Fondo animado */}
          <motion.div
            initial={{ scale: 1.1, opacity: 0.3 }}
            animate={{ scale: 1.2, opacity: 0.4 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 z-[-1] flex items-center justify-center"
          >
            <Image
              src="/img/stars.jpg"
              alt="Fondo espacial"
              fill
              priority
              className="object-cover opacity-30 blur-sm"
            />
          </motion.div>

          {/* Overlay con gradiente sutil */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/70 via-[#4338ca]/30 to-[#22d3ee]/10 z-[-1]" />

          {/* Partículas */}
          <Particles
            id="tsparticles"
            className="absolute inset-0 z-0"
            init={particlesInit}
            options={{
              fullScreen: { enable: false },
              background: { color: "transparent" },
              fpsLimit: 60,
              particles: {
                number: { value: 80 },
                color: { value: "#ffffff" },
                shape: { type: "circle" },
                opacity: { value: 0.2 },
                size: { value: { min: 1, max: 2 } },
                move: {
                  enable: true,
                  speed: 0.3,
                  direction: "none",
                  outModes: { default: "out" },
                },
              },
            }}
          />

          {/* Nombre principal con gradiente glow */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[#a855f7] via-[#6366f1] to-[#22d3ee] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(99,102,241,0.5)]"
          >
            Bautista Heyde
          </motion.h1>

          {/* Animación tipo terminal */}
          <div className="text-green-400 font-mono text-xl sm:text-2xl md:text-3xl">
            <Typewriter
              options={{
                strings: [
                  'Desarrollador Full Stack',
                  'Estudiante de Ingeniería en Informática',
                  'Creando soluciones digitales escalables',
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </div>

          {/* Botón de inicio */}
          <div className="mt-8 z-10">
            <GalacticButton
              text="Explorar mi universo"
              onClick={() => setShowIntro(false)}
            />
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
