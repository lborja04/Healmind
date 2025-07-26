import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CreditCard } from 'lucide-react';

const PaymentsTab = ({ paymentMethods, onFeatureClick }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="border-green-100">
        <CardHeader>
          <CardTitle className="flex items-center">
            <CreditCard className="mr-2 h-5 w-5 text-green-600" />
            Métodos de Pago
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {paymentMethods.map((method) => (
            <div key={method.id} className="border border-gray-100 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="bg-gray-100 p-2 rounded">
                    <CreditCard className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{method.brand} •••• {method.last4}</p>
                    <p className="text-sm text-gray-600">{method.type}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {method.isDefault && (<Badge variant="secondary" className="bg-green-100 text-green-700">Principal</Badge>)}
                  <Button onClick={() => onFeatureClick('edit-payment')} variant="ghost" size="sm">Editar</Button>
                </div>
              </div>
            </div>
          ))}
          <Button onClick={() => onFeatureClick('add-payment')} variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
            Agregar Método de Pago
          </Button>
        </CardContent>
      </Card>
      <Card className="border-gray-100">
        <CardHeader>
          <CardTitle>Historial de Pagos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <div>
                <p className="font-medium">Sesión con Dra. Martínez</p>
                <p className="text-sm text-gray-600">08 Ene 2024</p>
              </div>
              <span className="font-semibold text-green-600">$1,000</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <div>
                <p className="font-medium">Sesión con Dra. Martínez</p>
                <p className="text-sm text-gray-600">01 Ene 2024</p>
              </div>
              <span className="font-semibold text-green-600">$1,000</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentsTab;