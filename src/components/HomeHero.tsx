import imgHeroCat from '@/assets/img/hero-cat.webp'

function HomeHero() {
  return (
    <section className="bg-gradient-to-b from-primary to-primary-400 relative pt-12 sm:pt-16 md:pt-20 lg:pt-24 w-full px-6 sm:px-8">
      <div className="text-center">
        <h1 className="font-black text-5xl lg:text-7xl">Kissat</h1>
        <p className="text-xl lg:text-2xl mt-4 font-medium px-8">
          Your Ultimate Guide to Everything Cats
        </p>
      </div>
      <div className="relative -bottom-11 left-3 flex justify-center w-full">
        <img
          src={imgHeroCat}
          alt="Kissat - Cat Hero Image"
          className="sm:max-w-sm md:max-w-md lg:max-w-xl"
        />
      </div>
    </section>
  )
}

export default HomeHero
