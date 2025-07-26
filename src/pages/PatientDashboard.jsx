import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import { Calendar, Heart, MessageCircle, Star } from 'lucide-react';

import Header from '@/components/dashboard/patient/Header';
import QuickStats from '@/components/dashboard/patient/QuickStats';
import AppointmentsTab from '@/components/dashboard/patient/AppointmentsTab';
import MessagesTab from '@/components/dashboard/patient/MessagesTab';
import PaymentsTab from '@/components/dashboard/patient/PaymentsTab';
import ProfileTab from '@/components/dashboard/patient/ProfileTab';

const PatientDashboard = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('appointments');

  const handleFeatureClick = (feature) => {
    toast({
      title: "🚧 Esta funcionalidad no está implementada aún",
      description: "¡Pero no te preocupes! Será implementada pronto! 🚀",
    });
  };

  const quickStatsData = [
    { icon: Calendar, text: 'Próxima Cita', value: 'Mañana', color: 'green' },
    { icon: Heart, text: 'Sesiones Totales', value: '12', color: 'blue' },
    { icon: MessageCircle, text: 'Mensajes', value: '3', color: 'purple' },
    { icon: Star, text: 'Progreso', value: '85%', color: 'orange' },
  ];
  
  const paymentMethodsData = [
    { id: 1, type: 'Tarjeta de Crédito', last4: '4242', brand: 'Visa', isDefault: true },
    { id: 2, type: 'Tarjeta de Débito', last4: '8888', brand: 'Mastercard', isDefault: false }
  ];

  return (
    <>
      <Helmet>
        <title>Mi Dashboard - HealMind</title>
        <meta name="description" content="Gestiona tus citas, mensajes con terapeutas, métodos de pago y configuración de perfil en tu dashboard personal de HealMind." />
      </Helmet>

      <div className="min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Header onFeatureClick={handleFeatureClick} />
          <QuickStats stats={quickStatsData} />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="appointments">Citas</TabsTrigger>
                <TabsTrigger value="messages">Mensajes</TabsTrigger>
                <TabsTrigger value="payments">Pagos</TabsTrigger>
                <TabsTrigger value="profile">Perfil</TabsTrigger>
              </TabsList>

              <TabsContent value="appointments" className="space-y-6">
                <AppointmentsTab onFeatureClick={handleFeatureClick} />
              </TabsContent>

              <TabsContent value="messages">
                <MessagesTab onFeatureClick={handleFeatureClick} />
              </TabsContent>

              <TabsContent value="payments">
                <PaymentsTab paymentMethods={paymentMethodsData} onFeatureClick={handleFeatureClick} />
              </TabsContent>

              <TabsContent value="profile">
                <ProfileTab onFeatureClick={handleFeatureClick} />
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PatientDashboard;