import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { HeartPulse } from 'lucide-react';

const navItems = [
  { name: 'Buscar Psicólogo', path: '/find-psychologist' },
  { name: 'Precios', path: '/pricing' },
  { name: 'Sobre Nosotros', path: '/about' },
  { name: 'Contacto', path: '/contact' },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-teal-600">
            <HeartPulse className="h-8 w-8 text-teal-500" />
            <span>Healmind</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-base font-medium transition-colors duration-300 ${
                  location.pathname === item.path
                    ? 'text-teal-600'
                    : 'text-gray-600 hover:text-teal-500'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" asChild>
                <Link to="/login">Iniciar Sesión</Link>
            </Button>
            <Button asChild className="bg-teal-500 hover:bg-teal-600 text-white">
                <Link to="/register">Registrarse</Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;