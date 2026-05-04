import { motion } from "framer-motion";
import Logobg from "../../components/ui/logobg";



const COLEGIOS_DATA = [
    { name: "Instituto Padre Elizalde", logo: "/colegios/1.jpg" },
    { name: "IPE Humanidades", logo: "/colegios/2.jpg" },
    { name: "Colegio Belgrano Ecuador", logo: "/colegios/3.jpg" },
    { name: "Instituto Gabriela Mistral", logo: "/colegios/4.jpg" },
    { name: "Inmaculada Concepción Lanús", logo: "/colegios/5.jpeg" },
    { name: "Instituto Belgrano", logo: "/colegios/6.jpeg" },

    { name: "Ceferino Namuncura Boulogne", logo: "/colegios/ceferino namuncura boulogne.jfif" },
    { name: "Colegio de los Buenos Aires Pilar", logo: "/colegios/colegio de los buenos aires pilar.jfif" },
    { name: "Colegio Racing Club", logo: "/colegios/colegio racing club.jfif" },
    { name: "ICEA San Martin", logo: "/colegios/icea san martin.jfif" },
    { name: "Instituto General Jose de San Martin Jose C Paz", logo: "/colegios/instituto general jose de san martin jose c paz.jfif" },
    { name: "IPET - Laboulaye - Córdoba", logo: "/colegios/laboulaye ipet.jfif" },
    { name: "Salto Buenos Aires", logo: "/colegios/salto buenos aires.jfif" },
    { name: "San Antonio Oeste Rio Negro", logo: "/colegios/san antonio oeste rio negro.jfif" },
    { name: "Villa Carlos Paz", logo: "/colegios/villa carlos paz.jfif" },

];

export default function Colegios() {
    // Duplicate the data to create a seamless infinite loop
    const duplicatedData = [...COLEGIOS_DATA, ...COLEGIOS_DATA];

    return (
        <section className="w-full py-20 bg-surf-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-12 mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-surf-blue font-poppins">
                    Nosotros hacemos la prenda, vos la historia
                </h2>
            </div>

            {/* Carousel Container */}
            <div className="relative flex">
                <motion.div
                    className="flex gap-12 md:gap-24 items-center whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        duration: 100,
                        ease: "linear"
                    }}
                    whileHover={{ transition: { duration: 100 } }} // Slow down on hover
                >
                    {duplicatedData.map((colegio, index) => (
                        <div key={index} className="flex flex-col items-center min-w-[180px] md:min-w-[220px]">
                            <div className="mb-4 drop-shadow-md hover:drop-shadow-xl transition-all hover:scale-105 duration-300">
                                <Logobg bgimage={colegio.logo} width={280} />
                            </div>
                            <p className="text-center font-bold text-surf-blue text-lg">
                                {colegio.name}
                            </p>
                        </div>
                    ))}
                </motion.div>

                {/* Fade overlays for the edges */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surf-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-surf-white to-transparent z-10 pointer-events-none"></div>
            </div>
        </section>
    );
}