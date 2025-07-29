import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Star, 
  MapPin, 
  Clock, 
  Video, 
  Users, 
  Calendar, 
  Award, 
  BookOpen,
  Heart,
  MessageCircle,
  CheckCircle,
  ArrowLeft
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';

const PsychologistProfile = () => {
  const { id } = useParams();
  const { toast } = useToast();

  // Mock data - in real app this would come from API
  const psychologist = {
    id: 1,
    name: 'Dra. Ana Sofía Martínez',
    age: 29,
    specialty: 'Ansiedad y Estrés',
    rating: 4.9,
    reviews: 127,
    price: '$20-60',
    location: 'Plaza Batán',
    modality: ['Virtual', 'Presencial'],
    image: 'Psicóloga joven profesional sonriente en consulta',
    experience: '5 años',
    methods: ['Terapia Cognitivo-Conductual', 'Mindfulness', 'Terapia de Aceptación y Compromiso'],
    nextAvailable: 'Mañana 10:00 AM',
    education: [
      'Licenciatura en Psicología - UNAM',
      'Maestría en Psicología Clínica - Universidad Iberoamericana',
      'Certificación en Terapia Cognitivo-Conductual'
    ],
    languages: ['Español', 'Inglés'],
    about: 'Soy una psicóloga clínica especializada en el tratamiento de ansiedad y estrés en jóvenes adultos. Mi enfoque se centra en proporcionar herramientas prácticas y efectivas para que mis pacientes puedan manejar sus emociones y mejorar su calidad de vida. Creo firmemente en la importancia de crear un espacio seguro y libre de juicios donde cada persona pueda explorar sus pensamientos y sentimientos.',
    specializations: [
      'Trastornos de Ansiedad',
      'Manejo del Estrés',
      'Ataques de Pánico',
      'Ansiedad Social',
      'Trastorno de Ansiedad Generalizada',
      'Técnicas de Relajación'
    ],
    availability: {
      monday: ['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM'],
      tuesday: ['10:00 AM', '1:00 PM', '3:00 PM'],
      wednesday: ['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM', '5:00 PM'],
      thursday: ['10:00 AM', '1:00 PM', '3:00 PM'],
      friday: ['9:00 AM', '11:00 AM', '2:00 PM']
    }
  };

  const reviews = [
    {
      id: 1,
      name: 'Anónimo',
      rating: 5,
      date: 'Hace 2 semanas',
      comment: 'La Dra. Martínez me ayudó enormemente con mi ansiedad. Sus técnicas de mindfulness han sido transformadoras para mí.'
    },
    {
      id: 2,
      name: 'Anónimo',
      rating: 5,
      date: 'Hace 1 mes',
      comment: 'Excelente profesional. Muy empática y con gran conocimiento. Las sesiones virtuales son muy cómodas.'
    },
    {
      id: 3,
      name: 'Anónimo',
      rating: 4,
      date: 'Hace 2 meses',
      comment: 'Me siento mucho mejor después de trabajar con ella. Recomiendo ampliamente sus servicios.'
    }
  ];

  const handleBooking = () => {
    toast({
      title: "🚧 Esta funcionalidad no está implementada aún",
      description: "¡Pero no te preocupes! Será implementada pronto! 🚀",
    });
  };

  const handleMessage = () => {
    toast({
      title: "🚧 Esta funcionalidad no está implementada aún",
      description: "¡Pero no te preocupes! Será implementada pronto! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>{psychologist.name} - Psicóloga especialista en {psychologist.specialty} - HealMind</title>
        <meta name="description" content={`Conoce a ${psychologist.name}, psicóloga especializada en ${psychologist.specialty}. ${psychologist.experience} de experiencia. Agenda tu cita hoy.`} />
      </Helmet>

      <div className="min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <Link to="/buscar-psicologos">
              <Button variant="ghost" className="text-green-600 hover:text-green-700">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver a la búsqueda
              </Button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Profile */}
            <div className="lg:col-span-2 space-y-6">
              {/* Header Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="border-green-100">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                      <img 
                        className="w-32 h-32 rounded-2xl object-cover mx-auto md:mx-0" 
                        alt={`Foto profesional de ${psychologist.name}`}
                       src="https://images.unsplash.com/photo-1572419449397-b1dfbd49f547" />
                      <div className="flex-1 text-center md:text-left">
                        <CardTitle className="text-3xl text-gray-900 mb-2">{psychologist.name}</CardTitle>
                        <p className="text-lg text-gray-600 mb-3">{psychologist.age} años • {psychologist.experience} de experiencia</p>
                        
                        <div className="flex items-center justify-center md:justify-start mb-4">
                          <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                          <span className="ml-1 text-lg font-medium">{psychologist.rating}</span>
                          <span className="ml-1 text-gray-600">({psychologist.reviews} reseñas)</span>
                        </div>

                        <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
                          <Badge variant="secondary" className="bg-green-100 text-green-700">
                            {psychologist.specialty}
                          </Badge>
                          {psychologist.modality.map((mode, idx) => (
                            <div key={idx} className="flex items-center text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                              {mode === 'Virtual' ? <Video className="h-3 w-3 mr-1" /> : <Users className="h-3 w-3 mr-1" />}
                              {mode}
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center justify-center md:justify-start space-x-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {psychologist.location}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            Disponible {psychologist.nextAvailable}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>

              {/* About Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="border-green-100">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Heart className="mr-2 h-5 w-5 text-green-600" />
                      Sobre mí
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">{psychologist.about}</p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Specializations */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="border-green-100">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Award className="mr-2 h-5 w-5 text-green-600" />
                      Especializaciones
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {psychologist.specializations.map((spec, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          <span className="text-sm text-gray-700">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Education & Methods */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border-green-100">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <BookOpen className="mr-2 h-5 w-5 text-green-600" />
                        Formación Académica
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {psychologist.education.map((edu, idx) => (
                          <div key={idx} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                            <span className="text-sm text-gray-700">{edu}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-green-100">
                    <CardHeader>
                      <CardTitle>Métodos Terapéuticos</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {psychologist.methods.map((method, idx) => (
                          <Badge key={idx} variant="outline" className="mr-2 mb-2">
                            {method}
                          </Badge>
                        ))}
                      </div>
                      <div className="mt-4">
                        <p className="text-sm text-gray-600">
                          <strong>Idiomas:</strong> {psychologist.languages.join(', ')}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>

              {/* Reviews */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="border-green-100">
                  <CardHeader>
                    <CardTitle>Reseñas de Pacientes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {reviews.map((review) => (
                        <div key={review.id} className="border-b border-gray-100 pb-4 last:border-b-0">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center">
                              <span className="font-medium text-gray-900">{review.name}</span>
                              <div className="flex items-center ml-2">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                            </div>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                          <p className="text-gray-700">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Booking Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="border-green-200 sticky top-24">
                  <CardHeader className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">{psychologist.price}</div>
                    <p className="text-gray-600">por sesión</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Link to={`/reservar/${psychologist.id}`} className="w-full">
                      <Button 
                        className="w-full bg-green-600 hover:bg-green-700 text-lg py-3"
                      >
                        <Calendar className="mr-2 h-5 w-5" />
                        Agendar Cita
                      </Button>
                    </Link>
                    
                    <Button 
                      onClick={handleMessage}
                      variant="outline" 
                      className="w-full border-green-600 text-green-600 hover:bg-green-50"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Enviar Mensaje
                    </Button>

                    <div className="text-center pt-4 border-t border-gray-100">
                      <p className="text-sm text-gray-600 mb-2">Próxima disponibilidad:</p>
                      <p className="font-medium text-green-600">{psychologist.nextAvailable}</p>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="flex items-center text-green-700 mb-2">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        <span className="text-sm font-medium">Garantías incluidas</span>
                      </div>
                      <ul className="text-xs text-green-600 space-y-1">
                        <li>• Primera consulta con descuento</li>
                        <li>• Reagendado gratuito 24h antes</li>
                        <li>• Psicólogo verificado</li>
                        <li>• Confidencialidad garantizada</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PsychologistProfile;