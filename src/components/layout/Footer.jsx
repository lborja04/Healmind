import React from 'react';
import { Link } from 'react-router-dom';
import { HeartPulse, Twitter, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-teal-50 text-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
             <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-teal-600">
                <HeartPulse className="h-8 w-8 text-teal-500" />
                <span>Healmind</span>
            </Link>
            <p className="text-sm">Conectando mentes con el bienestar.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-teal-600"><Twitter size={20} /></a>
              <a href="#" className="text-gray-500 hover:text-teal-600"><Instagram size={20} /></a>
              <a href="#" className="text-gray-500 hover:text-teal-600"><Facebook size={20} /></a>
            </div>
          </div>
          <div>
            <p className="font-semibold text-gray-800">Plataforma</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/find-psychologist" className="hover:text-teal-600">Buscar Psicólogos</Link></li>
              <li><Link to="/pricing" className="hover:text-teal-600">Precios</Link></li>
              <li><Link to="/register" className="hover:text-teal-600">Únete como terapeuta</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-gray-800">Compañía</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-teal-600">Sobre Nosotros</Link></li>
              <li><Link to="/contact" className="hover:text-teal-600">Contacto</Link></li>
              <li><Link to="#" className="hover:text-teal-600">Privacidad</Link></li>
            </ul>
          </div>
           <div>
            <p className="font-semibold text-gray-800">Recursos</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="#" className="hover:text-teal-600">Blog</Link></li>
              <li><Link to="#" className="hover:text-teal-600">Testimonios</Link></li>
              <li><Link to="#" className="hover:text-teal-600">FAQ</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-teal-200 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Healmind. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;