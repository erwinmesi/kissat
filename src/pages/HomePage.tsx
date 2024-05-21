import HomeBreeds from '@/components/HomeBreeds'
import HomeHero from '@/components/HomeHero'

function HomePage() {
  return (
    <main id="page-main" className="antialiased">
      <HomeHero />
      <HomeBreeds />
    </main>
  )
}

export default HomePage
