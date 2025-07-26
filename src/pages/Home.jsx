import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Shield, 
  Clock, 
  Users, 
  Star, 
  ArrowRight, 
  CheckCircle,
  Brain,
  Smile,
  MessageCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: 'Psicólogos Verificados',
      description: 'Todos nuestros profesionales están certificados y verificados'
    },
    {
      icon: Clock,
      title: 'Disponibilidad 24/7',
      description: 'Encuentra citas que se adapten a tu horario'
    },
    {
      icon: Heart,
      title: 'Atención Personalizada',
      description: 'Encuentra el terapeuta perfecto para tus necesidades'
    },
    {
      icon: Users,
      title: 'Comunidad de Apoyo',
      description: 'Únete a una comunidad que prioriza el bienestar mental'
    }
  ];

  const specialties = [
    'Ansiedad', 'Depresión', 'Autoestima', 'Duelo', 'TDAH', 
    'Terapia de Pareja', 'Estrés', 'Trauma', 'Trastornos Alimentarios'
  ];

  const testimonials = [
    {
      name: 'María González',
      age: 28,
      text: 'HealMind me ayudó a encontrar la terapeuta perfecta. Después de meses de ansiedad, finalmente encontré el apoyo que necesitaba.',
      rating: 5
    },
    {
      name: 'Carlos Rodríguez',
      age: 34,
      text: 'La plataforma es muy fácil de usar y los psicólogos son increíbles. Mi proceso de terapia ha sido transformador.',
      rating: 5
    },
    {
      name: 'Ana Martínez',
      age: 25,
      text: 'Gracias a HealMind pude trabajar mi autoestima con una psicóloga joven que realmente me entiende.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>HealMind - Conecta con tu bienestar mental hoy</title>
        <meta name="description" content="Plataforma que conecta personas de 18-40 años con psicólogos profesionales. Terapia accesible, confiable y personalizada para tu bienestar mental." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 hero-gradient opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Conecta con tu{' '}
                <span className="text-gradient">bienestar mental</span>{' '}
                hoy
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Encuentra psicólogos profesionales que se adapten a tus necesidades. 
                Terapia accesible, confiable y personalizada para tanto jóvenes como adultos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/buscar-psicologos">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
                    <Brain className="mr-2 h-5 w-5" />
                    Encuentra tu Psicólogo
                  </Button>
                </Link>
                <Link to="/registrarse">
                  <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-green-600 text-green-600 hover:bg-green-50">
                    Únete como Terapeuta
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex items-center space-x-6">
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    <img  className="w-8 h-8 rounded-full border-2 border-white" alt="Usuario feliz" src="https://images.unsplash.com/photo-1677935708008-d2924bc16b4a" />
                    <img  className="w-8 h-8 rounded-full border-2 border-white" alt="Usuario satisfecho" src="https://images.unsplash.com/photo-1649767590910-367f54f3d0e3" />
                    <img  className="w-8 h-8 rounded-full border-2 border-white" alt="Usuario positivo" src="https://images.unsplash.com/photo-1615375775649-895834ba727e" />
                  </div>
                  <span className="ml-3 text-sm text-gray-600">+1,200 personas ya encontraron ayuda</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 glass-effect">
                <img  className="w-full h-80 object-cover rounded-xl" alt="Plataforma HealMind mockup" src="https://images.unsplash.com/photo-1585092284034-48c72302862c" />
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  ¡Gratis para pacientes!
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir HealMind?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hacemos que encontrar el psicólogo perfecto sea fácil, seguro y accesible para todos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="text-center h-full card-hover border-green-100">
                  <CardHeader>
                    <div className="mx-auto bg-green-100 p-3 rounded-full w-fit mb-4">
                      <feature.icon className="h-8 w-8 text-green-600" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Especialidades Disponibles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestros psicólogos están especializados en una amplia gama de áreas para apoyarte
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {specialties.map((specialty, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Badge variant="secondary" className="text-lg py-2 px-4 bg-white border-green-200 text-green-700 hover:bg-green-50">
                  {specialty}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Historias de Transformación
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre cómo HealMind ha ayudado a personas como tú a encontrar su bienestar mental
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="h-full card-hover border-green-100">
                  <CardHeader>
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <CardTitle className="text-lg">{testimonial.name}, {testimonial.age} años</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 italic">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Tu bienestar mental no puede esperar
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Comienza tu viaje hacia una mejor salud mental hoy. 
              Es gratis para pacientes y fácil de usar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/buscar-psicologos">
                <Button size="lg" className="bg-white text-green-600 hover:bg-green-50 text-lg px-8 py-3">
                  <Smile className="mr-2 h-5 w-5" />
                  Buscar Psicólogo Ahora
                </Button>
              </Link>
              <Link to="/registrarse">
                <Button size="lg" className="bg-white text-green-600 hover:bg-green-50 text-lg px-8 py-3">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Registrarse Gratis
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;