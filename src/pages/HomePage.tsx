import HomeBreeds from '@/components/HomeBreeds'
import HomeBreedImages from '@/components/HomeBreedImages'
import HomeHero from '@/components/HomeHero'

function HomePage() {
  return (
    <main id="page-main" className="antialiased">
      <HomeHero />
      <HomeBreeds />
      <HomeBreedImages />
    </main>
  )
}

export default HomePage
