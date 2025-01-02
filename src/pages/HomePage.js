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
    
      {/* Section "Qui sommes-nous" */}
      <motion.section
        className="py-16 bg-[#C0D6DF] text-[#166088]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Qui sommes-nous ?</h2>
          <p className="text-lg mb-6">
            Nous sommes une équipe passionnée par la création de sites web modernes et intuitifs. Notre objectif est de rendre la création de sites accessible à tous, même sans compétences techniques.
          </p>
        </div>
      </motion.section>

      {/* Section "Nos services" */}
      <motion.section
        className="py-16 bg-[#4F6D7A] text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Nos services</h2>
          <p className="text-lg mb-6">
            Nous offrons des outils puissants pour créer des sites web facilement et rapidement, tout en personnalisant chaque détail pour un résultat unique.
          </p>
        </div>
      </motion.section>

      {/* Section "Contact" */}
      <motion.section
        className="py-16 bg-[#4A6FA5] text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Contactez-nous</h2>
          <p className="text-lg mb-6">
            Si vous avez des questions, n'hésitez pas à nous contacter. Nous serions heureux de vous aider à créer votre site web.
          </p>
          <Link to="/contact">
            <motion.button
              className="px-8 py-4 bg-[#C0D6DF] text-[#166088] rounded-lg shadow-lg hover:bg-[#DBE9EE] transition-all transform hover:scale-105" // Bleu clair et bleu foncé
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Contactez-nous
            </motion.button>
          </Link>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-[#166088] text-white text-center p-4 mt-auto">
        <p>© 2024 UmojaGen - Tous droits réservés</p>
      </footer>
    </div>

  );
};

export default HomePage;
