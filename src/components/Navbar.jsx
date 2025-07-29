import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Heart, User, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const usuario = JSON.parse(localStorage.getItem("usuario"));


  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Buscar Psicólogos', path: '/buscar-psicologos' },
    { name: 'Sobre Nosotros', path: '/sobre-nosotros' },
    { name: 'Contacto', path: '/contacto' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-green-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-2 rounded-lg">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gradient">HealMind</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {!usuario &&
              navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-green-600 ${
                    isActive(item.path) ? 'text-green-600' : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))
            }
          </div>


          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {usuario ? (
              <>
                <span className="text-sm text-gray-700 capitalize">Hola, {usuario.nombre}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    localStorage.removeItem("usuario");
                    window.location.href = "/"; // o navigate('/')
                  }}
                  className="text-red-600"
                >
                  Cerrar Sesión
                </Button>
              </>
            ) : (
              <>
                <Link to="/iniciar-sesion">
                  <Button variant="ghost" size="sm" className="text-gray-700">
                    <User className="h-4 w-4 mr-2" />
                    Iniciar Sesión
                  </Button>
                </Link>
                <Link to="/registrarse">
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    Registrarse
                  </Button>
                </Link>
              </>
            )}
          </div>


          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden py-4 border-t border-green-100"
          >
            <div className="flex flex-col space-y-4">
              {!usuario &&
                navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm font-medium transition-colors hover:text-green-600 ${
                      isActive(item.path) ? 'text-green-600' : 'text-gray-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))
              }

              <div className="flex flex-col space-y-2 pt-4 border-t border-green-100">
                {usuario ? (
                  <>
                    <span className="text-sm text-gray-700 capitalize px-2">Hola, {usuario.nombre}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start text-red-600"
                      onClick={() => {
                        localStorage.removeItem("usuario");
                        window.location.href = "/";
                      }}
                    >
                      Cerrar Sesión
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/iniciar-sesion" onClick={() => setIsOpen(false)}>
                      <Button variant="ghost" size="sm" className="w-full justify-start text-gray-700">
                        <User className="h-4 w-4 mr-2" />
                        Iniciar Sesión
                      </Button>
                    </Link>
                    <Link to="/registrarse" onClick={() => setIsOpen(false)}>
                      <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">
                        Registrarse
                      </Button>
                    </Link>
                  </>
                )}
              </div>

            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;