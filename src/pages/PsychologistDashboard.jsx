import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  DollarSign, 
  Users, 
  BarChart3, 
  Clock, 
  Star,
  Video,
  MessageCircle,
  Settings,
  Bell,
  Edit,
  Eye,
  CheckCircle,
  XCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';

const PsychologistDashboard = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('overview');

  const weeklyStats = {
    totalSessions: 28,
    totalEarnings: 28000,
    newPatients: 5,
    averageRating: 4.9
  };

  const upcomingWeek = [
    { day: 'Lun', date: '15', sessions: 6 },
    { day: 'Mar', date: '16', sessions: 4 },
    { day: 'Mié', date: '17', sessions: 5 },
    { day: 'Jue', date: '18', sessions: 7 },
    { day: 'Vie', date: '19', sessions: 3 }
  ];

  const handleFeatureClick = (feature) => {
    toast({
      title: "🚧 Esta funcionalidad no está implementada aún",
      description: "¡Pero no te preocupes! Será implementada pronto! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>Dashboard Psicólogo - HealMind</title>
        <meta name="description" content="Gestiona tu práctica profesional: citas, disponibilidad, pagos, estadísticas y perfil profesional en HealMind." />
      </Helmet>

      <div className="min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Dashboard Profesional</h1>
                <p className="text-gray-600 mt-1">Gestiona tu práctica y ayuda a más personas</p>
              </div>
              <div className="flex items-center space-x-4">
                <Button 
                  onClick={() => handleFeatureClick('notifications')}
                  variant="outline" 
                  size="sm"
                >
                  <Bell className="h-4 w-4 mr-2" />
                  Notificaciones
                </Button>
                <Button 
                  onClick={() => handleFeatureClick('settings')}
                  variant="outline" 
                  size="sm"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Configuración
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
          >
            <Card className="border-green-100">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Calendar className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-600">Esta Semana</p>
                    <p className="text-2xl font-bold text-gray-900">{weeklyStats.totalSessions}</p>
                    <p className="text-xs text-gray-500">sesiones</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-100">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <DollarSign className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-600">Ingresos</p>
                    <p className="text-2xl font-bold text-gray-900">${weeklyStats.totalEarnings.toLocaleString()}</p>
                    <p className="text-xs text-gray-500">esta semana</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-100">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-600">Nuevos Pacientes</p>
                    <p className="text-2xl font-bold text-gray-900">{weeklyStats.newPatients}</p>
                    <p className="text-xs text-gray-500">este mes</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-100">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Star className="h-6 w-6 text-orange-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-600">Calificación</p>
                    <p className="text-2xl font-bold text-gray-900">{weeklyStats.averageRating}</p>
                    <p className="text-xs text-gray-500">promedio</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="overview">Resumen</TabsTrigger>
                <TabsTrigger value="appointments">Citas</TabsTrigger>
                <TabsTrigger value="availability">Disponibilidad</TabsTrigger>
                <TabsTrigger value="earnings">Ingresos</TabsTrigger>
                <TabsTrigger value="profile">Perfil</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Today's Appointments */}
                  <Card className="border-green-100">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Calendar className="mr-2 h-5 w-5 text-green-600" />
                        Citas de Hoy
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Hardcoded Appointment 1 */}
                      <div className="border border-gray-100 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            <div className="bg-gray-100 p-2 rounded-full">
                              <Users className="h-4 w-4 text-gray-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">María G.</h4>
                              <p className="text-sm text-gray-600">Primera sesión - Ansiedad</p>
                            </div>
                          </div>
                          <Badge className="bg-green-100 text-green-700">Confirmada</Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center"><Clock className="h-4 w-4 mr-1" />10:00 AM</div>
                            <div className="flex items-center"><Video className="h-4 w-4 mr-1" />Virtual</div>
                            <span>50 min</span>
                          </div>
                        </div>
                        <div className="flex space-x-2 mt-3">
                          <Button onClick={() => handleFeatureClick('view-patient')} variant="outline" size="sm" className="flex-1"><Eye className="mr-1 h-3 w-3" />Ver Paciente</Button>
                          <Button onClick={() => handleFeatureClick('start-session')} size="sm" className="flex-1 bg-green-600 hover:bg-green-700">Iniciar Sesión</Button>
                        </div>
                      </div>
                      {/* Hardcoded Appointment 2 */}
                      <div className="border border-gray-100 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            <div className="bg-gray-100 p-2 rounded-full"><Users className="h-4 w-4 text-gray-600" /></div>
                            <div>
                              <h4 className="font-semibold text-gray-900">Carlos R.</h4>
                              <p className="text-sm text-gray-600">Seguimiento - Depresión</p>
                            </div>
                          </div>
                          <Badge className="bg-green-100 text-green-700">Confirmada</Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center"><Clock className="h-4 w-4 mr-1" />2:00 PM</div>
                            <div className="flex items-center"><Users className="h-4 w-4 mr-1" />Presencial</div>
                            <span>50 min</span>
                          </div>
                        </div>
                        <div className="flex space-x-2 mt-3">
                          <Button onClick={() => handleFeatureClick('view-patient')} variant="outline" size="sm" className="flex-1"><Eye className="mr-1 h-3 w-3" />Ver Paciente</Button>
                          <Button onClick={() => handleFeatureClick('start-session')} size="sm" className="flex-1 bg-green-600 hover:bg-green-700">Iniciar Sesión</Button>
                        </div>
                      </div>
                       {/* Hardcoded Appointment 3 */}
                      <div className="border border-gray-100 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            <div className="bg-gray-100 p-2 rounded-full"><Users className="h-4 w-4 text-gray-600" /></div>
                            <div>
                              <h4 className="font-semibold text-gray-900">Ana L.</h4>
                              <p className="text-sm text-gray-600">Terapia de pareja</p>
                            </div>
                          </div>
                          <Badge variant="secondary">Pendiente</Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center"><Clock className="h-4 w-4 mr-1" />4:00 PM</div>
                            <div className="flex items-center"><Video className="h-4 w-4 mr-1" />Virtual</div>
                            <span>50 min</span>
                          </div>
                        </div>
                         <div className="flex space-x-2 mt-3">
                          <Button onClick={() => handleFeatureClick('view-patient')} variant="outline" size="sm" className="flex-1"><Eye className="mr-1 h-3 w-3" />Ver Paciente</Button>
                          <Button onClick={() => handleFeatureClick('start-session')} size="sm" className="flex-1 bg-green-600 hover:bg-green-700">Iniciar Sesión</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Weekly Overview */}
                  <Card className="border-blue-100">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <BarChart3 className="mr-2 h-5 w-5 text-blue-600" />
                        Semana Próxima
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {upcomingWeek.map((day, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="text-center">
                                <div className="text-sm text-gray-500">{day.day}</div>
                                <div className="text-lg font-semibold">{day.date}</div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-sm text-gray-600">{day.sessions} sesiones</span>
                              <div className="w-20 bg-gray-200 rounded-full h-2">
                                <div 
                                  className="bg-blue-600 h-2 rounded-full" 
                                  style={{ width: `${(day.sessions / 8) * 100}%` }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Messages */}
                <Card className="border-purple-100">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MessageCircle className="mr-2 h-5 w-5 text-purple-600" />
                      Mensajes Recientes
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Hardcoded Message 1 */}
                    <div className="border rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors border-purple-200 bg-purple-50" onClick={() => handleFeatureClick('open-message')}>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">María G.</h4>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500">Hace 2 horas</span>
                          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2">Hola doctora, quería comentarle que he estado practicando los ejercicios...</p>
                    </div>
                     {/* Hardcoded Message 2 */}
                    <div className="border rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors border-gray-100" onClick={() => handleFeatureClick('open-message')}>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">Carlos R.</h4>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500">Hace 1 día</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2">Muchas gracias por la sesión de ayer. Me siento mucho mejor.</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Appointments Tab */}
              <TabsContent value="appointments">
                <Card className="border-green-100">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-5 w-5 text-green-600" />
                        Gestión de Citas
                      </div>
                      <Button 
                        onClick={() => handleFeatureClick('add-appointment')}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        Nueva Cita
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Calendario de Citas</h3>
                      <p className="text-gray-600 mb-4">Aquí podrás ver y gestionar todas tus citas programadas</p>
                      <Button 
                        onClick={() => handleFeatureClick('view-calendar')}
                        variant="outline" 
                        className="border-green-600 text-green-600 hover:bg-green-50"
                      >
                        Ver Calendario Completo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Availability Tab */}
              <TabsContent value="availability">
                <Card className="border-green-100">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="mr-2 h-5 w-5 text-green-600" />
                      Gestión de Disponibilidad
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-4">Horarios de Trabajo</h3>
                          <div className="space-y-3">
                            {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'].map((day) => (
                              <div key={day} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                                <span className="font-medium">{day}</span>
                                <div className="flex items-center space-x-2">
                                  <span className="text-sm text-gray-600">9:00 AM - 6:00 PM</span>
                                  <Button 
                                    onClick={() => handleFeatureClick('edit-schedule')}
                                    variant="ghost" 
                                    size="sm"
                                  >
                                    <Edit className="h-4 w-4" />
                                  </Button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-4">Configuración</h3>
                          <div className="space-y-4">
                            <div className="p-4 border border-gray-200 rounded-lg">
                              <div className="flex items-center justify-between mb-2">
                                <span className="font-medium">Duración de sesión</span>
                                <span className="text-green-600">50 minutos</span>
                              </div>
                              <p className="text-sm text-gray-600">Tiempo estándar por sesión</p>
                            </div>
                            <div className="p-4 border border-gray-200 rounded-lg">
                              <div className="flex items-center justify-between mb-2">
                                <span className="font-medium">Tiempo entre citas</span>
                                <span className="text-green-600">10 minutos</span>
                              </div>
                              <p className="text-sm text-gray-600">Descanso entre sesiones</p>
                            </div>
                            <div className="p-4 border border-gray-200 rounded-lg">
                              <div className="flex items-center justify-between mb-2">
                                <span className="font-medium">Reserva anticipada</span>
                                <span className="text-green-600">7 días</span>
                              </div>
                              <p className="text-sm text-gray-600">Máximo tiempo de anticipación</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex space-x-4">
                        <Button 
                          onClick={() => handleFeatureClick('save-availability')}
                          className="bg-green-600 hover:bg-green-700"
                        >
                          Guardar Cambios
                        </Button>
                        <Button 
                          onClick={() => handleFeatureClick('block-time')}
                          variant="outline"
                        >
                          Bloquear Horario
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Earnings Tab */}
              <TabsContent value="earnings">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card className="border-green-100">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <DollarSign className="mr-2 h-5 w-5 text-green-600" />
                        Ingresos del Mes
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center mb-6">
                        <div className="text-4xl font-bold text-green-600 mb-2">$45,600</div>
                        <p className="text-gray-600">Enero 2024</p>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Sesiones completadas</span>
                          <span className="font-semibold">38</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Tarifa promedio</span>
                          <span className="font-semibold">$1,200</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Comisión HealMind (10%)</span>
                          <span className="font-semibold text-red-600">-$4,560</span>
                        </div>
                        <hr className="my-2" />
                        <div className="flex justify-between items-center text-lg">
                          <span className="font-semibold">Total neto</span>
                          <span className="font-bold text-green-600">$41,040</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-blue-100">
                    <CardHeader>
                      <CardTitle>Historial de Pagos</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 border border-gray-100 rounded-lg">
                          <div>
                            <p className="font-medium">Pago semanal</p>
                            <p className="text-sm text-gray-600">8-14 Enero 2024</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-green-600">$10,260</p>
                            <Badge variant="secondary" className="bg-green-100 text-green-700">
                              Pagado
                            </Badge>
                          </div>
                        </div>
                        <div className="flex justify-between items-center p-3 border border-gray-100 rounded-lg">
                          <div>
                            <p className="font-medium">Pago semanal</p>
                            <p className="text-sm text-gray-600">1-7 Enero 2024</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-green-600">$9,540</p>
                            <Badge variant="secondary" className="bg-green-100 text-green-700">
                              Pagado
                            </Badge>
                          </div>
                        </div>
                        <div className="flex justify-between items-center p-3 border border-gray-100 rounded-lg">
                          <div>
                            <p className="font-medium">Pago pendiente</p>
                            <p className="text-sm text-gray-600">15-21 Enero 2024</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-orange-600">$8,100</p>
                            <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                              Pendiente
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Profile Tab */}
              <TabsContent value="profile">
                <Card className="border-green-100">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="mr-2 h-5 w-5 text-green-600" />
                      Perfil Profesional
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center space-x-6">
                       <img  
                        className="w-24 h-24 rounded-full object-cover" 
                        alt="Foto profesional del psicólogo"
                       src="https://images.unsplash.com/photo-1617565980755-d57f254b0ba7" />
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900">Dra. Ana Sofía Martínez</h3>
                        <p className="text-gray-600">Psicóloga Clínica • 5 años de experiencia</p>
                        <div className="flex items-center mt-2">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="ml-1 text-sm font-medium">4.9</span>
                          <span className="ml-1 text-sm text-gray-600">(127 reseñas)</span>
                        </div>
                        <Button 
                          onClick={() => handleFeatureClick('edit-photo')}
                          variant="outline" 
                          size="sm" 
                          className="mt-3"
                        >
                          Cambiar Foto
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Especialidad Principal</label>
                        <input 
                          type="text" 
                          defaultValue="Ansiedad y Estrés" 
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Tarifa por Sesión</label>
                        <input 
                          type="text" 
                          defaultValue="$800-1200" 
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Cédula Profesional</label>
                        <input 
                          type="text" 
                          defaultValue="12345678" 
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Años de Experiencia</label>
                        <input 
                          type="number" 
                          defaultValue="5" 
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Descripción Profesional</label>
                      <textarea 
                        rows="4" 
                        defaultValue="Soy una psicóloga clínica especializada en el tratamiento de ansiedad y estrés en jóvenes adultos. Mi enfoque se centra en proporcionar herramientas prácticas y efectivas..."
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Métodos Terapéuticos</label>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="outline">Terapia Cognitivo-Conductual</Badge>
                        <Badge variant="outline">Mindfulness</Badge>
                        <Badge variant="outline">Terapia de Aceptación y Compromiso</Badge>
                      </div>
                      <Button 
                        onClick={() => handleFeatureClick('edit-methods')}
                        variant="outline" 
                        size="sm"
                      >
                        Editar Métodos
                      </Button>
                    </div>

                    <div className="flex space-x-4">
                      <Button 
                        onClick={() => handleFeatureClick('save-profile')}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        Guardar Cambios
                      </Button>
                      <Button 
                        onClick={() => handleFeatureClick('preview-profile')}
                        variant="outline"
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        Vista Previa
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PsychologistDashboard;