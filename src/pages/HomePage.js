import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div className="font-sans">
      {/* Barre de navigation fixe */}
      <nav className="flex justify-between items-center bg-[#C0D6DF] text-[#166088] p-4 fixed w-full top-0 z-10 shadow-lg">
        <h1 className="text-xl font-bold">UmojaGen</h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:underline transition-all">Accueil</Link>
          </li>
          <li>
            <Link to="/generate" className="hover:underline transition-all">Générer un site</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline transition-all">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Section "Bienvenue" */}
      <div
        className="welcome-section h-screen bg-cover bg-center text-white flex flex-col justify-center items-center pt-20"
        style={{ backgroundImage: 'url("https://www.example.com/votre-image-de-fond.jpg")' }}
      >
        <motion.h2
          className="text-5xl font-bold mb-4 text-[#4A6FA5]" // Bleu vif
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          UmojaGen - Générateur de sites sur mesure
        </motion.h2>
        
        <motion.p
          className="text-xl mb-6 text-[#4F6D7A]" // Bleu-gris moyen
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          Créez facilement des sites web professionnels en quelques clics, adaptés à vos besoins.
        </motion.p>
        
        <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Link to="/generate">
            <motion.button
              className="px-8 py-4 bg-[#DBE9EE] text-[#166088] rounded-lg shadow-lg hover:bg-[#C0D6DF] transition-all transform hover:scale-105" // Bleu très clair et bleu foncé
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Commencer
            </motion.button>
          </Link>
        </motion.div>
      </div>

    </div>
  );
};

export default HomePage;
