import React from 'react';
import { Helmet } from 'react-helmet';

const FindPsychologist = () => {
  return (
    <>
      <Helmet>
        <title>Buscar Psicólogo | Healmind</title>
      </Helmet>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Encuentra a tu Psicólogo Ideal</h1>
        <p className="text-lg text-center max-w-3xl mx-auto">
          Utiliza nuestros filtros para encontrar al profesional que mejor se adapte a tus necesidades. La búsqueda y los filtros se implementarán pronto.
        </p>
      </div>
    </>
  );
};

export default FindPsychologist;