import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gradient">HealMind</span>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              Conectamos personas con psicólogos profesionales para hacer la salud mental más accesible, 
              confiable y personalizada. Tu bienestar es nuestra prioridad.
            </p>
            <div className="flex space-x-4">
              <div className="bg-green-100 p-2 rounded-lg hover:bg-green-200 transition-colors cursor-pointer">
                <Facebook className="h-5 w-5 text-green-600" />
              </div>
              <div className="bg-green-100 p-2 rounded-lg hover:bg-green-200 transition-colors cursor-pointer">
                <Twitter className="h-5 w-5 text-green-600" />
              </div>
              <div className="bg-green-100 p-2 rounded-lg hover:bg-green-200 transition-colors cursor-pointer">
                <Instagram className="h-5 w-5 text-green-600" />
              </div>
              <div className="bg-green-100 p-2 rounded-lg hover:bg-green-200 transition-colors cursor-pointer">
                <Linkedin className="h-5 w-5 text-green-600" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-lg font-semibold text-gray-900 mb-4 block">Enlaces Rápidos</span>
            <div className="space-y-3">
              <Link to="/" className="block text-gray-600 hover:text-green-600 transition-colors">
                Inicio
              </Link>
              <Link to="/buscar-psicologos" className="block text-gray-600 hover:text-green-600 transition-colors">
                Buscar Psicólogos
              </Link>
              <Link to="/sobre-nosotros" className="block text-gray-600 hover:text-green-600 transition-colors">
                Sobre Nosotros
              </Link>
              <Link to="/precios" className="block text-gray-600 hover:text-green-600 transition-colors">
                Precios
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <span className="text-lg font-semibold text-gray-900 mb-4 block">Contacto</span>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-600" />
                <span className="text-gray-600">hola@healmind.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-600" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-green-600" />
                <span className="text-gray-600">Guayaquil, Ecuador</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-100 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © 2024 HealMind. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-gray-600 text-sm hover:text-green-600 transition-colors cursor-pointer">
                Política de Privacidad
              </span>
              <span className="text-gray-600 text-sm hover:text-green-600 transition-colors cursor-pointer">
                Términos de Servicio
              </span>
              <span className="text-gray-600 text-sm hover:text-green-600 transition-colors cursor-pointer">
                Código de Ética
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;