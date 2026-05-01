import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Product {
    id: number;
    image: string;
    text: string;
    Description: string;
    category: string[];
    imgsmolde: string;
}

interface ProductModalProps {
    product: Product;
    onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [product.image, product.imgsmolde];

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="bg-white rounded-xl overflow-hidden max-w-6xl w-full max-h-[95vh] flex flex-col md:flex-row relative shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button Mobile */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 p-2 bg-white/80 backdrop-blur-md rounded-full shadow-lg md:hidden"
                >
                    <X className="w-6 h-6 text-[#11204b]" />
                </button>

                {/* Left Section: Image Carousel */}
                <div className="w-full md:w-[65%] h-[400px] md:h-[700px] relative bg-gray-50 overflow-hidden group">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentImageIndex}
                            src={images[currentImageIndex]}
                            alt={product.text}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="w-full h-full object-contain"
                        />
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    <button
                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-gray-100"
                    >
                        <ChevronLeft className="w-6 h-6 text-[#11204b]" />
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-gray-100"
                    >
                        <ChevronRight className="w-6 h-6 text-[#11204b]" />
                    </button>

                    {/* Pagination Dots */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                        {images.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentImageIndex(idx)}
                                className={`w-2.5 h-2.5 rounded-full transition-all ${
                                    currentImageIndex === idx ? 'bg-[#11204b] scale-125' : 'bg-[#11204b]/30'
                                }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Right Section: Content */}
                <div className="w-full md:w-[35%] p-6 md:p-10 flex flex-col justify-start relative bg-white">
                    {/* Close Button Desktop */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors hidden md:block"
                    >
                        <X className="w-6 h-6 text-[#11204b]" />
                    </button>

                    <div className="mb-8 hidden md:block">
                        <img src="/logo.png" alt="Surfsafari Logo" className="h-16 w-auto object-contain" />
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#11204b] uppercase tracking-tight">
                            {product.text}
                        </h2>
                        
                        <div className="flex flex-wrap gap-2 pt-2">
                            {product.category.map((cat) => (
                                <span 
                                    key={cat} 
                                    className="px-4 py-1.5 bg-[#f4f4f4] text-black text-sm rounded-full font-medium capitalize"
                                >
                                    {cat}
                                </span>
                            ))}
                        </div>

                        <p className="text-[#11204b] text-base md:text-lg leading-relaxed pt-4 font-poppins">
                            {product.Description}
                        </p>
                    </div>

                    <div className="mt-auto pt-8 md:pt-12 text-sm text-gray-400">
                        * Imágenes referenciales. El molde puede variar según el talle.
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
