import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const GenerateSite = () => {
  const [siteName, setSiteName] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [customPages, setCustomPages] = useState([]);
  const [defaultPages, setDefaultPages] = useState([]);

  const templates = {
    showcase: ['Accueil', 'À propos', 'Contact'],
    blog: ['Accueil', 'Articles', 'Contact'],
    ecommerce: ['Accueil', 'Produits', 'Panier', 'Contact'],
  };

  // Mise à jour du nom du site
  const handleSiteName = (e) => {
    setSiteName(e.target.value);
  };

  // Sélectionner un modèle
  const handleTemplateSelection = (template) => {
    setSelectedTemplate(template);
    setDefaultPages(templates[template]);
    setCustomPages([]);
  };

  // Ajouter une page personnalisée
  const addCustomPage = () => {
    setCustomPages([...customPages, '']);
  };

  // Supprimer une page personnalisée
  const removeCustomPage = (index) => {
    const updatedPages = customPages.filter((_, i) => i !== index);
    setCustomPages(updatedPages);
  };

  // Mise à jour des noms des pages personnalisées
  const handleCustomPageName = (index, value) => {
    const updatedPages = [...customPages];
    updatedPages[index] = value;
    setCustomPages(updatedPages);
  };

  // Générer les données du site
  const handleGenerateSite = () => {
    const siteData = {
      name: siteName,
      template: selectedTemplate,
      pages: [...defaultPages, ...customPages],
    };

    console.log('Site à générer', siteData);
    alert(
      `Le site "${siteData.name}" a été généré avec les pages : ${siteData.pages.join(
        ', '
      )}`
    );
  };

  return (
    <div className="font-sans">
      {/* Barre de navigation fixe */}
      <nav className="flex justify-between items-center bg-[#C0D6DF] text-[#166088] p-4 fixed w-full top-0 z-10 shadow-lg">
        <h1 className="text-xl font-bold">UmojaGen</h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:underline transition-all">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/generate" className="hover:underline transition-all">
              Générer un site
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline transition-all">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Contenu principal */}
      <div className="flex-grow container mx-auto p-4 mt-16">
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
          <h3 className="text-lg font-medium">Choisissez un modèle :</h3>
          <div className="flex space-x-4 mt-2">
            {Object.keys(templates).map((template) => (
              <button
                key={template}
                onClick={() => handleTemplateSelection(template)}
                className={`px-4 py-2 rounded-lg shadow-lg ${
                  selectedTemplate === template
                    ? 'bg-[#166088] text-white'
                    : 'bg-[#DBE9EE] text-[#166088]'
                } hover:bg-[#C0D6DF] transition-all`}
              >
                {template === 'showcase' && 'Site Vitrine'}
                {template === 'blog' && 'Blog'}
                {template === 'ecommerce' && 'E-commerce'}
              </button>
            ))}
          </div>
        </div>

        {selectedTemplate && (
          <div>
            <h3 className="text-lg font-medium">Pages par défaut :</h3>
            <ul className="list-disc ml-6 mt-2">
              {defaultPages.map((page, index) => (
                <li key={index} className="text-gray-700">
                  {page}
                </li>
              ))}
            </ul>

            <div className="mt-4">
              <h3 className="text-lg font-medium">Ajouter des pages personnalisées :</h3>
              {customPages.map((page, index) => (
                <div key={index} className="flex items-center mt-2">
                  <input
                    type="text"
                    value={page}
                    onChange={(e) => handleCustomPageName(index, e.target.value)}
                    placeholder={`Nom de la page ${index + 1}`}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                  <button
                    onClick={() => removeCustomPage(index)}
                    className="ml-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  >
                    Supprimer
                  </button>
                </div>
              ))}
              <button
                onClick={addCustomPage}
                className="mt-2 px-4 py-2 bg-[#DBE9EE] text-[#166088] rounded-lg shadow-lg hover:bg-[#C0D6DF] transition-all"
              >
                Ajouter une page
              </button>
            </div>
          </div>
        )}

        <button
          onClick={handleGenerateSite}
          className="mt-6 w-full py-3 px-8 bg-[#DBE9EE] text-[#166088] rounded-lg shadow-lg hover:bg-[#C0D6DF] transition-all transform hover:scale-105"
        >
          Générer le site web
        </button>
      </div>
    </div>
  );
};

export default GenerateSite;
