import React from 'react';
import { Button } from '@/components/ui/button';
import { Bell, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = ({ onFeatureClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-8"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Mi Dashboard</h1>
          <p className="text-gray-600 mt-1">Gestiona tu bienestar mental</p>
        </div>
        <div className="flex items-center space-x-4">
          <Button 
            onClick={() => onFeatureClick('notifications')}
            variant="outline" 
            size="sm"
          >
            <Bell className="h-4 w-4 mr-2" />
            Notificaciones
          </Button>
          <Button 
            onClick={() => onFeatureClick('settings')}
            variant="outline" 
            size="sm"
          >
            <Settings className="h-4 w-4 mr-2" />
            Configuración
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;