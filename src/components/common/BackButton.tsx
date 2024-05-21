import { Link } from 'react-router-dom'
import IconBack from '@/components/icons/IconBack'
import cn from 'classnames'

interface BackButtonProps {
  to: string;
  text: string;
  className?: string;
}

function BackButton({ to, className, text }: BackButtonProps) {
  return (
    <Link
      to={to}
      className={cn(
        'text-primary-700 inline-flex gap-2 items-center group',
        className
      )}
    >
      <IconBack className="w-6 h-6 relative left-0 group-hover:-left-1 transition-all duration-300" />
      {text}
    </Link>
  )
}

export default BackButton
