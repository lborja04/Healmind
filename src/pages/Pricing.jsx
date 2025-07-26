import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Check, 
  X, 
  Heart, 
  Shield, 
  Clock, 
  Users,
  Star,
  CreditCard,
  Calendar,
  MessageCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';

const Pricing = () => {
  const { toast } = useToast();

  const patientPlans = [
    {
      name: 'Gratuito',
      price: '$0',
      period: 'siempre',
      description: 'Acceso completo a la plataforma sin costo',
      features: [
        'Búsqueda ilimitada de psicólogos',
        'Perfiles detallados de profesionales',
        'Sistema de reseñas y calificaciones',
        'Agendado de citas',
        'Mensajería con terapeutas',
        'Recordatorios automáticos',
        'Soporte al cliente'
      ],
      notIncluded: [],
      popular: true,
      buttonText: 'Comenzar Gratis',
      color: 'green'
    }
  ];

  const psychologistPlans = [
    {
      name: 'Profesional',
      price: '10%',
      period: 'comisión por sesión',
      description: 'Plan completo para psicólogos profesionales',
      features: [
        'Perfil profesional verificado',
        'Gestión completa de citas',
        'Sistema de pagos integrado',
        'Dashboard de estadísticas',
        'Mensajería con pacientes',
        'Configuración de disponibilidad',
        'Soporte prioritario',
        'Herramientas de marketing',
        'Reportes financieros',
        'Capacitación continua'
      ],
      notIncluded: [],
      popular: true,
      buttonText: 'Unirse como Psicólogo',
      color: 'blue'
    }
  ];

  const sessionPrices = [
    {
      type: 'Sesión Individual',
      priceRange: '$20 - $150',
      duration: '50 minutos',
      description: 'Terapia personalizada uno a uno'
    },
    {
      type: 'Terapia de Pareja',
      priceRange: '$50 - $200',
      duration: '60 minutos',
      description: 'Sesiones especializadas para parejas'
    },
    {
      type: 'Terapia Familiar',
      priceRange: '$60 - $250',
      duration: '60-90 minutos',
      description: 'Terapia grupal para familias'
    },
    {
      type: 'Consulta Inicial',
      priceRange: '$20 - $100',
      duration: '30-40 minutos',
      description: 'Primera evaluación y diagnóstico'
    }
  ];

  const paymentOptions = [
    {
      icon: CreditCard,
      title: 'Pago por Sesión',
      description: 'Paga únicamente por las sesiones que tomes',
      benefits: ['Sin compromisos a largo plazo', 'Flexibilidad total', 'Ideal para probar diferentes terapeutas']
    },
    {
      icon: Calendar,
      title: 'Paquetes Mensuales',
      description: 'Descuentos por pagar múltiples sesiones',
      benefits: ['Hasta 15% de descuento', 'Garantiza tu espacio', 'Mejor para terapia continua']
    }
  ];

  const handleGetStarted = (planType) => {
    toast({
      title: "🚧 Esta funcionalidad no está implementada aún",
      description: "¡Pero no te preocupes! Será implementada pronto! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>Precios y Planes - HealMind</title>
        <meta name="description" content="Conoce nuestros precios transparentes. Plataforma gratuita para pacientes, comisión justa para psicólogos. Terapia accesible para todos." />
      </Helmet>

      <div className="min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Precios <span className="text-gradient">Transparentes</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Creemos que la salud mental debe ser accesible. Por eso, nuestra plataforma es 
              completamente gratuita para pacientes y justa para profesionales.
            </p>
          </motion.div>

          {/* Patient Pricing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Para Pacientes</h2>
              <p className="text-xl text-gray-600">Acceso completo sin costo alguno</p>
            </div>

            <div className="max-w-md mx-auto">
              {patientPlans.map((plan, index) => (
                <Card key={index} className={`border-2 border-green-200 relative card-hover`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-green-600 text-white px-4 py-1">
                        ¡Siempre Gratis!
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-5xl font-bold text-green-600">{plan.price}</span>
                      <span className="text-gray-600 ml-2">{plan.period}</span>
                    </div>
                    <p className="text-gray-600 mt-2">{plan.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <Check className="h-5 w-5 text-green-600 mr-3" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button 
                      onClick={() => handleGetStarted('patient')}
                      className="w-full bg-green-600 hover:bg-green-700 text-lg py-3 mt-6"
                    >
                      <Heart className="mr-2 h-5 w-5" />
                      {plan.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Psychologist Pricing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Para Psicólogos</h2>
              <p className="text-xl text-gray-600">Comisión justa por una plataforma completa</p>
            </div>

            <div className="max-w-md mx-auto">
              {psychologistPlans.map((plan, index) => (
                <Card key={index} className={`border-2 border-blue-200 relative card-hover`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-blue-600 text-white px-4 py-1">
                        Más Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-5xl font-bold text-blue-600">{plan.price}</span>
                      <span className="text-gray-600 ml-2">{plan.period}</span>
                    </div>
                    <p className="text-gray-600 mt-2">{plan.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <Check className="h-5 w-5 text-blue-600 mr-3" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button 
                      onClick={() => handleGetStarted('psychologist')}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3 mt-6"
                    >
                      <Users className="mr-2 h-5 w-5" />
                      {plan.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Session Prices */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Precios de Sesiones</h2>
              <p className="text-xl text-gray-600">Rangos de precios establecidos por nuestros psicólogos</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sessionPrices.map((session, index) => (
                <Card key={index} className="text-center card-hover border-green-100">
                  <CardHeader>
                    <CardTitle className="text-lg">{session.type}</CardTitle>
                    <div className="text-2xl font-bold text-green-600">{session.priceRange}</div>
                    <p className="text-sm text-gray-600">{session.duration}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{session.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Payment Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Opciones de Pago</h2>
              <p className="text-xl text-gray-600">Flexibilidad para que elijas como prefieras pagar</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {paymentOptions.map((option, index) => (
                <Card key={index} className="card-hover border-green-100">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="bg-green-100 p-3 rounded-full">
                        <option.icon className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{option.title}</CardTitle>
                        <p className="text-gray-600">{option.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {option.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center">
                          <Check className="h-4 w-4 text-green-600 mr-2" />
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* FAQ Pricing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mb-16"
          >
            <Card className="border-green-100">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Preguntas Frecuentes sobre Precios</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">¿Por qué es gratis para pacientes?</h3>
                    <p className="text-gray-600 text-sm">Creemos que el acceso a la salud mental no debe tener barreras económicas. Nuestro modelo se basa en una pequeña comisión a los psicólogos.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">¿Cómo funciona el pago a psicólogos?</h3>
                    <p className="text-gray-600 text-sm">Los pacientes pagan directamente al psicólogo. Nosotros procesamos el pago y retenemos una comisión del 10% por nuestros servicios.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">¿Hay costos ocultos?</h3>
                    <p className="text-gray-600 text-sm">No. Para pacientes es completamente gratis. Para psicólogos, solo cobramos la comisión del 10% claramente establecida.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">¿Puedo cancelar sin penalización?</h3>
                    <p className="text-gray-600 text-sm">Sí, puedes cancelar citas hasta 24 horas antes sin costo. Las políticas específicas las establece cada psicólogo.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center"
          >
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  ¿Listo para comenzar tu viaje hacia el bienestar?
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Únete a miles de personas que ya han encontrado el apoyo que necesitaban
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={() => handleGetStarted('patient')}
                    size="lg" 
                    className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3"
                  >
                    <Heart className="mr-2 h-5 w-5" />
                    Comenzar como Paciente
                  </Button>
                  <Button 
                    onClick={() => handleGetStarted('psychologist')}
                    variant="outline" 
                    size="lg" 
                    className="text-lg px-8 py-3 border-green-600 text-green-600 hover:bg-green-50"
                  >
                    <Users className="mr-2 h-5 w-5" />
                    Unirse como Psicólogo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Pricing;