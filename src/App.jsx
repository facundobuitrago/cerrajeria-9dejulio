import logo from "./assets/cerrajeria-logo.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



export default function App() {
  
  useEffect(() => {
  AOS.init({ duration: 800 });
}, []);

  return (
    
    <div className="bg-gray-900 text-white min-h-screen">

      {/* Hero */}
      <nav className="fixed top-0 left-0 w-full bg-gray-950/80 backdrop-blur-md p-4 z-50"> </nav>

      <header className="text-center py-20 px-6 bg-gray-950">
        <img
          src={logo}
          alt="Cerrajería 9 de Julio"
          className="mx-auto w-32 mb-6 drop-shadow-xl"
        />
        <h1 className="text-4xl font-bold mb-4">Cerrajería 9 de Julio</h1>
        <p className="text-lg max-w-xl mx-auto text-gray-300">
          Fundada en 1965 — Compromiso, confianza y respeto por el cliente.
        </p>

        <a
            href="https://wa.me/5491144443479"
          className="inline-block mt-8 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-lg transition"
          target="_blank"
        >
          Solicitar Servicio
        </a>
      </header>

      {/* Servicios */}
      <section id="servicios" className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Servicios</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div data-aos="fade-up" className="card">
            <h3 className="text-xl font-bold mb-2">Copias de llaves</h3>
            <p className="text-gray-300">
              Duplication profesional de todo tipo de llaves.
            </p>
          </div>

          <div  data-aos="fade-up" className="card">
            <h3 className="text-xl font-bold mb-2">Aperturas y destrabes</h3>
            <p className="text-gray-300">
              Aperturas sin roturas, urgencias y trabajos a domicilio.
            </p>
          </div>

          <div data-aos="fade-up" className="card">
            <h3 className="text-xl font-bold mb-2">Cambios de combinación</h3>
            <p className="text-gray-300">
              Restauración, reparación, y actualización de sistemas de
              seguridad.
            </p>
          </div>

          <div data-aos="fade-up" className="card">
            <h3 className="text-xl font-bold mb-2">Apertura judicial</h3>
            <p className="text-gray-300">
              Trabajo certificado y con factura A para trámites legales.
            </p>
          </div>

          <div data-aos="fade-up" className="card">
            <h3 className="text-xl font-bold mb-2">Empresas</h3>
            <p className="text-gray-300">
              Mantenimiento, sistemas de acceso y soluciones corporativas.
            </p>
          </div>

          <div data-aos="fade-up" className="card">
            <h3 className="text-xl font-bold mb-2">Presupuestos sin cargo</h3>
            <p className="text-gray-300">
              Evaluación profesional sin ningún costo adicional.
            </p>
          </div>
        </div>
      </section>


      {/* Contacto */}
      <section id="contacto" className="py-20 px-6 bg-gray-950">
        <h2 className="text-3xl font-bold text-center mb-10">Contacto</h2>

        <div className="max-w-xl mx-auto bg-gray-800 p-8 rounded-xl shadow text-center">
          <p className="text-lg">
            <strong>Teléfono:</strong>{" "}
            <a href="https://wa.me/5491144443479" className="text-yellow-400" target="_blank">
              11 4444 3479
            </a>
          </p>

          <p className="text-lg mt-4">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:info@cerrajeria9dejulio.com.ar"
              className="text-yellow-400"
            >
              info@cerrajeria9dejulio.com.ar
            </a>
          </p>

          <div className="flex justify-center gap-6 mt-6">
            <a
              href="https://www.instagram.com/cerrajeria9dejulio/"
              target="_blank"
              className="text-yellow-400 hover:text-yellow-500"
            >
              Instagram
            </a>

            <a
              href="https://www.facebook.com/Cerrajeria9DeJulio"
              target="_blank"
              className="text-yellow-400 hover:text-yellow-500"
            >
              Facebook
            </a>
            
          </div>
        </div>
        <br />
        <iframe  
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1162.2047286646368!2d-58.54664593580911!3d-34.52287220393791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb098540cd9f7%3A0xf220656d2b5de94f!2sCerrajeria%209%20de%20Julio!5e0!3m2!1ses-419!2sar!4v1764025045648!5m2!1ses-419!2sar"
  className="w-full h-72 rounded-xl max-w-xl mx-auto bg-gray-800 p-8 rounded-xl shadow text-center"
  allowFullScreen=""
  loading="lazy"
></iframe>

      </section>

      <footer className="py-6 text-center text-gray-500 text-sm bg-black">
          <h3 className="text-lg font-bold mb-2">
            Dirección: Virrey Vertiz 2145, Villa Adelina, Buenos Aires, Argentina. <br />
            Horarios de Atención: Lunes a Viernes de 8:30hs a 13hs / 14hs a 19hs. Sabados 8:30hs a 13hs. Domingos cerrado.</h3> 
            <h4>CUIT 2029580658-4</h4>


        © 1965–2025 Cerrajería 9 de Julio — Todos los derechos reservados.
      </footer>
    </div>
  );
}
