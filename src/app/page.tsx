import AboutMe from "@/components/AboutMe"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Intro from "@/components/Intro"
import Navbar from "@/components/Navbar"
import PortfolioShowcase from "@/components/PortfolioShowcase/PortfolioShowcase"
import SpaceHero from "@/components/SpaceHero"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Intro />
        <SpaceHero />
        <AboutMe />
        <PortfolioShowcase />
        <Contact />
      </main>
      <Footer />
    </>
  )
}