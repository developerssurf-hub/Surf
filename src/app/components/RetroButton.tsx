import { Link } from 'react-router-dom'
import { cn } from "@/lib/utils"

interface RetroButtonProps {
  children?: React.ReactNode
  url?: string
  text?: string
  bgColor?: string
  isMobile?: boolean
  className?: string
  onClick?: () => void
}

export default function RetroButton({ children, url, bgColor, onClick, isMobile, className, text}: RetroButtonProps) {
  if (url === undefined) url = '/';

  const baseClassNames = `relative px-4 py-2 font-medium text-surf-white font-bold transition-all rounded-md 
            shadow-[3px_3px_0px_rgba(0,0,0,0.8)] translate-x-[-1px] translate-y-[-1px] 
            hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_rgba(0,0,0,0.8)] 
            active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_rgba(0,0,0,0.8)]`

  const getBgColor = () => {
    switch (bgColor) {
      case 'blue':
        return 'bg-surf-blue hover:bg-surf-blue/90'
      case 'lightblue':
        return 'bg-surf-lightblue hover:bg-surf-lightblue/90'
      case 'yellow':
        return 'bg-surf-yellow hover:bg-surf-yellow/90'
      case 'orange':
        return 'bg-surf-orange hover:bg-surf-orange/90'
      case 'red':
        return 'bg-surf-red hover:bg-surf-red/90'
      default:
        return 'bg-black'
    }
  }

  const getIsMobile = () => {
    if ( isMobile ) {
      return 'bottom-6 right-6 p-3 w-screen'
    }else {
      return ''
    }
  }

  return (
    <div>
      <Link to={ url }>
        <button 
            className={ cn( baseClassNames, getBgColor(), getIsMobile(), className ) }
            onClick={ onClick }> 
          { text ? text : children } 
        </button>
      </Link>
    </div>
  )
}
