import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import SearchPsychologists from '@/pages/SearchPsychologists';
import PsychologistProfile from '@/pages/PsychologistProfile';
import BookingSystem from '@/pages/BookingSystem';
import PatientDashboard from '@/pages/PatientDashboard';
import PsychologistDashboard from '@/pages/PsychologistDashboard';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Pricing from '@/pages/Pricing';

function App() {
  return (
    <div className="min-h-screen flex flex-col gradient-bg">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buscar-psicologos" element={<SearchPsychologists />} />
          <Route path="/psicologo/:id" element={<PsychologistProfile />} />
          <Route path="/reservar/:id" element={<BookingSystem />} />
          <Route path="/dashboard-paciente" element={<PatientDashboard />} />
          <Route path="/dashboard-psicologo" element={<PsychologistDashboard />} />
          <Route path="/iniciar-sesion" element={<Login />} />
          <Route path="/registrarse" element={<Register />} />
          <Route path="/sobre-nosotros" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/precios" element={<Pricing />} />
        </Routes>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;