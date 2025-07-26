import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Shield, 
  Users, 
  Target, 
  Award, 
  CheckCircle,
  Eye,
  Lightbulb,
  Globe
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Empatía y Comprensión',
      description: 'Creemos en la importancia de crear un espacio seguro y libre de juicios donde cada persona pueda expresarse libremente.'
    },
    {
      icon: Shield,
      title: 'Confidencialidad',
      description: 'La privacidad y confidencialidad de nuestros usuarios es nuestra máxima prioridad en cada interacción.'
    },
    {
      icon: Users,
      title: 'Accesibilidad',
      description: 'Trabajamos para hacer la salud mental accesible para todos, eliminando barreras económicas y geográficas.'
    },
    {
      icon: Award,
      title: 'Calidad Profesional',
      description: 'Todos nuestros psicólogos están certificados y verificados para garantizar la mejor atención posible.'
    }
  ];

  const team = [
    {
      name: 'Dr. Miguel Hernández',
      role: 'Director Médico',
      description: 'Psicólogo clínico con 15 años de experiencia en salud mental digital.',
      image: 'Director médico profesional sonriente'
    },
    {
      name: 'Lic. Sofia Ramírez',
      role: 'Directora de Operaciones',
      description: 'Especialista en gestión de plataformas de salud y experiencia del usuario.',
      image: 'Directora de operaciones profesional'
    },
    {
      name: 'Dr. Carlos Mendoza',
      role: 'Jefe de Calidad',
      description: 'Responsable de la verificación y calidad de nuestros profesionales.',
      image: 'Jefe de calidad profesional'
    }
  ];

  const stats = [
    { number: '1,200+', label: 'Pacientes Atendidos' },
    { number: '150+', label: 'Psicólogos Verificados' },
    { number: '4.9/5', label: 'Calificación Promedio' },
    { number: '95%', label: 'Satisfacción del Usuario' }
  ];

  return (
    <>
      <Helmet>
        <title>Sobre Nosotros - HealMind</title>
        <meta name="description" content="Conoce la misión, visión y valores de HealMind. Somos una plataforma comprometida con hacer la salud mental accesible, confiable y personalizada." />
      </Helmet>

      <div className="min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sobre <span className="text-gradient">HealMind</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Somos una plataforma comprometida con revolucionar el acceso a la salud mental, 
              conectando personas con psicólogos profesionales de manera fácil, segura y accesible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          >
            <Card className="border-green-100 card-hover">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Target className="mr-3 h-8 w-8 text-green-600" />
                  Nuestra Misión
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Democratizar el acceso a la salud mental proporcionando una plataforma segura, 
                  confiable y fácil de usar que conecte a personas de 18 a 40 años con psicólogos 
                  profesionales especializados, eliminando barreras geográficas y económicas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-100 card-hover">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Eye className="mr-3 h-8 w-8 text-blue-600" />
                  Nuestra Visión
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Ser la plataforma líder en América Latina para el cuidado de la salud mental, 
                  donde cada persona pueda encontrar el apoyo psicológico que necesita, 
                  contribuyendo a una sociedad más saludable emocionalmente.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Historia</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    HealMind nació de la necesidad de hacer la salud mental más accesible para 
                    jóvenes y adultos que enfrentan desafíos emocionales en un mundo cada vez más complejo.
                  </p>
                  <p>
                    Fundada en 2023 por un equipo de psicólogos y tecnólogos, nuestra plataforma 
                    surge de la experiencia directa con las barreras que enfrentan tanto pacientes 
                    como profesionales de la salud mental.
                  </p>
                  <p>
                    Creemos firmemente que el bienestar mental no debe ser un lujo, sino un derecho 
                    accesible para todos. Por eso, hemos diseñado una plataforma que es gratuita 
                    para los pacientes y que apoya a psicólogos jóvenes en su crecimiento profesional.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img 
                  className="w-full h-96 object-cover rounded-2xl shadow-lg" 
                  alt="Equipo de HealMind trabajando juntos en oficina moderna"
                 src="https://images.unsplash.com/photo-1627599936744-51d288f89af4" />
                <div className="absolute -bottom-6 -right-6 bg-green-500 text-white px-6 py-3 rounded-full font-semibold">
                  Desde 2023
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Valores</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Los principios que guían cada decisión y acción en HealMind
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                >
                  <Card className="h-full text-center card-hover border-green-100">
                    <CardHeader>
                      <div className="mx-auto bg-green-100 p-4 rounded-full w-fit mb-4">
                        <value.icon className="h-8 w-8 text-green-600" />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mb-16"
          >
            <div className="bg-green-600 rounded-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Nuestro Impacto</h2>
                <p className="text-green-100 text-lg">Números que reflejan nuestro compromiso con la salud mental</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-green-100">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestro Equipo</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Profesionales comprometidos con transformar la salud mental digital
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 + index * 0.1 }}
                >
                  <Card className="text-center card-hover border-green-100">
                    <CardHeader>
                      <img 
                        className="w-24 h-24 rounded-full object-cover mx-auto mb-4" 
                        alt={`Foto de ${member.name}`}
                       src="https://images.unsplash.com/photo-1644424235476-295f24d503d9" />
                      <CardTitle className="text-xl">{member.name}</CardTitle>
                      <p className="text-green-600 font-medium">{member.role}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{member.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-purple-100 card-hover">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Shield className="mr-3 h-8 w-8 text-purple-600" />
                    Privacidad y Ética
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <p className="text-gray-700">Cumplimiento estricto de la NOM-004-SSA3-2012</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <p className="text-gray-700">Encriptación de extremo a extremo en todas las comunicaciones</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <p className="text-gray-700">Código de ética profesional para todos nuestros psicólogos</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <p className="text-gray-700">Auditorías regulares de seguridad y privacidad</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-100 card-hover">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Lightbulb className="mr-3 h-8 w-8 text-orange-600" />
                    Innovación Continua
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <p className="text-gray-700">Desarrollo constante de nuevas funcionalidades</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <p className="text-gray-700">Investigación en salud mental digital</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <p className="text-gray-700">Colaboración con universidades y centros de investigación</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <p className="text-gray-700">Feedback continuo de usuarios y profesionales</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-center"
          >
            <Card className="border-green-100 p-8">
              <div className="flex items-center justify-center mb-6">
                <Globe className="h-12 w-12 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestro Futuro</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Trabajamos hacia un futuro donde la salud mental sea tan accesible como cualquier 
                otro servicio de salud. Nuestro objetivo es expandir HealMind por toda América Latina, 
                adaptándonos a las necesidades culturales y regulatorias de cada país, siempre 
                manteniendo nuestros valores de accesibilidad, calidad y confidencialidad.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;