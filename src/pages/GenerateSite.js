import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import showcaseTemplate from '../templates/showcase.json';
import portfolioTemplate from '../templates/portfolio.json';
import ecommerceTemplate from '../templates/ecommerce.json';
import blogTemplate from '../templates/blog.json';
import PreviewSite from '../pages/PreviewSite'; 

const GenerateSite = () => {
  const [siteName, setSiteName] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [preview, setPreview] = useState(null);

  // Mapping des templates avec useMemo pour éviter les recalculs inutiles
  const templates = useMemo(() => ({
    siteVitrine: showcaseTemplate,
    portfolio: portfolioTemplate,
    ecommerce: ecommerceTemplate,
    blog: blogTemplate,
  }), []); // Dépendances vides car templates ne changent pas

  // Gestion du changement du nom du site
  const handleSiteName = (e) => setSiteName(e.target.value);

  // Gestion du changement de template
  const handleTemplateChange = (e) => {
    setSelectedTemplate(e.target.value);
  };

  // Met à jour la prévisualisation lorsqu'un template est sélectionné
  useEffect(() => {
    setPreview(templates[selectedTemplate]);
  }, [selectedTemplate, templates]);

  // Générer le site
  const handleGenerateSite = () => {
    if (!siteName) {
      alert('Veuillez entrer un nom de site.');
      return;
    }

    console.log('Site généré :', {
      name: siteName,
      template: selectedTemplate,
      preview,
    });

    alert(`Le site "${siteName}" a été généré avec le modèle "${selectedTemplate}".`);
  };

  return (
    <div className="font-sans">
      {/* Barre de navigation */}
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

      {/* Contenu principal */}
      <div className="flex-grow container mx-auto p-4 pt-16">
        <h1 className="text-3xl font-bold text-center mb-6">Générer un site web</h1>

        <div className="mb-4">
          <label className="block text-lg font-medium">Nom du site :</label>
          <input
            type="text"
            value={siteName}
            onChange={handleSiteName}
            className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
            placeholder="Nom du site"
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium">Choisissez un modèle :</label>
          <select
            value={selectedTemplate}
            onChange={handleTemplateChange}
            className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
          >
            {Object.keys(templates).map((key) => (
              <option key={key} value={key}>
                {key.charAt(0).toUpperCase() + key.slice(1)} {/* Capitaliser */}
              </option>
            ))}
          </select>
        </div>

        {/* Prévisualisation du site */}
        <div className="mb-4">
          <h3 className="text-xl font-medium">Prévisualisation :</h3>
          {preview ? (
            <div className="bg-gray-100 p-4 rounded-lg overflow-auto">
              {/* Passer les données JSON au composant PreviewSite */}
              <PreviewSite previewData={preview} />
            </div>
          ) : (
            <p>Aucun modèle sélectionné.</p>
          )}
        </div>

        <button
          onClick={handleGenerateSite}
          className="w-full py-3 px-8 bg-[#DBE9EE] text-[#166088] rounded-lg shadow-lg hover:bg-[#C0D6DF] transition-all transform hover:scale-105"
        >
          Générer le site web
        </button>
      </div>
    </div>
  );
};

export default GenerateSite;
