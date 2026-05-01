import { useEffect, useState } from 'react';
import BackToTop from '../components/BackToTop';
import Hero from '../components/Hero';
import FAQSection from '../components/FAQSection';
import Inspiracion from '../components/inspiracion';
import HWW from '../components/hww';

import Trabajos from '../components/trabajos';
import Colegios from '../components/colegios';

import Mapa from '../components/mapa';



export default function Landing() {
  const [showBackToTop, setShowBackToTop] = useState(false)

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

  return (
    <div className="flex flex-col flex-1 bg-surf-white font-poppins">
      <Hero />
      <Inspiracion />
      <HWW />
      <Trabajos />
      <Colegios />

      <Mapa />
      <FAQSection />


      {showBackToTop && <BackToTop />}
    </div>
  );
}
