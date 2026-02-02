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
  SiPrisma,
  SiFramer,
} from "react-icons/si";

export const projects = [
  {
    title: "Servicios Libre — Frontend",
    description:
      "Plataforma moderna construida con Next.js 15 y TypeScript que conecta clientes con trabajadores mediante chat en tiempo real y gestión de contratos. Comunicación fluida, experiencia optimizada y despliegue continuo en Vercel.",
    image: "/projects/serviciolibrefront.jpg",
    stackName: "Next.js + TailwindCSS",
    stack: [SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiVercel],
    link: "https://serviciolibre.vercel.app",
    repo: "https://github.com/Servicios-Libre/frontend",
  },
  {
    title: "Servicios Libre — Backend API",
    description:
      "API robusta desarrollada con NestJS y PostgreSQL, orientada a ofrecer una arquitectura escalable y segura. Integra autentificación, sockets, gestión de archivos, documentación Swagger y comunicación vía email.",
    image: "/projects/serviciolibreback.jpg",
    stackName: "NestJS + PostgreSQL",
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
    link: "https://back-servicio-libre.onrender.com/",
    repo: "https://github.com/Servicios-Libre/backend",
  },
  {
    title: "Moro Abogados - FrontEnd",
    description:
      "Diseño moderno para actualizar el sitio del estudio jurídico Moro Abogados. Construido con Next.js 16 y TypeScript. Incluye una estructura clara, layout responsivo y estilos refinados. Despliegue próximo en Vercel.",
    image: "/projects/moroabogados.jpg",
    stackName: "Next.js + TailwindCSS",
    stack: [SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiVercel],
    link: "https://www.moroabogados.com.ar/",
    repo: "https://github.com/BHeydeBautista/Moro-Abogados",
  },
  {
    title: "Moro Abogados — Backend",
    description:
      "Diseño moderno para actualizar el sitio del estudio jurídico Moro Abogados. Construido con Next.js 15 y TypeScript. Incluye una estructura clara, layout responsivo y estilos refinados. Despliegue próximo en Vercel.",
    image: "/projects/moroabogados.jpg",
    stackName: "NestJs + TypeScript",
    stack: [
      SiNestjs,
      SiTypescript,
      SiPostgresql,
      SiTypeorm,
      SiSocketdotio,
      SiCloudinary,
    ],
    link: "https://moroabogados-backend-production.up.railway.app/",
    repo: "https://github.com/BHeydeBautista/MoroAbogados-Backend",
  },
  {
    title: "Ecommerce M4 Proyecto Integrador — Backend API",
    description:
      "API robusta desarrollada con NestJS y PostgreSQL, orientada a ofrecer una arquitectura escalable y segura. Integra autentificación, sockets, gestión de archivos, documentación Swagger y comunicación vía email.",
    image: "/projects/serviciolibreback.jpg",
    stackName: "NestJS + PostgreSQL",
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
    link: "",
    repo: "https://github.com/BHeydeBautista/Modulo-4-Henry-PI",
  },
  {
    title:
      "Base reutilizable de Inicio de sesión y creación de cuenta - FrontEnd",
    description:
      "API para futuros proyectos, pudiendo importar los componentes ya desarrollados y adaptarlos según la necesidad, ahorrando tiempo y evitando repetir pruebas y configuraciones.",
    image: "/projects/register-front.png",
    stackName: "NextJS + TailwindCSS",
    stack: [SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiVercel, SiPrisma, SiFramer],
    link: "",
    repo: "https://github.com/BHeydeBautista/Login-And-Register-FrontEnd",
  },
  {
    title:
      "Vuelta a la Isla Curupí",
    description:
      "Pryoyecto para la institución Atlético Echagüe Club",
    image: "/projects/curupi.png",
    stackName: "NextJS + TailwindCSS",
    stack: [SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiVercel, SiFramer],
    link: "https://aec-master.vercel.app/",
    repo: "https://github.com/BHeydeBautista/Login-And-Register-FrontEnd",
  },
];
