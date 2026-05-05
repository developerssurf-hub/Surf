import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Filter } from '../components/Filter';
import BackToTop from '../components/BackToTop';
import { FilterProductCard, type Product } from '../components/FilterProductCard';
import { products } from '../components/productList';
import { ProductModal } from '../components/ProductModal';
import RetroButton from '../components/RetroButton';

export default function Products() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("todos")
  const [productosFiltrados, setProductosFiltrados] = useState(products)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setShowBackToTop(true)
      } else {
        setShowBackToTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (categoriaSeleccionada.includes("todos")) {
      setProductosFiltrados(products)
    } else {
      const filtrados = products.filter((product) => product.category.includes(categoriaSeleccionada))
      setProductosFiltrados(filtrados)
    }
  }, [categoriaSeleccionada])

  return (
    <main className="relative min-h-screen py-12 font-poppins overflow-hidden">
      <div className="container mx-auto z-10 px-4 pt-22">
        <img src="hero/Productos.png" className="w-full h-full object-cover" alt="Productos" />

        <div className=" my-6 w-full grid grid-cols-1 md:grid-cols-3 ">
          <div className="text-left ">
            <h2 className='text-3xl font-bold'>Nuestro catalogo</h2>
          </div>
          <div className="col-span-2">
            <p className="text-sm md:text-base font-poppins">Todos nuestros diseños son totalmente originales, creados junto a padres y estudiantes para capturar lo que realmente quieren expresar.</p>
          </div>
        </div>

        <Filter categoriaSeleccionada={categoriaSeleccionada} setCategoriaSeleccionada={setCategoriaSeleccionada} />

        <div className="mt-8">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <AnimatePresence>
              {productosFiltrados.map((product) => (
                <FilterProductCard
                  key={product.id}
                  product={product}
                  onClick={(p) => setSelectedProduct(p)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>

      <div className="container mx-auto z-10 px-4 pt-22 flex justify-center">
        <RetroButton url='https://www.instagram.com/surfsafariegresados?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' text='MAS DISEÑOS' />
      </div>

      {showBackToTop && <BackToTop />}
    </main>
  )
}
