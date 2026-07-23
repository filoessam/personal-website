import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import About from './components/About'
import Expertise from './components/Expertise'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import CaseStudy from './components/CaseStudy'
import Experience from './components/Experience'
import Skills from './components/Skills'
import SkillBars from './components/SkillBars'
import Testimonials from './components/Testimonials'
import Statistics from './components/Statistics'
import Certifications from './components/Certifications'
import Blog from './components/Blog'
import Process from './components/Process'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <Nav dark={dark} toggleDark={() => setDark(d => !d)} />
      <main>
        <Hero />
        {/* <TrustedBy /> */}
        <About />
        <Expertise />
        <TechStack />
        {/* <Projects /> */}
        {/* <CaseStudy /> */}
        {/* <Experience /> */}
        <Skills />
        <SkillBars />
        <Testimonials />
        {/* <Statistics /> */}
        {/* <Certifications /> */}
        {/* <Blog /> */}
        <Process />
        {/* <FAQ /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
