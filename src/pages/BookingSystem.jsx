import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  Video, 
  Users, 
  ArrowLeft, 
  CheckCircle,
  CreditCard,
  MapPin,
  Bell
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';

const BookingSystem = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedModality, setSelectedModality] = useState('');
  const [step, setStep] = useState(1);

  const psychologist = {
    name: 'Dra. Ana Sofía Martínez',
    specialty: 'Ansiedad y Estrés',
    price: '$1000',
    image: 'Psicóloga profesional sonriente en consulta'
  };

  const availableDates = [
    { date: '2024-01-15', day: 'Lun', dayNum: '15' },
    { date: '2024-01-16', day: 'Mar', dayNum: '16' },
    { date: '2024-01-17', day: 'Mié', dayNum: '17' },
    { date: '2024-01-18', day: 'Jue', dayNum: '18' },
    { date: '2024-01-19', day: 'Vie', dayNum: '19' },
  ];

  const availableTimes = [
    '9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleModalitySelect = (modality) => {
    setSelectedModality(modality);
  };

  const handleNextStep = () => {
    if (step === 1 && selectedDate && selectedTime && selectedModality) {
      setStep(2);
    } else if (step === 2) {
      handleConfirmBooking();
    }
  };

  const handleConfirmBooking = () => {
    toast({
      title: "🚧 Esta funcionalidad no está implementada aún",
      description: "¡Pero no te preocupes! Será implementada pronto! 🚀",
    });
  };

  const canProceed = selectedDate && selectedTime && selectedModality;

  return (
    <>
      <Helmet>
        <title>Agendar Cita con {psychologist.name} - HealMind</title>
        <meta name="description" content={`Agenda tu cita con ${psychologist.name}, especialista en ${psychologist.specialty}. Sistema de reservas fácil y seguro.`} />
      </Helmet>

      <div className="min-h-screen py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <Link to={`/psicologo/${id}`}>
              <Button variant="ghost" className="text-green-600 hover:text-green-700">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al perfil
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center space-x-4">
              <div className={`flex items-center ${step >= 1 ? 'text-green-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                  1
                </div>
                <span className="ml-2 text-sm font-medium">Seleccionar Fecha</span>
              </div>
              <div className={`w-12 h-0.5 ${step >= 2 ? 'bg-green-600' : 'bg-gray-200'}`}></div>
              <div className={`flex items-center ${step >= 2 ? 'text-green-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                  2
                </div>
                <span className="ml-2 text-sm font-medium">Confirmar Cita</span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <Card className="border-green-100">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Calendar className="mr-2 h-5 w-5 text-green-600" />
                        Selecciona una fecha
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-5 gap-3">
                        {availableDates.map((dateObj) => (
                          <button
                            key={dateObj.date}
                            onClick={() => handleDateSelect(dateObj.date)}
                            className={`p-4 rounded-lg border-2 transition-all ${
                              selectedDate === dateObj.date
                                ? 'border-green-600 bg-green-50 text-green-700'
                                : 'border-gray-200 hover:border-green-300 hover:bg-green-50'
                            }`}
                          >
                            <div className="text-center">
                              <div className="text-xs text-gray-500 mb-1">{dateObj.day}</div>
                              <div className="text-lg font-semibold">{dateObj.dayNum}</div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-green-100">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Clock className="mr-2 h-5 w-5 text-green-600" />
                        Selecciona un horario
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                        {availableTimes.map((time) => (
                          <button
                            key={time}
                            onClick={() => handleTimeSelect(time)}
                            className={`p-3 rounded-lg border-2 transition-all ${
                              selectedTime === time
                                ? 'border-green-600 bg-green-50 text-green-700'
                                : 'border-gray-200 hover:border-green-300 hover:bg-green-50'
                            }`}
                          >
                            <div className="text-sm font-medium">{time}</div>
                          </button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-green-100">
                    <CardHeader>
                      <CardTitle>Modalidad de la sesión</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <button
                          onClick={() => handleModalitySelect('virtual')}
                          className={`p-6 rounded-lg border-2 transition-all ${
                            selectedModality === 'virtual'
                              ? 'border-green-600 bg-green-50'
                              : 'border-gray-200 hover:border-green-300 hover:bg-green-50'
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <Video className="h-8 w-8 text-green-600" />
                            <div className="text-left">
                              <div className="font-semibold">Sesión Virtual</div>
                              <div className="text-sm text-gray-600">Videollamada segura</div>
                            </div>
                          </div>
                        </button>

                        <button
                          onClick={() => handleModalitySelect('presencial')}
                          className={`p-6 rounded-lg border-2 transition-all ${
                            selectedModality === 'presencial'
                              ? 'border-green-600 bg-green-50'
                              : 'border-gray-200 hover:border-green-300 hover:bg-green-50'
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <Users className="h-8 w-8 text-green-600" />
                            <div className="text-left">
                              <div className="font-semibold">Sesión Presencial</div>
                              <div className="text-sm text-gray-600">En consultorio</div>
                            </div>
                          </div>
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <Card className="border-green-100">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <CheckCircle className="mr-2 h-5 w-5 text-green-600" />
                        Resumen de tu cita
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <Calendar className="h-5 w-5 text-gray-400" />
                        <span>Fecha: <strong>{selectedDate}</strong></span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Clock className="h-5 w-5 text-gray-400" />
                        <span>Hora: <strong>{selectedTime}</strong></span>
                      </div>
                      <div className="flex items-center space-x-4">
                        {selectedModality === 'virtual' ? 
                          <Video className="h-5 w-5 text-gray-400" /> : 
                          <Users className="h-5 w-5 text-gray-400" />
                        }
                        <span>Modalidad: <strong>{selectedModality === 'virtual' ? 'Virtual' : 'Presencial'}</strong></span>
                      </div>
                      {selectedModality === 'presencial' && (
                        <div className="flex items-center space-x-4">
                          <MapPin className="h-5 w-5 text-gray-400" />
                          <span>Ubicación: <strong>Consultorio - Bienestar Politécnico</strong></span>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  <Card className="border-green-100">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <CreditCard className="mr-2 h-5 w-5 text-green-600" />
                        Información de pago
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span>Costo de la sesión:</span>
                          <span className="text-2xl font-bold text-green-600">{psychologist.price}</span>
                        </div>
                        <div className="text-sm text-gray-600">
                          <p>• Pago seguro procesado por Stripe</p>
                          <p>• Reagendado gratuito hasta 24h antes</p>
                          <p>• Reembolso completo si cancelas con 48h de anticipación</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-green-100">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Bell className="mr-2 h-5 w-5 text-green-600" />
                        Recordatorios
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          <span>Recibirás confirmación por email</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          <span>Recordatorio 24 horas antes</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          <span>Recordatorio 1 hora antes</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="border-green-200 sticky top-24">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <img 
                        className="w-12 h-12 rounded-full object-cover" 
                        alt={`Foto de ${psychologist.name}`}
                       src="https://images.unsplash.com/photo-1572419449397-b1dfbd49f547" />
                      <div>
                        <CardTitle className="text-lg">{psychologist.name}</CardTitle>
                        <Badge variant="secondary" className="bg-green-100 text-green-700">
                          {psychologist.specialty}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-1">{psychologist.price}</div>
                      <p className="text-gray-600">por sesión</p>
                    </div>

                    {step === 1 && (
                      <Button 
                        onClick={handleNextStep}
                        disabled={!canProceed}
                        className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-300"
                      >
                        Continuar
                      </Button>
                    )}

                    {step === 2 && (
                      <Button 
                        onClick={handleNextStep}
                        className="w-full bg-green-600 hover:bg-green-700"
                      >
                        <CreditCard className="mr-2 h-4 w-4" />
                        Confirmar y Pagar
                      </Button>
                    )}

                    <div className="text-center text-sm text-gray-500">
                      <p>Pago 100% seguro</p>
                      <p>Cancela hasta 48h antes</p>
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

export default BookingSystem;