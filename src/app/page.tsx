import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import SpaceHero from "@/components/SpaceHero"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <SpaceHero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}