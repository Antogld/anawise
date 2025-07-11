import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Benvenuto su Anawise</h1>
            <p className="text-xl text-blue-600 mb-4">
              La piattaforma social che ti connette con le persone che contano davvero.
            </p>
            <p className="text-gray-600 mb-8">
              Anawise è una piattaforma innovativa che ti permette di creare connessioni significative,
              condividere momenti importanti e restare in contatto con chi ami.
            </p>
            <div className="flex space-x-4">
              <Link to="/auth/register" className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">Inizia ora</Link>
              <Link to="/features" className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors">Scopri di più</Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white p-4 rounded-xl shadow-lg h-80 flex items-center justify-center">
              <div className="text-gray-400 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p>Immagine dell'app</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
