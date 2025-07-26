import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';

const ProfileTab = ({ onFeatureClick }) => {
  return (
    <Card className="border-green-100">
      <CardHeader>
        <CardTitle className="flex items-center">
          <User className="mr-2 h-5 w-5 text-green-600" />
          Configuración de Perfil
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center space-x-6">
          <img  className="w-20 h-20 rounded-full object-cover" alt="Foto de perfil del usuario" src="https://images.unsplash.com/photo-1683071765673-ff92ff1645dc" />
          <div>
            <h3 className="text-xl font-semibold text-gray-900">María González</h3>
            <p className="text-gray-600">maria.gonzalez@email.com</p>
            <Button onClick={() => onFeatureClick('change-photo')} variant="outline" size="sm" className="mt-2">
              Cambiar Foto
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Nombre Completo</label>
            <input type="text" defaultValue="María González" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"/>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
            <input type="tel" defaultValue="+52 55 1234 5678" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"/>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Fecha de Nacimiento</label>
            <input type="date" defaultValue="1995-06-15" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"/>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Género</label>
            <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500">
              <option>Femenino</option>
              <option>Masculino</option>
              <option>No binario</option>
              <option>Prefiero no decir</option>
            </select>
          </div>
        </div>
        <div className="flex space-x-4">
          <Button onClick={() => onFeatureClick('save-profile')} className="bg-green-600 hover:bg-green-700">Guardar Cambios</Button>
          <Button onClick={() => onFeatureClick('cancel-edit')} variant="outline">Cancelar</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileTab;