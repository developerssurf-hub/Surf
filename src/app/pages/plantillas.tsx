import TemplateGrid from "../components/TemplateGrid";
import { Download } from 'lucide-react';

export default function Plantillas() {
    return (
        <main className="relative min-h-screen py-12 pb-20 font-poppins overflow-hidden">
            <div className="flex justify-center">
                <div className="container">
                    <div className="rounded-lg overflow-hidden mt-20">
                        <img src="hero/plantillas.png" className="w-full h-full object-cover" alt="Plantillas" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 ">
                        <div className="col-span-1">
                            <h2 className='text-xl md:text-2xl font-bold'>Descargar plantillas</h2>
                        </div>
                        <div className="col-span-2">
                            <p className='text-sm md:text-base font-poppins'>Todos nuestros diseños son totalmente originales, creados junto a padres y estudiantes para capturar lo que realmente quieren expresar.</p>
                        </div>
                    </div>

                    <TemplateGrid />


                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 " id="recursos">
                        <div className="col-span-1">
                            <h2 className='text-xl md:text-2xl font-bold'>Recursos adicionales</h2>
                        </div>
                        <div className="col-span-2">
                            <p className='text-sm md:text-base font-poppins'>Encontrá todos los recursos disponibles para descargar. Colores de telas, tipografias y bordados.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                        {/* Bordados */}
                        <a
                            href="/descargas/assets/tipos de bordado.jpg"
                            download="Tipos de Bordado.jpg"
                            className="group cursor-pointer"
                        >
                            <div className="aspect-[1/1] bg-gray-100 rounded-2xl overflow-hidden mb-4 relative border border-gray-200">
                                <img
                                    src="/moldes/bordados.png"
                                    alt="bordados"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <Download className="w-6 h-6" />
                                    </div>
                                    <span className="text-white font-bold text-lg">Descargar</span>
                                </div>
                            </div>
                            <p className="text-center font-bold text-surf-blue">Bordados</p>
                        </a>

                        {/* Colores */}
                        <a
                            href="/descargas/assets/CARTA COLORES TELAS 2027.jpg"
                            download="Carta de Colores 2027.jpg"
                            className="group cursor-pointer"
                        >
                            <div className="aspect-[1/1] bg-gray-100 rounded-2xl overflow-hidden mb-4 relative border border-gray-200">
                                <img
                                    src="/moldes/color.png"
                                    alt="colores"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <Download className="w-6 h-6" />
                                    </div>
                                    <span className="text-white font-bold text-lg">Descargar</span>
                                </div>
                            </div>
                            <p className="text-center font-bold text-surf-blue">Colores de telas</p>
                        </a>

                        {/* Tipografias */}
                        <a
                            href="/descargas/assets/TIPOGRAFIAS 2027.jpg"
                            download="Tipografias 2027.jpg"
                            className="group cursor-pointer"
                        >
                            <div className="aspect-[1/1] bg-gray-100 rounded-2xl overflow-hidden mb-4 relative border border-gray-200">
                                <img
                                    src="/moldes/font.png"
                                    alt="tipografias"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <Download className="w-6 h-6" />
                                    </div>
                                    <span className="text-white font-bold text-lg">Descargar</span>
                                </div>
                            </div>
                            <p className="text-center font-bold text-surf-blue">Tipografías</p>
                        </a>
                    </div>

                </div>
            </div>

        </main>
    )
}