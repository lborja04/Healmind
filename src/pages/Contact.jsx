import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle,
  HelpCircle,
  Users,
  Heart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    userType: 'patient'
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Esta funcionalidad no está implementada aún",
      description: "¡Pero no te preocupes! Será implementada pronto! 🚀",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Correo Electrónico',
      details: 'info@healmind.com',
      description: 'Respuesta en menos de 24 horas'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      details: '+593 96 878 6252',
      description: 'Lunes a Viernes, 9:00 AM - 6:00 PM'
    },
    {
      icon: MapPin,
      title: 'Oficina Principal',
      details: 'Campus Gustavo Galindo, ESPOL',
      description: 'Edificio 13B Aula 101'
    },
    {
      icon: Clock,
      title: 'Horario de Atención',
      details: 'Lun - Vie: 9:00 AM - 6:00 PM',
      description: 'Sáb: 10:00 AM - 2:00 PM'
    }
  ];

  const supportCategories = [
    {
      icon: Users,
      title: 'Soporte para Pacientes',
      description: 'Ayuda con citas, pagos y uso de la plataforma',
      email: 'pacientes@healmind.com'
    },
    {
      icon: Heart,
      title: 'Soporte para Psicólogos',
      description: 'Asistencia profesional y gestión de práctica',
      email: 'psicologos@healmind.com'
    },
    {
      icon: HelpCircle,
      title: 'Soporte Técnico',
      description: 'Problemas técnicos y errores de la plataforma',
      email: 'soporte@healmind.com'
    },
    {
      icon: MessageCircle,
      title: 'Consultas Generales',
      description: 'Información general y preguntas comerciales',
      email: 'info@healmind.com'
    }
  ];

  const faqs = [
    {
      question: '¿Cómo puedo agendar mi primera cita?',
      answer: 'Puedes buscar psicólogos en nuestra plataforma, revisar sus perfiles y agendar directamente desde su página de perfil.'
    },
    {
      question: '¿Es realmente gratis para los pacientes?',
      answer: 'Sí, nuestra plataforma es completamente gratuita para pacientes. Solo pagas directamente al psicólogo por sus servicios.'
    },
    {
      question: '¿Cómo verifican a los psicólogos?',
      answer: 'Verificamos cédulas profesionales, experiencia, referencias y realizamos entrevistas antes de aprobar cualquier perfil.'
    },
    {
      question: '¿Puedo cambiar de psicólogo si no me siento cómodo?',
      answer: 'Por supuesto. Puedes buscar y cambiar de psicólogo en cualquier momento sin restricciones.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contacto y Soporte - HealMind</title>
        <meta name="description" content="Contáctanos para resolver dudas, obtener soporte técnico o conocer más sobre HealMind. Estamos aquí para ayudarte en tu bienestar mental." />
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
              Contacto y <span className="text-gradient">Soporte</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Estamos aquí para ayudarte. Contáctanos para resolver cualquier duda o 
              obtener el soporte que necesitas en tu viaje hacia el bienestar mental.
            </p>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center card-hover border-green-100">
                <CardHeader>
                  <div className="mx-auto bg-green-100 p-4 rounded-full w-fit mb-4">
                    <info.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-gray-900 mb-2">{info.details}</p>
                  <p className="text-sm text-gray-600">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="border-green-100">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Send className="mr-3 h-6 w-6 text-green-600" />
                    Envíanos un Mensaje
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Nombre Completo
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Tu nombre"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Correo Electrónico
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="userType" className="block text-sm font-medium text-gray-700 mb-2">
                        Tipo de Usuario
                      </label>
                      <select
                        id="userType"
                        name="userType"
                        value={formData.userType}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      >
                        <option value="patient">Paciente</option>
                        <option value="psychologist">Psicólogo</option>
                        <option value="other">Otro</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Asunto
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="¿En qué podemos ayudarte?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Mensaje
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Describe tu consulta o problema..."
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-green-600 hover:bg-green-700 text-lg py-3"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Enviar Mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Support Categories */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Categorías de Soporte</h2>
              
              {supportCategories.map((category, index) => (
                <Card key={index} className="border-green-100 card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 p-3 rounded-full">
                        <category.icon className="h-6 w-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.title}</h3>
                        <p className="text-gray-600 mb-3">{category.description}</p>
                        <div className="flex items-center text-sm">
                          <Mail className="h-4 w-4 text-green-600 mr-2" />
                          <span className="text-green-600 font-medium">{category.email}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Encuentra respuestas rápidas a las preguntas más comunes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-green-100 card-hover">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-start">
                      <HelpCircle className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Emergency Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-8 text-center">
                <div className="bg-red-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <Phone className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-red-800 mb-4">¿Necesitas Ayuda Inmediata?</h3>
                <p className="text-red-700 mb-6 max-w-2xl mx-auto">
                  Si estás experimentando una crisis de salud mental o pensamientos de autolesión, 
                  por favor contacta inmediatamente a los servicios de emergencia o líneas de crisis.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  <div className="bg-white p-4 rounded-lg border border-red-200">
                    <p className="font-semibold text-red-800">Línea de Crisis 24/7</p>
                    <p className="text-red-600">800-290-0024</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-red-200">
                    <p className="font-semibold text-red-800">Emergencias</p>
                    <p className="text-red-600">911</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Contact;