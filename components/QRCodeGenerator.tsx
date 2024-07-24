"use client";

import React, { useState } from 'react';
import QRCode from 'qrcode';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const QRCodeGenerator: React.FC = () => {
  const [text, setText] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const generateQRCode = async () => {
    setLoading(true);
    setError('');
    try {
      const url = await QRCode.toDataURL(text);
      setQrCodeUrl(url);
    } catch (error) {
      setError('Erro ao gerar o código QR');
      console.error('Erro ao gerar o código QR', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-8 bg-white shadow-2xl rounded-2xl max-w-md mx-auto border-t-4 border-blue-500">
      <h2 className="text-3xl font-extrabold mb-6 text-gray-900">Gerar QR Code</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Digite o texto para o QR Code"
        className="border p-3 mb-4 rounded-lg w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
      />
      <button
        onClick={generateQRCode}
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
      >
        {loading ? (
          <AiOutlineLoading3Quarters className="animate-spin" />
        ) : (
          'Gerar QR Code'
        )}
      </button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {qrCodeUrl && (
        <motion.div
          className="mt-6 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={qrCodeUrl} alt="QR Code" className="mb-4 border p-2 rounded-lg shadow-md" />
          <a href={qrCodeUrl} download="qrcode.png" className="text-blue-600 hover:underline flex items-center">
            <FiDownload className="mr-2" />
            Baixar QR Code
          </a>
        </motion.div>
      )}
    </div>
  );
};

export default QRCodeGenerator;