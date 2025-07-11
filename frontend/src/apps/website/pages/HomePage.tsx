import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer, Hero, Features } from '../components';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <Features />
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-6">Pronto a iniziare?</h2>
            <p className="text-lg text-center text-gray-600 mb-8">Accedi alla tua area personale per scoprire tutte le funzionalità di Anawise.</p>
            <div className="flex justify-center gap-4">
              <Link to="/login" className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">Accedi</Link>
              <Link to="/register" className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors">Registrati</Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;
