import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, ImageIcon } from 'lucide-react';

interface Template {
    id: string;
    name: string;
    type: string;
    image?: string;
    folder: string;
}

const templates: Template[] = [
    { id: '1', name: 'Remera', type: 'remera', folder: 'remera', image: 'Remera' },
    { id: '2', name: 'Campera', type: 'campera', folder: 'campera', image: 'Campera' },
    { id: '3', name: 'Buzo', type: 'buzo', folder: 'buzo', image: 'buzo' },
    { id: '4', name: 'Chomba', type: 'chomba', folder: 'chomba', image: 'chomba' },
    { id: '5', name: 'Campera universitaria', type: 'campera universitaria', folder: 'campera-universitaria', image: 'campera-universitaria' },
];

export default function TemplateGrid() {
    const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

    return (
        <div className="py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {templates.map((template) => (
                    <motion.div
                        key={template.id}
                        whileHover={{ y: -5 }}
                        className="cursor-pointer group"
                        onClick={() => setSelectedTemplate(template)}
                    >
                        <div className="aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden mb-4 relative border border-gray-200">
                            <img
                                src={`/moldes/${template.image}.jpg`}
                                alt={template.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                onError={(e) => {
                                    // Fallback if image fails
                                    e.currentTarget.style.display = 'none';
                                }}
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                        </div>
                        <div className="flex justify-between items-center px-2">
                            <h3 className="text-lg font-bold text-gray-900">Plantilla {template.name}</h3>
                            <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Download className="w-4 h-4" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedTemplate && (
                    <TemplateModal
                        template={selectedTemplate}
                        onClose={() => setSelectedTemplate(null)}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}

function TemplateModal({ template, onClose }: { template: Template; onClose: () => void }) {
    const formats = [
        { name: 'PNG', icon: <ImageIcon className="w-5 h-5" />, ext: 'png' },
        { name: 'JPG', icon: <ImageIcon className="w-5 h-5" />, ext: 'jpg' },
        { name: 'PDF', icon: <FileText className="w-5 h-5" />, ext: 'pdf' },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="bg-white rounded-[2rem] overflow-hidden max-w-5xl w-full max-h-[90vh] flex flex-col md:flex-row shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Lateral Image Section */}
                <div className="hidden md:block md:w-1/3 bg-gray-100 relative min-h-[300px] md:min-h-full border-r border-gray-100">
                    <img
                        src={`/moldes/${template.image}_full.jpg`}
                        alt={template.name}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content Section */}
                <div className="md:w-2/3 p-8 md:p-12 overflow-y-auto">
                    <div className="flex justify-between items-start mb-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                            Plantilla {template.name.toLowerCase()}
                        </h2>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <p className="text-gray-600 mb-10 text-lg leading-relaxed font-poppins">
                        Elegí el formato que mejor se adapte a tu flujo de trabajo y comenzá a crear sin límites. Nuestras plantillas de {template.name.toLowerCase()}s están preparadas para que puedas bocetar, personalizar y llevar tus ideas al siguiente nivel, ya sea que trabajes de forma digital o manual. Disponibles en JPG y PNG para usos rápidos y PDF para impresión o referencia, todas las opciones mantienen la calidad y proporciones necesarias para un diseño preciso.
                    </p>

                    <div className="space-y-4">
                        {formats.map((format) => (
                            <a
                                key={format.name}
                                href={`/descargas/${template.folder}/plantilla-${template.folder}.${format.ext}`}
                                download
                                className="flex items-center justify-between p-5 bg-white border border-gray-200 rounded-2xl hover:border-black hover:bg-gray-50 transition-all group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 group-hover:bg-black group-hover:text-white transition-colors">
                                        {format.icon}
                                    </div>
                                    <span className="font-bold text-lg">{format.name}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-400 group-hover:text-black transition-colors">
                                    <span className="text-sm font-medium">Descargar</span>
                                    <Download className="w-5 h-5" />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
