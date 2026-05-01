import { FaWhatsapp } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card"
import RetroButton from '../components/RetroButton';

export default function ContactUs() {
  const openWhatsApp = () => {
    // Reemplaza este número con tu número de WhatsApp real
    const phoneNumber = "1234567890"
    const message = "Hola, me gustaría obtener más información."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
      <main className="bg-surf-white">

        <img src="/back pagina.png" alt="background" className='absolute top-10 left-10 w-[35%] object-cover z-0 opacity-15' />
        
        <div className="container mx-auto relative font-poppins flex items-center w-screen py-6 px-6">
          <div className="h-full pt-32 w-full flex flex-col items-center justify-center">
            <h1 className="text-7xl md:text-8xl tracking-wide text-stroke-blue leading-none font-surf-font text-center mb-2 text-surf-lightblue">Nuestro Whatsapp</h1>
            <p className="text-center text-xl font-medium mb-4">Estamos aquí para ayudarte. ¡Escríbenos!</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-50">

              {/* Contacto por WhatsApp */}
              <div className="flex flex-col items-center justify-center">
                <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 rounded-xl shadow-xl py-10 md:p-8 md:py-14">
                  <CardContent className="flex flex-col items-center justify-center h-full">
                    <div className="mb-6">
                      <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <FaWhatsapp className="h-12 w-12 text-white" />
                      </div>
                      <h2 className="text-xl font-semibold text-center text-green-600 pt-4">Contáctanos por WhatsApp</h2>
                      <p className="text-center text-muted-foreground mb-6">
                        Respuesta rápida y directa a través de WhatsApp. Estamos disponibles para atenderte.
                      </p>
                    </div>

                    <div className="space-y-10 w-full">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h3 className="font-medium mb-2 text-green-600">Horario de atención</h3>
                        <p className="text-sm text-muted-foreground">Lunes a Viernes: 9:00 - 18:00</p>
                        <p className="text-sm text-muted-foreground">Sábados: 9:00 - 13:00</p>
                      </div>

                      <RetroButton
                        onClick={ openWhatsApp }
                        className="w-full bg-green-400 hover:bg-green-500 p-3"
                      >
                        Chatear por WhatsApp
                      </RetroButton>

                      <p className="text-xs text-center text-muted-foreground">
                        Te responderemos lo más pronto posible durante nuestro horario de atención.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div> 
                <img src="/ContactPage/whatsapp.png" alt="Whatsapp" className="w-full h-full object-cover" />
              </div>

            </div>
          </div>
        </div>
      </main>
  )
}
