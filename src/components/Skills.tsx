'use client'
import { motion } from 'framer-motion'
import {
  SiNestjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiFramer,
  SiAuth0,
  SiTestinglibrary,
  SiCplusplus,
  SiSharp,
  SiUnity,
  SiUnrealengine,
} from 'react-icons/si'
import {
  FaUserFriends,
  FaTools,
  FaLightbulb,
  FaProjectDiagram,
} from 'react-icons/fa'

// Frontend Skills
const frontendSkills = [
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'React', icon: <SiReact /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'TailwindCSS', icon: <SiTailwindcss /> },
  { name: 'Framer Motion', icon: <SiFramer /> },
  { name: 'Redux', icon: <SiRedux /> },
]

// Backend Skills
const backendSkills = [
  { name: 'NestJS', icon: <SiNestjs /> },
  { name: 'Express', icon: <SiExpress /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'Auth', icon: <SiAuth0 /> },
  { name: 'Testing', icon: <SiTestinglibrary /> },
  { name: 'Scrum', icon: <FaUserFriends /> },
]

// Soft & Engineering Skills
const extraSkills = [
  { name: 'Modularidad & escalabilidad', icon: <FaTools /> },
  { name: 'Adaptabilidad a nuevas herramientas', icon: <FaLightbulb /> },
  { name: 'Iteración profesional constante', icon: <FaTools /> },
  { name: 'Compromiso y trabajo en equipo', icon: <FaUserFriends /> },
]

// Additional Techs
const otherTechnologies = [
  { name: 'C++', icon: <SiCplusplus /> },
  { name: 'C#', icon: <SiSharp /> },
  { name: 'Unity Engine', icon: <SiUnity /> },
  { name: 'Unreal Engine', icon: <SiUnrealengine /> },
  { name: 'Diagramas ER', icon: <FaProjectDiagram /> },
]

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-950 text-white px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Tecnologías y habilidades
      </h2>

      <SkillGrid title="Frontend" skills={frontendSkills} />
      <SkillGrid title="Backend" skills={backendSkills} />
      <SkillGrid title="Otras habilidades" skills={extraSkills} columns={2} />
      <SkillGrid
        title="Lenguajes & herramientas adicionales"
        skills={otherTechnologies}
      />
    </section>
  )
}

// Subcomponente para cada bloque
function SkillGrid({
  title,
  skills,
  columns = 4,
}: {
  title: string
  skills: { name: string; icon: React.ReactNode }[]
  columns?: number
}) {
  const gridCols =
    columns === 2
      ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-2'
      : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4'
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-semibold text-yellow-400 mb-6 text-center">
        {title}
      </h3>
      <div className={`grid ${gridCols} gap-6 max-w-6xl mx-auto`}>
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className={`bg-slate-900 border border-slate-800 rounded-xl p-6 flex ${
              columns === 2
                ? 'flex-row gap-4 items-center'
                : 'flex-col items-center justify-center'
            } shadow-md hover:shadow-yellow-400/20 transition`}
          >
            <span className="text-yellow-400 text-4xl mb-2">{skill.icon}</span>
            <p className="text-sm text-slate-300 text-center">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
