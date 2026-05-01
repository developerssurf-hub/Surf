import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from '@/app/pages/Landing';
import Products from './app/pages/Products';
import ContactUs from './app/pages/ContactUs';
import Promotions from './app/pages/Promotions';
import ScrollToTop from './app/components/ScrollToTop';
import Layout from './app/pages/Layout';
import Plantillas from './app/pages/plantillas';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/plantillas" element={<Plantillas />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/contacto" element={<ContactUs />} />
          <Route path="/promociones" element={<Promotions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
