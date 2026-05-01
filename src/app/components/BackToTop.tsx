import { ChevronUp } from "lucide-react"

export default function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div>
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 bg-blue-300 text-brand-white hover:bg-blue-400  transition-colors z-50 animate-bounce rounded-full 
            shadow-[3px_3px_0px_rgba(0,0,0,0.8)] translate-x-[-1px] translate-y-[-1px] 
            hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_rgba(0,0,0,0.8)] 
            active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_rgba(0,0,0,0.8)]"
        aria-label="Volver al inicio"
      >
        <ChevronUp className="w-6 h-6" />
      </button>
      
    </div>
  )
}