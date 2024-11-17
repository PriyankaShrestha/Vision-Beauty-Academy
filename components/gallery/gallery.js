import React from 'react';
import Link from 'next/link';

const ThemeCard = ({ title, image, description, link }) => {
  return (
    <div className="theme-card">
      <img src={image} alt={title} className="theme-image" />
      <h2 className="theme-title">{title}</h2>
      <p className="theme-description">{description}</p>
      <Link href={link}>
        <a className="theme-link">View More</a>
      </Link>
    </div>
  );
};

export default ThemeCard;
