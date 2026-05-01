import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout() {
  const location = useLocation();

  const hideFooterRoutes = ["/contacto", "/productos", "/nosotros"];
  const hideFooter = hideFooterRoutes.includes( location.pathname );

  return (
     <div className="flex flex-col min-h-screen w-screen font-poppins bg-primary-gray">
      <Navbar />
        <Outlet /> 
      {!hideFooter && <Footer />}
    </div>
  );
}
