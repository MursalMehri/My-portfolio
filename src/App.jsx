import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer, { BackToTop } from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-midnight-950 text-snow">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-lavender-600 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Education />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
