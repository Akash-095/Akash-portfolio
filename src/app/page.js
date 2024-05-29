import Image from 'next/image'
import Landing from '../../components/Home'
import Projects from '../../components/Projects'
import About from '../../components/About'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Landing />
      <About />
      <Projects />
    </main>
  )
}
