import { motion } from "framer-motion";
import Logobg from "../../components/ui/logobg";

const COLEGIOS_DATA = [
    { name: "Colegio San José", logo: "/colegios/1.jpg" },
    { name: "Instituto Santa María", logo: "/colegios/2.jpg" },
    { name: "Colegio Nacional", logo: "/colegios/3.jpg" },
    { name: "Escuela Técnica N°1", logo: "/colegios/4.jpg" },
    { name: "Colegio del Sol", logo: "/colegios/5.jpeg" },
    { name: "Instituto Belgrano", logo: "/colegios/6.jpeg" },
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
                        duration: 30,
                        ease: "linear"
                    }}
                    whileHover={{ transition: { duration: 60 } }} // Slow down on hover
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