import { Link } from 'react-router-dom'
import { BreedImage } from '@/types'

import useRoute from '@/hooks/useRoute'

interface BreedImageLinkProps {
  image: BreedImage;
}

function BreedImageLink({ image }: BreedImageLinkProps) {
  const { routes } = useRoute()

  return (
    <Link
      to={routes.showBreed.makePath(image.id)}
      className="border-4 border-primary-300 hover:border-primary-400 rounded-3xl transition-colors overflow-hidden group"
    >
      <img
        src={image.url}
        className="w-36 h-36 md:w-48 md:h-48 object-cover rounded-[18px] bg-gradient-to-tr from-primary-200 to-primary-100 border-4 border-white group-hover:scale-110 transition-all"
        alt="Kissat - Cat image"
      />
    </Link>
  )
}

export default BreedImageLink
