import React from 'react';

// Composants pour chaque type de section
const HeroSection = ({ title, subtitle, ctaLink, ctaText }) => (
  <section className="hero bg-blue-500 text-white p-10">
    <h1 className="text-4xl font-bold">{title}</h1>
    <p className="mt-4">{subtitle}</p>
    {ctaLink ? (
      <a href={ctaLink} className="btn mt-4 inline-block bg-white text-blue-500 px-6 py-2 rounded-full">
        {ctaText}
      </a>
    ) : (
      <button className="btn mt-4 inline-block bg-white text-blue-500 px-6 py-2 rounded-full">
        {ctaText}
      </button>
    )}
  </section>
);

const HeaderSection = ({ title, navItems }) => (
  <header className="header bg-gray-800 text-white p-4">
    <h1 className="text-3xl font-bold">{title}</h1>
    <nav>
      <ul className="flex space-x-4">
        {navItems.map((item, index) => (
          <li key={index}><a href="#" className="text-white">{item}</a></li>
        ))}
      </ul>
    </nav>
  </header>
);

const FeaturesSection = ({ items }) => (
  <section className="features p-10">
    <h2 className="text-2xl font-bold">Features</h2>
    <div className="grid grid-cols-3 gap-6">
      {items.map((item, index) => (
        <div key={index} className="feature-item">
          <h3 className="font-semibold">{item.title}</h3>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  </section>
);

const ProductsSection = ({ title, items }) => (
  <section className="products p-10">
    <h2 className="text-2xl font-bold">{title}</h2>
    <div className="grid grid-cols-4 gap-6">
      {items.map((item, index) => (
        <div key={index} className="product-item">
          <img src={item.image} alt={item.title} className="w-full" />
          <h3 className="font-semibold">{item.title}</h3>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  </section>
);

const ProjectsSection = ({title, items }) => (
  <section className="products p-10">
    <h2 className='text-2xl font-bold'> {title} </h2>
    <div className="grid grid-cols-3 gap-6"> 
      {items.map((item,index) => ( 
        <div key={index} className='project-item'>
          <h3 className='font-semibold'> {item.title} </h3>
          <h4> {item.description} </h4>
        </div>
      ))}
    </div>
  </section>
);

const FooterSection = ({ content }) => (
  <footer className="footer bg-gray-800 text-white p-4 text-center">
    <p>{content}</p>
  </footer>
);

const PreviewSite = ({ previewData }) => {
  if (!previewData || !previewData.sections) {
    return <p>Aucune donnée de prévisualisation disponible.</p>;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mt-8">{previewData.name}</h1>
      {previewData.sections.map((section, sectionIndex) => {
        switch (section.type) {
          case 'hero':
            return <HeroSection key={sectionIndex} {...section} />;
          case 'header':
            return <HeaderSection key={sectionIndex} {...section} />;
          case 'features':
            return <FeaturesSection key={sectionIndex} {...section} />;
          case 'products':
            return <ProductsSection key={sectionIndex} {...section} />;
          case 'projects' : 
             return <ProjectsSection key={sectionIndex} {...section} /> 
          case 'footer': 
            return <FooterSection key={sectionIndex} {...section} />;
          default:
            return <p key={sectionIndex}>Section de type inconnu.</p>;
        }
      })}
    </div>
  );
};

export default PreviewSite;
