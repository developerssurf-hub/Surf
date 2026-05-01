import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Heart, MessageCircle, Send, Bookmark } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"

// Datos de ejemplo para el feed
const instagramPosts = [
  {
    id: 1,
    username: "surfsafariegresados",
    userAvatar: "/logo.png",
    image: "/hero images/1.jpg",
    caption: "Disfrutando de un día increíble #lifestyle",
    likes: 124,
    comments: [
      { username: "amigo1", text: "¡Qué buena foto! 😍" },
      { username: "amigo2", text: "Me encanta este lugar" },
    ],
    timestamp: "hace 2 horas",
  },
  {
    id: 2,
    username: "surfsafariegresados",
    userAvatar: "/logo.png",
    image: "/hero images/2.jpg",
    caption: "Nueva colección disponible ahora #moda",
    likes: 89,
    comments: [
      { username: "seguidor1", text: "¡Necesito esto! 🔥" }
    ],
    timestamp: "hace 5 horas",
  },
  {
    id: 3,
    username: "surfsafariegresados",
    userAvatar: "/logo.png",
    image: "/hero images/3.jpg",
    caption: "Momentos especiales #recuerdos",
    likes: 215,
    comments: [
      { username: "amigo3", text: "¡Qué bonito!" },
      { username: "amigo4", text: "Me alegro por ti ❤️" },
    ],
    timestamp: "hace 1 día",
  },
  {
    id: 4,
    username: "surfsafariegresados",
    userAvatar: "/logo.png",
    image: "/hero images/4.jpg",
    caption: "Explorando nuevos lugares #viajes",
    likes: 178,
    comments: [
      { username: "viajero1", text: "¿Dónde es esto?" },
      { username: "viajero2", text: "¡Increíble vista!" },
    ],
    timestamp: "hace 2 días",
  },
  {
    id: 5,
    username: "surfsafariegresados",
    userAvatar: "/logo.png",
    image: "/hero images/5.jpg",
    caption: "Explorando nuevos lugares #viajes",
    likes: 138,
    comments: [
      { username: "viajero1", text: "¿Dónde es esto?" },
      { username: "viajero2", text: "¡Increíble vista!" },
    ],
    timestamp: "hace 2 días",
  },
  {
    id: 6,
    username: "surfsafariegresados",
    userAvatar: "/logo.png",
    image: "/hero images/6.jpg",
    caption: "Explorando nuevos lugares #viajes",
    likes: 178,
    comments: [
      { username: "viajero1", text: "¿Dónde es esto?" },
      { username: "viajero2", text: "¡Increíble vista!" },
    ],
    timestamp: "hace 2 días",
  },
]

export default function InstagramFeed() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [startX, setStartX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const feedRef = useRef<HTMLDivElement>(null)

  // Detectar si es dispositivo móvil
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  // Manejadores de eventos para el deslizamiento en móvil
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX)
    setIsDragging(true)
  }

  const handleMouseStart = (e: React.MouseEvent) => {
    setStartX(e.clientX)
    setIsDragging(true)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    const currentX = e.touches[0].clientX
    handleSwipe(currentX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    const currentX = e.clientX
    handleSwipe(currentX)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  const handleMouseEnd = () => {
    setIsDragging(false)
  }

  const handleSwipe = (currentX: number) => {
    const diff = startX - currentX

    // Si el deslizamiento es significativo (más de 50px)
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentIndex < instagramPosts.length - 1) {
        // Deslizar a la derecha -> siguiente imagen
        setCurrentIndex(currentIndex + 1)
      } else if (diff < 0 && currentIndex > 0) {
        // Deslizar a la izquierda -> imagen anterior
        setCurrentIndex(currentIndex - 1)
      }
      setIsDragging(false)
    }
  }

  return (
    <div className="w-full bg-surf-white p-4 pt-12 pb-6 md:py-18">
      <h3 className="text-center text-4xl mb-4 text-surf-blue font-poppins font-bold">Seguinos en Instagram</h3>
      <div className='w-20 h-1 bg-surf-blue mx-auto mb-8'></div>
      {/* Vista de escritorio: grid de posts */}
      {!isMobile && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[60%] mx-auto py-5">
          {instagramPosts.map((post) => (
            <InstagramPost key={post.id} post={post} />
          ))}
        </div>
      )}

      {/* Vista móvil: carrusel deslizable */}
      {isMobile && (
        <div
          ref={feedRef}
          className="relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseStart}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseEnd}
          onMouseLeave={handleMouseEnd}
        >
          <div className="relative h-[600px]">
            <div
              className="absolute w-full transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <div className="flex">
                {instagramPosts.map((post) => (
                  <div key={post.id} className="min-w-full">
                    <InstagramPost post={post} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Indicadores de navegación */}
          <div className="flex justify-center -mt-12 gap-2 pb-8">
            {instagramPosts.map((_, index) => (
              <div
                key={index}
                className={cn(
                  "h-2 rounded-full transition-all",
                  index === currentIndex ? "w-4 bg-blue-900" : "w-2 bg-white",
                )}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// Componente para un post individual de Instagram
function InstagramPost({ post }: { post: (typeof instagramPosts)[0] }) {
  return (
    <Card className="max-w-[350px] mx-auto">
      <CardHeader className="flex flex-row items-center">
        <div className="flex items-center space-x-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={post.userAvatar || "/placeholder.svg"} alt={post.username} />
            <AvatarFallback>{post.username.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <span className="font-medium">{post.username}</span>
        </div>
        {/* <Button variant="ghost" size="icon" className="ml-auto rounded-full">
          <MoreHorizontal className="h-5 w-5" />
          <span className="sr-only">Más opciones</span>
        </Button> */}
      </CardHeader>
      <CardContent className="">
        <a href="https://www.instagram.com/p/DHoH6vAx58B/?img_index=1" target="_blank">
          <img
            src={post.image || "/placeholder.svg"}
            alt={`Publicación de ${post.username}`}
            className="aspect-square object-cover"
          />
        </a>
      </CardContent>
      <CardFooter className="flex flex-col">
        <div className="flex w-full">
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon" className="h-9 w-12">
              <Heart className="h-5 w-5"/>
              <span className="-m-1 font-light">{post.likes}</span>
              <span className="sr-only">Me gusta</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-10">
              <MessageCircle className="h-5 w-5" />
              <span className="sr-only">Comentar</span>
              <span className="-m-1 font-light">{post.comments?.length}</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Send className="h-5 w-5" />
              <span className="sr-only">Compartir</span>
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="h-9 w-9 ml-auto">
            <Bookmark className="h-5 w-5" />
            <span className="sr-only">Guardar</span>
          </Button>
        </div>
        <div className="text-sm w-full">
          <span className="font-medium">{post.username}</span> <span>{post.caption}</span>
        </div>
        <div className="text-xs text-gray-500 w-full">{post.timestamp}</div>
      </CardFooter>
    </Card>
  )
}
