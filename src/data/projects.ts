import {
  SiNextdotjs,
  SiNestjs,
  SiTailwindcss,
  SiPostgresql,
  SiReact,
  SiTypescript,
  SiVercel,
  SiTypeorm,
  SiSocketdotio,
  SiCloudinary,
  SiJsonwebtokens,
  SiSwagger,
  SiMinutemailer,
} from 'react-icons/si'

export const projects = [
  {
    title: 'Servicios Libre — Frontend',
    description:
      'Plataforma moderna construida con Next.js 15 y TypeScript que conecta clientes con trabajadores mediante chat en tiempo real y gestión de contratos. Comunicación fluida, experiencia optimizada y despliegue continuo en Vercel.',
    image: '/projects/serviciolibrefront.jpg',
    stackName: 'Next.js + TailwindCSS',
    stack: [SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiVercel],
    link: 'https://serviciolibre.vercel.app',
    repo: 'https://github.com/Servicios-Libre/frontend',
  },
  {
    title: 'Servicios Libre — Backend API',
    description:
      'API robusta desarrollada con NestJS y PostgreSQL, orientada a ofrecer una arquitectura escalable y segura. Integra autentificación, sockets, gestión de archivos, documentación Swagger y comunicación vía email.',
    image: '/projects/serviciolibreback.jpg',
    stackName: 'NestJS + PostgreSQL',
    stack: [
      SiNestjs,
      SiTypescript,
      SiPostgresql,
      SiTypeorm,
      SiSocketdotio,
      SiCloudinary,
      SiJsonwebtokens,
      SiSwagger,
      SiMinutemailer,
    ],
    link: 'https://back-servicio-libre.onrender.com/',
    repo: 'https://github.com/Servicios-Libre/backend',
  },
  {
    title: 'Moro Abogados — Demo',
    description:
      'Diseño moderno para actualizar el sitio del estudio jurídico Moro Abogados. Construido con Next.js 15 y TypeScript. Incluye una estructura clara, layout responsivo y estilos refinados. Despliegue próximo en Vercel.',
    image: '/projects/moroabogados.jpg',
    stackName: 'Next.js + TailwindCSS',
    stack: [SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiVercel],
    link: '',
    repo: 'https://github.com/BHeydeBautista/Moro-Abogados',
  },
]
