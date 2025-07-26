import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  MapPin, 
  Star, 
  Clock, 
  Video, 
  Users,
  Heart,
  Calendar,
  DollarSign
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';

const PsychologistCard = ({ psychologist, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: delay }}
  >
    <Card className="h-full card-hover border-green-100">
      <CardHeader className="pb-4">
        <div className="flex items-start space-x-4">
          <img  
            className="w-16 h-16 rounded-full object-cover" 
            alt={`Foto de ${psychologist.name}`}
           src="https://images.unsplash.com/photo-1620389701597-28188918b071" />
          <div className="flex-1">
            <CardTitle className="text-xl text-gray-900">{psychologist.name}</CardTitle>
            <p className="text-sm text-gray-600">{psychologist.age} años • {psychologist.experience} de experiencia</p>
            <div className="flex items-center mt-2">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="ml-1 text-sm font-medium">{psychologist.rating}</span>
              <span className="ml-1 text-sm text-gray-600">({psychologist.reviews} reseñas)</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-green-600">{psychologist.price}</p>
            <p className="text-xs text-gray-500">por sesión</p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div>
          <Badge variant="secondary" className="bg-green-100 text-green-700">
            {psychologist.specialty}
          </Badge>
        </div>

        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            {psychologist.location}
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {psychologist.nextAvailable}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {psychologist.modality.map((mode, idx) => (
            <div key={idx} className="flex items-center text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
              {mode === 'Virtual' ? <Video className="h-3 w-3 mr-1" /> : <Users className="h-3 w-3 mr-1" />}
              {mode}
            </div>
          ))}
        </div>

        <div>
          <p className="text-sm text-gray-600 mb-2">Métodos terapéuticos:</p>
          <div className="flex flex-wrap gap-1">
            {psychologist.methods.map((method, idx) => (
              <Badge key={idx} variant="outline" className="text-xs">
                {method}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex space-x-2 pt-4">
          <Link to={`/psicologo/${psychologist.id}`} className="flex-1">
            <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
              Ver Perfil
            </Button>
          </Link>
          <Link to={`/reservar/${psychologist.id}`} className="flex-1">
            <Button className="w-full bg-green-600 hover:bg-green-700">
              <Calendar className="mr-2 h-4 w-4" />
              Agendar Cita
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const SearchPsychologists = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    specialty: '',
    modality: '',
    ageGroup: '',
    location: '',
    priceRange: ''
  });

  const psychologists = [
    {
      id: 1,
      name: 'Dra. Ana Sofía Martínez',
      age: 29,
      specialty: 'Ansiedad y Estrés',
      rating: 4.9,
      reviews: 127,
      price: '$20-60',
      location: 'Plaza Batán',
      modality: ['Virtual', 'Presencial'],
      image: 'Psicóloga joven profesional sonriente',
      experience: '5 años',
      methods: ['Terapia Cognitivo-Conductual', 'Mindfulness'],
      nextAvailable: 'Mañana 10:00 AM'
    },
    {
      id: 2,
      name: 'Psic. Carlos Hernández',
      age: 32,
      specialty: 'Depresión y Autoestima',
      rating: 4.8,
      reviews: 89,
      price: '$30-70',
      location: 'La Puntilla',
      modality: ['Virtual'],
      image: 'Psicólogo joven profesional amigable',
      experience: '7 años',
      methods: ['Terapia Humanista', 'Gestalt'],
      nextAvailable: 'Hoy 3:00 PM'
    },
    {
      id: 3,
      name: 'Dra. María Elena Ruiz',
      age: 27,
      specialty: 'TDAH y Trastornos del Aprendizaje',
      rating: 4.9,
      reviews: 156,
      price: '$40-90',
      location: 'Kennedy Norte',
      modality: ['Presencial', 'Virtual'],
      image: 'Psicóloga especialista joven concentrada',
      experience: '4 años',
      methods: ['Terapia Conductual', 'Neuropsicología'],
      nextAvailable: 'Viernes 11:00 AM'
    },
    {
      id: 4,
      name: 'Psic. Roberto Jiménez',
      age: 30,
      specialty: 'Terapia de Pareja',
      rating: 4.7,
      reviews: 94,
      price: '$70-150',
      location: 'Alborada 6ta Etapa',
      modality: ['Virtual', 'Presencial'],
      image: 'Psicólogo especialista en parejas profesional',
      experience: '6 años',
      methods: ['Terapia Sistémica', 'Emotivo-Focal'],
      nextAvailable: 'Lunes 2:00 PM'
    },
    {
      id: 5,
      name: 'Dra. Lucía Fernández',
      age: 28,
      specialty: 'Duelo y Trauma',
      rating: 4.8,
      reviews: 112,
      price: '$40-115',
      location: 'Urdesa',
      modality: ['Virtual'],
      image: 'Psicóloga especialista en trauma empática',
      experience: '5 años',
      methods: ['EMDR', 'Terapia Narrativa'],
      nextAvailable: 'Miércoles 9:00 AM'
    },
    {
      id: 6,
      name: 'Psic. Diego Morales',
      age: 31,
      specialty: 'Trastornos Alimentarios',
      rating: 4.9,
      reviews: 78,
      price: '$30-75',
      location: 'Policentro',
      modality: ['Presencial', 'Virtual'],
      image: 'Psicólogo especialista en alimentación profesional',
      experience: '8 años',
      methods: ['Terapia Cognitivo-Conductual', 'Familiar'],
      nextAvailable: 'Jueves 4:00 PM'
    }
  ];

  const handleSearch = () => {
    toast({
      title: "🔍 Búsqueda actualizada",
      description: "Los resultados se han filtrado según tus criterios.",
    });
  };

  return (
    <>
      <Helmet>
        <title>Buscar Psicólogos - HealMind</title>
        <meta name="description" content="Encuentra psicólogos profesionales especializados en ansiedad, depresión, autoestima, TDAH y más. Filtros por modalidad, ubicación y precios." />
      </Helmet>

      <div className="min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Encuentra tu Psicólogo Ideal
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conecta con profesionales verificados que se especializan en tus necesidades específicas
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-6 mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
              <div className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Buscar por nombre o especialidad..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <Select value={filters.specialty} onValueChange={(value) => setFilters({...filters, specialty: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Especialidad" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ansiedad">Ansiedad</SelectItem>
                  <SelectItem value="depresion">Depresión</SelectItem>
                  <SelectItem value="autoestima">Autoestima</SelectItem>
                  <SelectItem value="duelo">Duelo</SelectItem>
                  <SelectItem value="tdah">TDAH</SelectItem>
                  <SelectItem value="pareja">Terapia de Pareja</SelectItem>
                  <SelectItem value="trauma">Trauma</SelectItem>
                  <SelectItem value="alimentarios">Trastornos Alimentarios</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filters.modality} onValueChange={(value) => setFilters({...filters, modality: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Modalidad" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="virtual">Virtual</SelectItem>
                  <SelectItem value="presencial">Presencial</SelectItem>
                  <SelectItem value="ambas">Ambas</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filters.location} onValueChange={(value) => setFilters({...filters, location: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Ubicación" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="alborada">Alborada</SelectItem>
                  <SelectItem value="sauces">Sauces</SelectItem>
                  <SelectItem value="samborondon">Samborondón</SelectItem>
                  <SelectItem value="kennedy">Kennedy</SelectItem>
                  <SelectItem value="urdesa">Urdesa</SelectItem>
                  <SelectItem value="urdernor">Urdenor</SelectItem>
                </SelectContent>
              </Select>

              <Button onClick={handleSearch} className="bg-green-600 hover:bg-green-700">
                <Filter className="mr-2 h-4 w-4" />
                Filtrar
              </Button>
            </div>
          </motion.div>

          {/* Results */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {psychologists.map((psychologist, index) => (
              <PsychologistCard key={psychologist.id} psychologist={psychologist} delay={index * 0.1} />
            ))}
          </div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => toast({
                title: "🚧 Esta funcionalidad no está implementada aún",
                description: "¡Pero no te preocupes! Será implementada pronto! 🚀",
              })}
              className="border-green-600 text-green-600 hover:bg-green-50"
            >
              Cargar Más Psicólogos
            </Button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SearchPsychologists;