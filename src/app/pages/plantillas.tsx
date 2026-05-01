import TemplateGrid from "../components/TemplateGrid";

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
                </div>
            </div>

        </main>
    )
}