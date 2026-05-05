import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pages = [

    { path: "/productos", name: "Productos" },
    { path: "/plantillas", name: "Plantillas" },
    { path: "/contacto", name: "Contáctanos" },
  ]

  const location = useLocation()
  const [selectedPage, setSelectedPage] = useState(location.pathname)



  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setSelectedPage(location.pathname)
  }, [location.pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-999999 transition-all duration-300 ${isScrolled ? "bg-surf-white shadow-lg py-3" : "bg-transparent py-4 md:py-6 "
        }`}
    >
      <div className="container px-4 md:px-12 mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <div
            className={`transition-all duration-300 ${isScrolled ? "w-12 h-12 flex items-center justify-center" : "w-20 h-20 flex items-center justify-center"}`}
          >
            <img src="/logo.png" alt="Logo" />
          </div>
        </Link>

        <button
          className={`md:hidden transition-colors duration-300 ${isScrolled ? "text-surf-blue" : "text-surf-blue"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <nav
          className={`hidden md:flex space-x-4 lg:space-x-8 font-bold transition-colors duration-300 ${isScrolled ? "text-surf-lightblue" : "text-surf-lightblue"
            }`}
        >
          {pages.map(({ path, name }) => (
            <Link key={path} to={path} className="relative" >
              <button
                onClick={() => setSelectedPage(path)}
                className="relative flex items-center justify-center px-0 py-0 rounded-md text-sm font-medium"
              >
                {selectedPage === path && (
                  <motion.div
                    layoutId="activePill2"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="absolute inset-0 bg-blue-400 rounded-md shadow-[3px_3px_0px_rgba(0,0,0,0.8)]"
                  />
                )}
                <span
                  className={`relative z-10 px-4 py-3 capitalize transition-colors ${selectedPage === path
                    ? "text-white"
                    : "text-gray-700 hover:bg-gray-100 rounded-md"
                    }`}
                >
                  {name}
                </span>
              </button>
            </Link>
          ))}

        </nav>
      </div>

      <div
        className={`md:hidden fixed top-0 right-0 h-full w-80 bg-surf-white shadow-2xl transform transition-transform duration-300 ease-in-out z-40 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <Link to="/">
              <img src="/logo.png" alt="Logo" className="w-12 h-12" />
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 px-6 py-8">
            <div className="space-y-6">

              {pages.map(({ path, name }) => (
                <Link
                  key={path}
                  to={path}
                  className="block text-xl font-medium text-gray-800 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {name}
                </Link>
              ))}

            </div>
          </nav>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  )
}
