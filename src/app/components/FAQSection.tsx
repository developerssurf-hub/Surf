import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

type Questions = {
  id: string
  question: string
  answer: string
}

const questions = [
  {
    id: "1",
    question: "¿Cómo contratamos el servicio?",
    answer:
      "Una vez que se deciden por nosotros, se arma un grupo de WhatsApp de 5 integrantes (papas y alumnos) -siempre debe haber un mayor-. Sumamos 2 teléfonos de la empresa. Por este grupo va a circular TODA la información. Se firma un contrato grupal con todos los datos, garantías, pagos y fecha de entrega."
  },
  {
    id: "2",
    question: "¿Que formas de pago tienen?",
    answer:
      "Pueden abonar en efectivo, en un pago o en cuotas. Pueden hacer Transferencias bancarias. SURFSAFARI no trabaja con tarjetas de crédito. Los pagos y contratos son grupales.  Juntan el dinero correspondiente en una, dos o tres cuentas y transfieren en las fechas oportunas. Elaboramos factura A o B."
  },
  {
    id: "3",
    question: "¿Cómo pedimos el diseño que nos interesa?",
    answer:
      "Una vez que firman el contrato la diseñadora les va armando varios modelos para que voten, se aprueba el diseño final y este es el que se adjunta al contrato como definitivo.  El diseño no se considera aprobado hasta que en el grupo de WhatsApp no figura como tal."
  },
  {
    id: "4",
    question: "¿Hacen diseños personalizados?",
    answer:
      "Si. Tenemos una diseñadora que se encarga de todo."
  },
  {
    id: "5",
    question: "¿Cómo se toman los talles?",
    answer:
      "Hay dos maneras, se les envía una curva de talles de cada prenda y se dejan unos días para que se prueben; o se les envía una planilla con las medidas de las prendas terminadas y la explicación para tomar las medidas sobre una prenda propia."
  },
  {
    id: "6",
    question: "¿El precio varía según el diseño?",
    answer:
      "Solo en algunos casos y bordados o estampados especiales."
  },
  {
    id: "7",
    question: "¿Hacen promociones?",
    answer:
      "Si.  Tenemos liberados 100% - descuentos por hermanos y banderas de regalo para la promo según la cantidad de chicos."
  },
  {
    id: "8",
    question: "¿Tienen un mínimo de prendas?",
    answer:
      "Si.  Pero siempre podemos ver los casos especiales… no dudes en consultar"
  }
]

export default function FAQSection() {
  return (
    <div className="flex flex-col justify-center items-center py-20 px-6 md:px-20 bg-surf-red text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-poppins font-bold mb-4">Preguntas frecuentes</h2>
        <div className='w-20 h-1 bg-surf-white mx-auto mb-4'></div>
      </div>

      <div className="container">

        <Accordion type="single" collapsible className="border border-black rounded-md overflow-hidden">
          {questions.map((question: Questions) => (

            <AccordionItem value={question.id} className="border-b border-black">
              <AccordionTrigger className="px-6 py-4 rounded-none hover:bg-surf-yellow data-[state=open]:bg-surf-yellow text-xl transition-colors text-black duration-400">
                {question.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2 text-base bg-surf-yellow">
                {question.answer}
              </AccordionContent>
            </AccordionItem>

          ))}
        </Accordion>

      </div>
    </div>
  )
}
