// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Hero from './components/Hero'
import Gallery from './components/Gallery'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh]">
      <Hero />
      <Gallery />
    </div>
  )
}