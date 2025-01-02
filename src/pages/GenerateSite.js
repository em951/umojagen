import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const GenerateSite = () => {
  const [siteName, setSiteName] = useState('');
  const [pageCount, setPageCount] = useState(1);
  const [pageNames, setPageNames] = useState(['']);

  // Mise à jour du nom du site
  const handleSiteName = (e) => {
    setSiteName(e.target.value);
  };

  // Mise à jour du nombre de pages
  const handlePageCount = (e) => {
    const count = parseInt(e.target.value) || 1;
    setPageCount(count);
    const newPageNames = Array(count).fill('').map((_, index) => pageNames[index] || '');
    setPageNames(newPageNames);
  };

  // Mise à jour des noms des pages
  const handlePageName = (index, value) => {
    const newPageNames = [...pageNames];
    newPageNames[index] = value;
    setPageNames(newPageNames);
  };

  // Générer les données du site
  const handleGenerateSite = () => {
    const siteData = {
      name: siteName,
      pages: pageNames,
    };

    console.log('Site à générer', siteData);
    alert(`Le site "${siteData.name}" a été généré avec ${siteData.pages.length} page(s) : ${siteData.pages.join(', ')}`);
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Barre de navigation */}
      <nav className="flex justify-between items-center bg-blue-600 text-white p-4">
        <h1 className="text-xl font-bold">UmojaGen</h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:underline">Accueil</Link>
          </li>
          <li>
            <Link to="/generate" className="hover:underline">Générer un site</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Contenu principal */}
      <div className="flex-grow container mx-auto p-4">
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
          <label className="block text-lg font-medium">Nombre de pages :</label>
          <input
            type="number"
            value={pageCount}
            onChange={handlePageCount}
            min="1"
            className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">Nom des pages :</h3>
          {pageNames.map((pageName, index) => (
            <div key={index} className="mb-2">
              <label>Page {index + 1} :</label>
              <input
                type="text"
                value={pageName}
                onChange={(e) => handlePageName(index, e.target.value)}
                placeholder={`Nom de la page ${index + 1}`}
                className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
              />
            </div>
          ))}
        </div>

        <button
          onClick={handleGenerateSite}
          className="w-full py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600"
        >
          Générer le site web
        </button>
      </div>
    </div>
  );
};

export default GenerateSite;
