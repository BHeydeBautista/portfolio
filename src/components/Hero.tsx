"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-10 sm:gap-16 relative z-10">
          
          {/* Texto */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center sm:text-left max-w-2xl"
          >
            <h1 className="whitespace-nowrap text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-6">
              Bautista<span className="ml-4">Heyde</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed mb-10">
              Full Stack Developer | Expert in Modern Web Technologies
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center sm:justify-start">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="min-w-[12rem] bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:shadow-xl hover:shadow-blue-500/20 text-center"
              >
                Ver Proyectos
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="min-w-[12rem] border-2 border-white hover:border-blue-500 text-white hover:text-blue-500 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:bg-white/10 hover:shadow-lg hover:shadow-blue-500/20 text-center"
              >
                Contactame
              </motion.a>
            </div>
          </motion.div>

          {/* Imagen ajustada */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full max-w-sm sm:max-w-md aspect-[3/4] relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/30"
          >
            <Image
              src="/img/profile.png"
              alt="Bautista Heyde"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-top rounded-2xl transition-transform duration-500 hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
          </motion.div>

        </div>
      </div>

      {/* Decoración animada */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute w-48 h-48 bg-blue-500 rounded-full blur-3xl top-16 left-16"
        />
        <motion.div
          animate={{ opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          className="absolute w-32 h-32 bg-purple-500 rounded-full blur-3xl bottom-16 right-16"
        />
      </div>
    </section>
  );
}
