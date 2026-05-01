import { FaTiktok, FaInstagram, FaWhatsapp  } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function AboutUs() {
  return (
    <main className="min-h-screen pt-32">

      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-surf-white"></div>
        <img
          src="/back pagina.png"
          alt="background"
          className="absolute top-10 left-10 w-[35%] object-cover opacity-15 z-0"
        />
      </div>

      <div className="container mx-auto py-12">
        <section className="rounded-3xl bg-white p-6 shadow-xl md:p-10 lg:p-12">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
            {/* Imagen */}
            <div className="relative flex-1 overflow-hidden rounded-2xl">
              <div className="aspect-square w-full overflow-hidden rounded-2xl bg-purple-100 lg:aspect-auto lg:h-[600px]">
                <img
                  src="/About us.jpg"
                  alt="Nuestro equipo"
                  width={600}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-12 -right-14 h-32 w-32 rounded-full bg-pink-400/50 md:h-40 md:w-40"></div>
              <div className="absolute -left-10 -top-12 h-24 w-24 rounded-full bg-purple-400/30 md:h-36 md:w-36"></div>
            </div>

            {/* Presentación */}
            <div className="flex-1 space-y-8">
              <div>
                <h2 className="mb-2 inline-block rounded-full bg-surf-lightblue/20 px-4 py-1 text-sm font-medium text-surf-lightblue">
                  ¿Quiénes somos?
                </h2>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                  No somos como los <span className="text-surf-lightblue">adultos aburridos</span> que conoces
                </h1>
              </div>

              <p className="text-lg text-gray-600">
                Nacimos porque estábamos hartos de que nadie entendiera realmente lo que los jóvenes como tú necesitan.
                Somos un equipo de personas que aún recuerdan lo que es tener 17 y enfrentarse a un mundo que a veces
                parece diseñado por y para gente mayor.
              </p>

              <div className="border-l-4 border-surf-blue pl-4 italic">
                "Diseñamos para que cada prenda grite quién sos y te recuerde que este momento es solo el comienzo."
              </div>

              <div className="space-y-4 text-gray-600">
                <p className="flex items-start gap-2">
                  <span className="mt-1 text-surf-lightblue">✦</span>
                  <span>
                    Creamos productos y experiencias que <strong>realmente importan</strong> en tu vida diaria
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="mt-1 text-surf-lightblue">✦</span>
                  <span>
                    Nuestro equipo está formado por personas que <strong>entienden tu mundo</strong>, tus preocupaciones
                    y tus sueños
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="mt-1 text-surf-lightblue">✦</span>
                  <span>
                    Trabajamos para que tengas las <strong>herramientas que necesitas</strong> para conquistar tu futuro
                  </span>
                </p>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <Link to="https://www.instagram.com/surfsafariegresados/" target="_blank" className="text-gray-500 transition-all hover:text-[#EE2A7B] hover:scale-125">
                  <FaInstagram className="h-7 w-7" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link to="https://www.tiktok.com/@surfsafari.e" target="_blank" className="text-gray-500 transition-all hover:text-black hover:scale-125">
                  <FaTiktok className="h-7 w-7" />
                  <span className="sr-only">TikTok</span>
                </Link>
                <Link to="/contacto" className="text-gray-500 transition-all hover:text-[#25D366] hover:scale-125">
                  <FaWhatsapp className="h-7 w-7" />
                  <span className="sr-only">Whatsapp</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
