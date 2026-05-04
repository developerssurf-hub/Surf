import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppWidget() {
  const phoneNumber = "+5491133777783";
  const message = "¡Hola! Me gustaría recibir más información.";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+/g, "")}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 p-3 bg-[#25D366] text-white hover:bg-[#128C7E] transition-all z-50 rounded-full 
          shadow-[3px_3px_0px_rgba(0,0,0,0.8)] translate-x-[-1px] translate-y-[-1px] 
          hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_rgba(0,0,0,0.8)] 
          active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_rgba(0,0,0,0.8)]
          flex items-center justify-center group"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className="w-7 h-7" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 ease-in-out whitespace-nowrap font-medium">
        WhatsApp
      </span>
    </a>
  );
}
