import React from 'react';
import ThemeCard from '../components/gallery/gallery';

const galleryThemes = [
  {
    title: 'Bride',
    image: '/images/bride.jpg',
    description: 'Discover elegant bridal looks and inspirations.',
    link: '/gallery/bride',
  },
  {
    title: 'Nail',
    image: '/images/nail.jpg',
    description: 'Explore creative nail art and designs.',
    link: '/gallery/nail',
  },
  {
    title: 'Eyelash',
    image: '/images/eyelash.jpg',
    description: 'Find stunning eyelash styles and extensions.',
    link: '/gallery/eyelash',
  },
  {
    title: 'Hair',
    image: '/images/hair.jpg',
    description: 'View trendy hairstyles and hair makeovers.',
    link: '/gallery/hair',
  },
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Gallery</h1>
      <div className="gallery-grid">
        {galleryThemes.map((theme) => (
          <ThemeCard
            key={theme.title}
            title={theme.title}
            image={theme.image}
            description={theme.description}
            link={theme.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
