import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-3">Funzionalità principali</h2>
        <p className="text-lg text-center text-gray-600 mb-12">Scopri tutto ciò che Anawise ha da offrirti</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl text-blue-500 mb-4">
              <span className="inline-block bg-blue-100 p-3 rounded-full">🔄</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Connessioni reali</h3>
            <p className="text-gray-600">Crea connessioni significative con persone che condividono i tuoi interessi.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl text-blue-500 mb-4">
              <span className="inline-block bg-blue-100 p-3 rounded-full">🔒</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Privacy garantita</h3>
            <p className="text-gray-600">I tuoi dati sono al sicuro con i nostri sistemi di protezione avanzati.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl text-blue-500 mb-4">
              <span className="inline-block bg-blue-100 p-3 rounded-full">📱</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Esperienza mobile</h3>
            <p className="text-gray-600">Accedi da qualsiasi dispositivo con la nostra app ottimizzata per mobile.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl text-blue-500 mb-4">
              <span className="inline-block bg-blue-100 p-3 rounded-full">🌐</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Community globale</h3>
            <p className="text-gray-600">Entra a far parte di una community di utenti da tutto il mondo.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
