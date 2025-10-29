import Loading from '@/components/Loading'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Companies from '@/components/Companies'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Loading />
      <main>
        <Hero />
        <About />
        <Services />
        <Companies />
        <Projects />
        <Contact />
      </main>
    </>
  )
}
