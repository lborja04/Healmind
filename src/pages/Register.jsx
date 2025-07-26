import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, User, Heart, Users, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

const Register = () => {
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [userType, setUserType] = useState('patient');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    birthDate: '',
    gender: '',
    // Psychologist specific fields
    license: '',
    experience: '',
    specialty: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Las contraseñas no coinciden",
        variant: "destructive"
      });
      return;
    }
    toast({
      title: "🚧 Esta funcionalidad no está implementada aún",
      description: "¡Pero no te preocupes! Será implementada pronto! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>Registrarse - HealMind</title>
        <meta name="description" content="Únete a HealMind como paciente o psicólogo. Crea tu cuenta gratuita y comienza tu viaje hacia el bienestar mental." />
      </Helmet>

      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <Link to="/" className="flex items-center justify-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-3 rounded-lg">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <span className="text-3xl font-bold text-gradient">HealMind</span>
            </Link>
            <h2 className="text-3xl font-bold text-gray-900">Únete a HealMind</h2>
            <p className="mt-2 text-gray-600">Crea tu cuenta y comienza tu viaje hacia el bienestar mental</p>
          </motion.div>

          {/* User Type Selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={() => setUserType('patient')}
                className={`p-6 rounded-lg border-2 transition-all ${
                  userType === 'patient'
                    ? 'border-green-600 bg-green-50'
                    : 'border-gray-200 hover:border-green-300 hover:bg-green-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Users className="h-8 w-8 text-green-600" />
                  <div className="text-left">
                    <div className="font-semibold text-lg">Soy Paciente</div>
                    <div className="text-sm text-gray-600">Busco ayuda psicológica profesional</div>
                  </div>
                </div>
              </button>

              <button
                onClick={() => setUserType('psychologist')}
                className={`p-6 rounded-lg border-2 transition-all ${
                  userType === 'psychologist'
                    ? 'border-green-600 bg-green-50'
                    : 'border-gray-200 hover:border-green-300 hover:bg-green-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Stethoscope className="h-8 w-8 text-green-600" />
                  <div className="text-left">
                    <div className="font-semibold text-lg">Soy Psicólogo</div>
                    <div className="text-sm text-gray-600">Quiero ofrecer mis servicios profesionales</div>
                  </div>
                </div>
              </button>
            </div>
          </motion.div>

          {/* Registration Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-green-100 shadow-lg">
              <CardHeader>
                <CardTitle className="text-center text-xl">
                  Crear Cuenta {userType === 'patient' ? 'de Paciente' : 'de Psicólogo'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre Completo
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="pl-10"
                          placeholder="Tu nombre completo"
                        />
                      </div>
                    </div>

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
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                          placeholder="Mínimo 8 caracteres"
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

                    <div>
                      <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                        Confirmar Contraseña
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <Input
                          id="confirmPassword"
                          name="confirmPassword"
                          type={showConfirmPassword ? 'text' : 'password'}
                          required
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          className="pl-10 pr-10"
                          placeholder="Repite tu contraseña"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                        >
                          {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Teléfono
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+52 55 1234 5678"
                      />
                    </div>

                    <div>
                      <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700 mb-2">
                        Fecha de Nacimiento
                      </label>
                      <Input
                        id="birthDate"
                        name="birthDate"
                        type="date"
                        required
                        value={formData.birthDate}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
                      Género
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    >
                      <option value="">Selecciona tu género</option>
                      <option value="female">Femenino</option>
                      <option value="male">Masculino</option>
                      <option value="non-binary">No binario</option>
                      <option value="prefer-not-to-say">Prefiero no decir</option>
                    </select>
                  </div>

                  {/* Psychologist specific fields */}
                  {userType === 'psychologist' && (
                    <>
                      <div className="border-t border-gray-200 pt-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Información Profesional</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="license" className="block text-sm font-medium text-gray-700 mb-2">
                              Cédula Profesional
                            </label>
                            <Input
                              id="license"
                              name="license"
                              type="text"
                              required
                              value={formData.license}
                              onChange={handleInputChange}
                              placeholder="Número de cédula"
                            />
                          </div>

                          <div>
                            <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                              Años de Experiencia
                            </label>
                            <Input
                              id="experience"
                              name="experience"
                              type="number"
                              required
                              value={formData.experience}
                              onChange={handleInputChange}
                              placeholder="Ej: 5"
                              min="0"
                            />
                          </div>
                        </div>

                        <div className="mt-4">
                          <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-2">
                            Especialidad Principal
                          </label>
                          <select
                            id="specialty"
                            name="specialty"
                            required
                            value={formData.specialty}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          >
                            <option value="">Selecciona tu especialidad</option>
                            <option value="anxiety">Ansiedad y Estrés</option>
                            <option value="depression">Depresión</option>
                            <option value="self-esteem">Autoestima</option>
                            <option value="grief">Duelo</option>
                            <option value="adhd">TDAH</option>
                            <option value="couples">Terapia de Pareja</option>
                            <option value="trauma">Trauma</option>
                            <option value="eating-disorders">Trastornos Alimentarios</option>
                            <option value="other">Otra</option>
                          </select>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Terms and Conditions */}
                  <div className="flex items-start">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      required
                      className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded mt-1"
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                      Acepto los{' '}
                      <button
                        type="button"
                        onClick={() => toast({
                          title: "🚧 Esta funcionalidad no está implementada aún",
                          description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo prompt! 🚀",
                        })}
                        className="text-green-600 hover:text-green-500 underline"
                      >
                        Términos y Condiciones
                      </button>{' '}
                      y la{' '}
                      <button
                        type="button"
                        onClick={() => toast({
                          title: "🚧 Esta funcionalidad no está implementada aún",
                          description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo prompt! 🚀",
                        })}
                        className="text-green-600 hover:text-green-500 underline"
                      >
                        Política de Privacidad
                      </button>
                    </label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-lg py-3"
                  >
                    Crear Cuenta
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    ¿Ya tienes una cuenta?{' '}
                    <Link to="/iniciar-sesion" className="font-medium text-green-600 hover:text-green-500">
                      Inicia sesión aquí
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 bg-green-50 rounded-lg p-6"
          >
            <h3 className="text-lg font-semibold text-green-800 mb-4">
              {userType === 'patient' ? 'Beneficios para Pacientes' : 'Beneficios para Psicólogos'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {userType === 'patient' ? (
                <>
                  <div className="flex items-center text-green-700">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span className="text-sm">Plataforma 100% gratuita</span>
                  </div>
                  <div className="flex items-center text-green-700">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span className="text-sm">Psicólogos verificados</span>
                  </div>
                  <div className="flex items-center text-green-700">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span className="text-sm">Citas virtuales y presenciales</span>
                  </div>
                  <div className="flex items-center text-green-700">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span className="text-sm">Confidencialidad garantizada</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center text-green-700">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span className="text-sm">Comisión competitiva (10%)</span>
                  </div>
                  <div className="flex items-center text-green-700">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span className="text-sm">Gestión de citas automatizada</span>
                  </div>
                  <div className="flex items-center text-green-700">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span className="text-sm">Pagos seguros y puntuales</span>
                  </div>
                  <div className="flex items-center text-green-700">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span className="text-sm">Apoyo en crecimiento profesional</span>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Register;