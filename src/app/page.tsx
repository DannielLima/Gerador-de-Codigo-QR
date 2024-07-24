import React from 'react';
import QRCodeGenerator from '../../components/QRCodeGenerator';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-100 via-gray-100 to-gray-100 p-6">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-2xl border-b-4 border-blue-500">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900">Gerador de Código QR</h1>
        <QRCodeGenerator />
      </div>
      <footer className="mt-8 text-gray-700 text-center">
        <p className="mb-2">Desenvolvido por [DannielLima]</p>
        <p>
          <a href="https://github.com/DannielLima" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            GitHub
          </a>
          {' | '}
          <a href="https://linkedin.com/in/DannielLima" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            LinkedIn
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Home;