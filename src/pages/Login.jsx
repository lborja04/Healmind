import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  // Usuarios simulados
  const cuentas = [
    {
      email: "paciente@demo.com",
      password: "demo123",
      rol: "paciente",
      nombre: "María"
    },
    {
      email: "psicologo@demo.com",
      password: "demo123",
      rol: "psicologo",
      nombre: "Ana"
    }
  ];


  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;
    const usuario = cuentas.find(
      (cuenta) => cuenta.email === email && cuenta.password === password
    );

    if (usuario) {
      toast({
        title: "✅ Inicio de sesión exitoso",
        description: `Bienvenido, ${usuario.nombre}`,
      });

      // Guardar sesión simulada (opcional)
      localStorage.setItem("usuario", JSON.stringify(usuario));

      // Redirigir según rol
      if (usuario.rol === "paciente") {
        navigate("/dashboard-paciente");
      } else if (usuario.rol === "psicologo") {
        navigate("/dashboard-psicologo");
      }

    } else {
      toast({
        title: "❌ Error de autenticación",
        description: "Correo o contraseña incorrectos.",
      });
    }
  };


  return (
    <>
      <Helmet>
        <title>Iniciar Sesión - HealMind</title>
        <meta name="description" content="Inicia sesión en HealMind para acceder a tu dashboard personal y gestionar tus citas con psicólogos profesionales." />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link to="/" className="flex items-center justify-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-3 rounded-lg">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <span className="text-3xl font-bold text-gradient">HealMind</span>
            </Link>
            <h2 className="text-3xl font-bold text-gray-900">Bienvenido de vuelta</h2>
            <p className="mt-2 text-gray-600">Inicia sesión en tu cuenta para continuar</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-green-100 shadow-lg">
              <CardHeader>
                <CardTitle className="text-center text-xl">Iniciar Sesión</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Correo Electrónico
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="pl-10"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                      Contraseña
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        required
                        value={formData.password}
                        onChange={handleInputChange}
                        className="pl-10 pr-10"
                        placeholder="Tu contraseña"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                        Recordarme
                      </label>
                    </div>
                    <button
                      type="button"
                      onClick={() => toast({
                        title: "🚧 Esta funcionalidad no está implementada aún",
                        description: "¡Pero no te preocupes! Será implementada pronto! 🚀",
                      })}
                      className="text-sm text-green-600 hover:text-green-500"
                    >
                      ¿Olvidaste tu contraseña?
                    </button>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-lg py-3"
                  >
                    Iniciar Sesión
                  </Button>
                </form>

                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">O continúa con</span>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <Button
                      type="button"
                      onClick={() => toast({
                        title: "🚧 Esta funcionalidad no está implementada aún",
                        description: "¡Pero no te preocupes! Será implementada pronto! 🚀¡Pero no te preocupes! Será implementada pronto! 🚀",
                      })}
                      variant="outline"
                      className="w-full"
                    >
                      <img  className="h-5 w-5 mr-2" alt="Google logo" src="https://images.unsplash.com/photo-1646627927874-be8c13d0ae1a" />
                      Google
                    </Button>
                    <Button
                      type="button"
                      onClick={() => toast({
                        title: "🚧 Esta funcionalidad no está implementada aún",
                        description: "¡Pero no te preocupes! Será implementada pronto! 🚀",
                      })}
                      variant="outline"
                      className="w-full"
                    >
                      <img  className="h-5 w-5 mr-2" alt="Facebook logo" src="https://images.unsplash.com/photo-1684577088653-f14e310d841b" />
                      Facebook
                    </Button>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    ¿No tienes una cuenta?{' '}
                    <Link to="/registrarse" className="font-medium text-green-600 hover:text-green-500">
                      Regístrate aquí
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-green-50 rounded-lg p-4"
          >
            <h3 className="text-sm font-medium text-green-800 mb-2">Acceso rápido para demo:</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-green-700">Paciente:</span>
                <span className="text-green-600">paciente@demo.com</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-700">Psicólogo:</span>
                <span className="text-green-600">psicologo@demo.com</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-700">Contraseña:</span>
                <span className="text-green-600">demo123</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </>
  );
};

export default Login;