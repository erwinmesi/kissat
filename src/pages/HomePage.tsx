import HomeBreeds from '@/components/HomeBreeds'
import HomeBreedImages from '@/components/HomeBreedImages'
import HomeHero from '@/components/HomeHero'

function HomePage() {
  return (
    <main id="page-home">
      <HomeHero />
      <HomeBreeds />
      <HomeBreedImages />
    </main>
  )
}

export default HomePage
