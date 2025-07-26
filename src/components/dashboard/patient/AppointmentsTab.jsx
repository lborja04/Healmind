import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Star, Video, Users, FileText } from 'lucide-react';

const AppointmentsTab = ({ upcoming, past, onFeatureClick }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Upcoming Appointments */}
      <Card className="border-green-100">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="mr-2 h-5 w-5 text-green-600" />
            Próximas Citas
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Hardcoded Upcoming Appointment 1 */}
          <div className="border border-gray-100 rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-3">
              <img  className="w-12 h-12 rounded-full object-cover" alt="Foto de Dra. Ana Sofía Martínez" src="https://images.unsplash.com/photo-1684262855344-b9da453a7934" />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">Dra. Ana Sofía Martínez</h4>
                <p className="text-sm text-gray-600">Ansiedad y Estrés</p>
              </div>
              <Badge className="bg-green-100 text-green-700">Confirmada</Badge>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-600">
              <div className="flex items-center space-x-4">
                <div className="flex items-center"><Calendar className="h-4 w-4 mr-1" />2024-01-15</div>
                <div className="flex items-center"><Clock className="h-4 w-4 mr-1" />10:00 AM</div>
                <div className="flex items-center"><Video className="h-4 w-4 mr-1" />Virtual</div>
              </div>
            </div>
            <div className="flex space-x-2 mt-3">
              <Button onClick={() => onFeatureClick('reschedule')} variant="outline" size="sm" className="flex-1">Reagendar</Button>
              <Button onClick={() => onFeatureClick('cancel')} variant="outline" size="sm" className="flex-1 text-red-600 border-red-200 hover:bg-red-50">Cancelar</Button>
            </div>
          </div>
          {/* Hardcoded Upcoming Appointment 2 */}
          <div className="border border-gray-100 rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-3">
              <img  className="w-12 h-12 rounded-full object-cover" alt="Foto de Psic. Carlos Hernández" src="https://images.unsplash.com/photo-1600878459138-e1123b37cb30" />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">Psic. Carlos Hernández</h4>
                <p className="text-sm text-gray-600">Depresión y Autoestima</p>
              </div>
              <Badge variant="secondary">Pendiente</Badge>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-600">
              <div className="flex items-center space-x-4">
                <div className="flex items-center"><Calendar className="h-4 w-4 mr-1" />2024-01-22</div>
                <div className="flex items-center"><Clock className="h-4 w-4 mr-1" />3:00 PM</div>
                <div className="flex items-center"><Users className="h-4 w-4 mr-1" />Presencial</div>
              </div>
            </div>
            <div className="flex space-x-2 mt-3">
              <Button onClick={() => onFeatureClick('reschedule')} variant="outline" size="sm" className="flex-1">Reagendar</Button>
              <Button onClick={() => onFeatureClick('cancel')} variant="outline" size="sm" className="flex-1 text-red-600 border-red-200 hover:bg-red-50">Cancelar</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Past Appointments */}
      <Card className="border-gray-100">
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileText className="mr-2 h-5 w-5 text-gray-600" />
            Historial de Citas
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Hardcoded Past Appointment 1 */}
          <div className="border border-gray-100 rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-3">
              <img  className="w-12 h-12 rounded-full object-cover" alt="Foto de Dra. Ana Sofía Martínez" src="https://images.unsplash.com/photo-1684262855344-b9da453a7934" />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">Dra. Ana Sofía Martínez</h4>
                <p className="text-sm text-gray-600">Ansiedad y Estrés</p>
              </div>
              <div className="flex items-center">{[...Array(5)].map((_, i) => (<Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />))}</div>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-600">
              <div className="flex items-center space-x-4">
                <div className="flex items-center"><Calendar className="h-4 w-4 mr-1" />2024-01-08</div>
                <div className="flex items-center"><Clock className="h-4 w-4 mr-1" />10:00 AM</div>
              </div>
              <Badge variant="secondary" className="bg-gray-100 text-gray-700">Completada</Badge>
            </div>
          </div>
          {/* Hardcoded Past Appointment 2 */}
          <div className="border border-gray-100 rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-3">
              <img  className="w-12 h-12 rounded-full object-cover" alt="Foto de Dra. Ana Sofía Martínez" src="https://images.unsplash.com/photo-1684262855344-b9da453a7934" />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">Dra. Ana Sofía Martínez</h4>
                <p className="text-sm text-gray-600">Ansiedad y Estrés</p>
              </div>
              <div className="flex items-center">{[...Array(5)].map((_, i) => (<Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />))}</div>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-600">
              <div className="flex items-center space-x-4">
                <div className="flex items-center"><Calendar className="h-4 w-4 mr-1" />2024-01-01</div>
                <div className="flex items-center"><Clock className="h-4 w-4 mr-1" />10:00 AM</div>
              </div>
              <Badge variant="secondary" className="bg-gray-100 text-gray-700">Completada</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AppointmentsTab;