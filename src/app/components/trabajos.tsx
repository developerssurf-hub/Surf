import { useState, useEffect } from 'react';
import RetroButton from './RetroButton';
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Trabajos = () => {
    const [centerIndex, setCenterIndex] = useState(0);
    const [topIndex, setTopIndex] = useState(0);

    // Placeholder images - to be replaced by the user
    const centralImages = [
        "trabajos/central5.png",
        "trabajos/central1.png",
        "trabajos/central2.png",
        "trabajos/central3.png",
        "trabajos/central4.png",
        "trabajos/central6.png"
    ];

    const superiorImages = [
        "trabajos/inspo1.png",
        "trabajos/inspo2.png",
        "trabajos/inspo3.png",
        "trabajos/inspo4.png",
    ];

    const features = [
        {
            title: "Tipografía personalizada",
            image: "trabajos/features1.png",
        },
        {
            title: "Colores a elección",
            image: "trabajos/features2.png",
        },
        {
            title: "Sin limite para la creatividad",
            image: "trabajos/features3.png",
        }
    ];

    // Alternating interval logic
    useEffect(() => {
        const interval = setInterval(() => {
            setCenterIndex((prev) => (prev + 1) % 4);
            // Delay the top gallery change slightly for an "alternating" feel
            setTimeout(() => {
                setTopIndex((prev) => (prev + 1) % 4);
            }, 2000);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full min-h-screen bg-[#0A0F1D] text-white py-16 px-4 md:px-12 overflow-hidden">
            {/* Grid background effect */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                    backgroundSize: '60px 60px'
                }}>
            </div>

            {/* Subtle glow effects */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-surf-blue/20 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-surf-orange/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10 items-center">

                {/* Left Column: Info & Features */}
                <div className="flex flex-col gap-10 ">
                    <div className="space-y-6">
                        <div className="relative inline-block">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="font-surf-font text-[100px] md:text-[120px] text-surf-orange leading-none drop-shadow-[0_5px_15px_rgba(236,98,6,0.4)]"
                            >
                                Disena
                            </motion.h2>
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="absolute -top-2 left-[60%] w-24 h-2 bg-surf-orange rounded-full origin-left"
                            ></motion.div>
                        </div>
                        <div className="">
                            <h3 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight">
                                Tu conjunto como quieras
                            </h3>
                            <p className="text-sm md:text-base text-gray-400 max-w-sm leading-relaxed">
                                Cada curso tiene su estilo, por eso trabajamos con diseños totalmente personalizados.
                            </p>
                        </div>
                    </div>

                    {/* Features List - Responsive List View */}
                    <div className="flex flex-col gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="relative h-24 md:h-28 rounded-2xl overflow-hidden group cursor-pointer border border-white/5"
                            >
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1D] via-[#0A0F1D]/80 to-transparent flex items-center p-8 backdrop-blur-[2px]">
                                    <span className="text-xl md:text-2xl font-semibold tracking-wide">{feature.title}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Center Column: Central Gallery */}
                <div className="flex items-center justify-center relative  py-12 md:py-0">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={centerIndex}
                            initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                            exit={{ opacity: 0, scale: 1.2, rotateY: -45 }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                            className="w-full relative z-20"
                        >
                            <img
                                src={centralImages[centerIndex]}
                                alt="Diseño central"
                                className="w-full max-h-[600px] object-contain drop-shadow-[0_35px_60px_rgba(0,0,0,0.6)]"
                            />
                        </motion.div>
                    </AnimatePresence>

                    {/* Floating Plus Icon with Pulse */}
                    <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 z-30 hidden lg:block">
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="bg-[#11204B]/80 backdrop-blur-xl p-5 rounded-full border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
                        >
                            <Plus className="w-12 h-12 text-white" />
                        </motion.div>
                    </div>
                </div>

                {/* Right Column: Superior Gallery & Buttons */}
                <div className="flex flex-col justify-between gap-12">
                    {/* Superior Gallery */}
                    <div className="relative h-56 md:h-72 rounded-[32px] overflow-hidden border border-white/10 shadow-2xl group">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={topIndex}
                                src={superiorImages[topIndex]}
                                alt="Inspiración"
                                initial={{ opacity: 0, filter: "blur(10px)" }}
                                animate={{ opacity: 1, filter: "blur(0px)" }}
                                exit={{ opacity: 0, filter: "blur(10px)" }}
                                transition={{ duration: 1 }}
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                            />
                        </AnimatePresence>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1D]/60 via-transparent to-transparent"></div>
                    </div>

                    {/* Buttons Section */}
                    <div className="flex flex-col gap-5">
                        <RetroButton
                            text="Cotizar ahora"
                            bgColor="orange"
                            className="w-full text-2xl py-5 rounded-2xl shadow-[0_10px_20px_rgba(236,98,6,0.3)]"
                        />
                        <Button
                            variant="outline"
                            className="w-full text-xl py-7 rounded-2xl border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all text-white"
                        >
                            Descargar plantillas
                        </Button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Trabajos;