import { useEffect, useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import RetroButton from '../components/RetroButton';

export default function PromotionsPage() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const checkScreenSize = () => window.innerWidth >= 768

    if (!checkScreenSize()) {
      setVisibleItems(new Set([0, 1, 2]))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"))
            setVisibleItems((prev) => new Set([...prev, index]))
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const promotions = [
    {
      id: 1,
      title: "Kit Escolar Completo",
      description:
        "Si compras 30 kits de ropa escolar, recibes un alumno liberado y una bandera de regalo para tu institución educativa.",
      image: "/Clothes/Buzo-1.jpg",
      side: "left",
    },
    {
      id: 2,
      title: "Paquete Deportivo Institucional",
      description:
        "Al adquirir 25 uniformes deportivos completos, obtienes material deportivo adicional y una placa conmemorativa sin costo extra.",
      image: "/Clothes/Buzo-3.jpg",
      side: "right",
    },
  ]

  return (
    <div className="min-h-screen py-12 px-4 bg-surf-white">

      <img src="/back pagina.png" alt="background" className='fixed top-10 left-10 w-[35%] object-cover z-0 opacity-15' />

      <div className="container mx-auto pt-32">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-surf-lightblue">Promociones Especiales</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Descubre nuestras ofertas exclusivas diseñadas especialmente para instituciones educativas
          </p>
        </div>

        {/* Promociones */}
        <div className="space-y-24">
          { promotions.map(( promotion, index ) => (
            <div
              key={ promotion.id }
              ref={( element ) => {
                if ( element !== null ) {
                  itemRefs.current[ index ] = element;
                }
              }}
              className={`transition-all duration-1000 ease-out ${
                visibleItems.has( index )
                  ? "translate-x-0 opacity-100"
                  : `md:${ promotion.side === "left" ? "-translate-x-full" : "translate-x-full"} md:opacity-0 translate-x-0 opacity-100`
              }`}
              data-index={ index }
              style={{ transitionDelay: visibleItems.has( index ) ? `${ index * 200 }ms` : "0ms" }}
            >
              <Card className="overflow-hidden shadow-2xl border-0 bg-card">
                <CardContent className="p-0">
                  <div
                    className={`grid lg:grid-cols-2 gap-0 items-center ${
                      promotion.side === "right" ? "lg:grid-flow-col-dense" : ""
                    }`}
                  >
                    {/* Image */}
                    <div
                      className={`relative h-64 md:h-80 lg:h-96 overflow-hidden ${
                        promotion.side === "right" ? "lg:col-start-2" : ""
                      }`}
                    >
                      <img
                        src={ promotion.image || "/placeholder.svg"}
                        alt={ promotion.title }
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    {/* Contenido */}
                    <div
                      className={`p-6 md:p-8 lg:p-12 space-y-4 md:space-y-6 ${ promotion.side === "right" ? "lg:col-start-1" : "" }`}
                    >
                      <div className="space-y-3 md:space-y-4">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-surf-lightblue leading-tight">
                          { promotion.title }
                        </h2>
                        <div className="w-16 md:w-20 h-1 bg-surf-lightblue rounded-full" />
                      </div>

                      <p className="text-base md:text-lg lg:text-xl text-surf-black leading-relaxed">
                        { promotion.description }
                      </p>

                      <div className="pt-2 md:pt-4">
                         <a href="/contact">
                          <div className="inline-flex items-center gap-2 text-surf-blue font-semibold text-base md:text-lg">
                            <span>Enterate todo</span>
                            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                              />
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 md:mt-20">
          <div
            ref={( element ) => {
              if ( element !== null ) {
                itemRefs.current[2] = element;
              }
            }}
            className={`transition-all duration-1000 ease-out ${
              visibleItems.has(2)
                ? "translate-y-0 opacity-100"
                : "md:translate-y-8 md:opacity-0 translate-y-0 opacity-100"
            }`}
            data-index={2}
          >
            <p className="text-base md:text-lg text-muted-foreground mb-6">
              ¿Interesado en alguna de nuestras promociones?
            </p>
            <div className='text-center'>
              <RetroButton text="Contactar ahora! 👋" bgColor="red" className="p-4 font-bold" url="/contacto" /> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
