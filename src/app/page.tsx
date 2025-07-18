import AboutMe from "@/components/AboutMe"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Intro from "@/components/Intro"
import Navbar from "@/components/Navbar"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import SpaceHero from "@/components/SpaceHero"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Intro />
        <SpaceHero />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}