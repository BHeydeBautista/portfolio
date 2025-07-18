"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TechGrid({
  title,
  skills,
}: {
  title: string;
  skills: { name: string; logo: string }[];
  columns?: number;
}) {
  const gridCols = 'grid-cols-[repeat(auto-fill,_minmax(140px,_1fr))]';

  return (
    <div className="mb-16 w-full">
      <h3 className="text-2xl font-bold text-purple-400 mb-8 text-center uppercase tracking-wider">
        {title}
      </h3>

      <div className="max-w-5xl mx-auto px-4">
        <div className={`grid ${gridCols} gap-3`}>
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`
            group relative bg-[#111827] border border-[#1f2937]
            rounded-xl shadow-md
            flex flex-col items-center justify-center 
            transition-all duration-300 ease-in-out
            hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]
            hover:scale-[1.03]
            before:absolute before:inset-0 before:rounded-xl
            before:bg-purple-500/10 before:blur-md
            before:opacity-0 hover:before:opacity-100
            aspect-square w-full max-w-[160px]
          `}
            >
              <div className="z-10 flex flex-col items-center justify-center">
                <Image
                  src={skill.logo}
                  alt={skill.name}
                  width={60}
                  height={60}
                  className="object-contain mb-3"
                />
                <p className="text-sm font-medium text-white text-center">
                  {skill.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
