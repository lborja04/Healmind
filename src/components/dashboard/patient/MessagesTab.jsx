import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle } from 'lucide-react';

const MessagesTab = ({ messages, onFeatureClick }) => {
  return (
    <Card className="border-green-100">
      <CardHeader>
        <CardTitle className="flex items-center">
          <MessageCircle className="mr-2 h-5 w-5 text-green-600" />
          Mensajes con Terapeutas
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Hardcoded Message 1 */}
        <div className="border rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors border-green-200 bg-green-50" onClick={() => onFeatureClick('open-message')}>
          <div className="flex items-center space-x-3">
            <img  className="w-12 h-12 rounded-full object-cover" alt="Foto de Dra. Ana Sofía Martínez" src="https://images.unsplash.com/photo-1684262855344-b9da453a7934" />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-semibold text-gray-900">Dra. Ana Sofía Martínez</h4>
                <span className="text-sm text-gray-500">Hace 2 horas</span>
              </div>
              <p className="text-sm text-gray-600 line-clamp-2">Hola María, espero que hayas podido practicar los ejercicios de respiración que vimos en la sesión.</p>
            </div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
        </div>
        {/* Hardcoded Message 2 */}
        <div className="border rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors border-gray-100" onClick={() => onFeatureClick('open-message')}>
          <div className="flex items-center space-x-3">
            <img  className="w-12 h-12 rounded-full object-cover" alt="Foto de Psic. Carlos Hernández" src="https://images.unsplash.com/photo-1600878459138-e1123b37cb30" />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-semibold text-gray-900">Psic. Carlos Hernández</h4>
                <span className="text-sm text-gray-500">Hace 1 día</span>
              </div>
              <p className="text-sm text-gray-600 line-clamp-2">Gracias por compartir tus avances. Me da mucho gusto ver tu progreso.</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MessagesTab;